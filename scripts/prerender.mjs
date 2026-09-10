/**
 * Build-time static generation for the Vite SPA.
 *
 * Renders every indexable route to real HTML so crawlers get a complete page
 * without executing JavaScript. Runs on plain Node - no headless browser - so
 * it works inside Vercel's build with no extra system dependencies.
 *
 * Routes come from public/sitemap.xml, which keeps the two in sync by
 * construction: a URL that is not in the sitemap does not get prerendered,
 * and a prerendered URL that 404s would show up here as a render failure.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrEntry = join(root, "dist-ssr", "entry-server.js");

if (!existsSync(ssrEntry)) {
  console.error("prerender: SSR bundle missing at dist-ssr/entry-server.js");
  process.exit(1);
}

const { render } = await import(pathToFileURL(ssrEntry).href);

const sitemap = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>\s*https:\/\/thechatflow\.com([^<\s]*)\s*<\/loc>/g)]
  .map((m) => m[1] || "/")
  .map((p) => (p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p));

if (routes.length === 0) {
  console.error("prerender: no routes found in sitemap.xml");
  process.exit(1);
}

// Guard: a route registered in App.tsx but missing from the sitemap would ship
// as an unprerendered page and nobody would notice. Fail the build instead.
const appSrc = readFileSync(join(root, "src", "App.tsx"), "utf8");
const declared = [...appSrc.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => p !== "*");
const missing = declared.filter((p) => !routes.includes(p));
if (missing.length) {
  console.error("prerender: routes registered in App.tsx but absent from sitemap.xml:\n  " + missing.join("\n  "));
  process.exit(1);
}

const template = readFileSync(join(dist, "index.html"), "utf8");

// react-helmet emits title, description, keywords, author, robots, canonical
// and the og:/twitter: set per page. Drop the template's copies so the output
// carries exactly one of each rather than the homepage's alongside the page's.
const OWNED_BY_HELMET = [
  /^\s*<title>[\s\S]*?<\/title>\s*$/gim,
  /^\s*<meta\s+name="title"[^>]*>\s*$/gim,
  /^\s*<meta\s+name="description"[^>]*>\s*$/gim,
  /^\s*<meta\s+name="keywords"[^>]*>\s*$/gim,
  /^\s*<meta\s+name="author"[^>]*>\s*$/gim,
  /^\s*<meta\s+name="robots"[^>]*>\s*$/gim,
  /^\s*<link\s+rel="canonical"[^>]*>\s*$/gim,
  /^\s*<meta\s+(?:property|name)="og:(?:title|description|url|type)"[^>]*>\s*$/gim,
  /^\s*<meta\s+(?:property|name)="twitter:(?:title|description|url|card|image)"[^>]*>\s*$/gim,
  /^\s*<meta\s+name="twitter:(?:title|description|image|card)"[^>]*>\s*$/gim,
  // dev-only module paths that 404 in production
  /^\s*<link\s+rel="modulepreload"\s+href="\/src\/[^"]*"[^>]*>\s*$/gim
];

let base = template;
for (const re of OWNED_BY_HELMET) base = base.replace(re, "");
base = base.replace(/\n{3,}/g, "\n\n");

if (!base.includes('<div id="root"></div>')) {
  console.error("prerender: mount point <div id=\"root\"></div> not found in dist/index.html");
  process.exit(1);
}

let ok = 0;
const failures = [];

for (const route of routes) {
  try {
    const { html, head } = render(route);
    if (!html || html.length < 500) throw new Error(`render produced ${html.length} chars`);

    const page = base
      .replace("</head>", `  ${head}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outDir = route === "/" ? dist : join(dist, route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), page);

    const title = (page.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] || "(no title)";
    console.log(`  ${route.padEnd(52)} ${String(html.length).padStart(7)} chars  ${title.slice(0, 60)}`);
    ok++;
  } catch (err) {
    failures.push(`${route}: ${err.message}`);
  }
}

// Unknown URLs are served by the SPA fallback with a 200 status, so that
// fallback must be a page whose raw HTML already says noindex. Prerender the
// NotFound route to dist/404.html and point the rewrite at it.
try {
  const { html, head } = render("/__not-found__");
  const page = base
    .replace("</head>", `  ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  writeFileSync(join(dist, "404.html"), page);
  console.log(`  ${"404.html".padEnd(52)} ${String(html.length).padStart(7)} chars  (noindex fallback)`);
} catch (err) {
  console.error("prerender: failed to build 404.html:", err.message);
  process.exit(1);
}

console.log(`\nprerender: ${ok}/${routes.length} routes written`);
if (failures.length) {
  console.error("prerender failures:\n  " + failures.join("\n  "));
  process.exit(1);
}
