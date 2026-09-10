import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { AppRoutes } from "./App";

export interface RenderResult {
  html: string;
  head: string;
}

/**
 * Renders one route to static HTML at build time.
 * Called by scripts/prerender.mjs once per route in the sitemap.
 */
export function render(url: string): RenderResult {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } }
  });

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </QueryClientProvider>
  );

  // Must run after renderToString: react-helmet collects tags during render.
  const helmet = Helmet.renderStatic();
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString()
  ]
    .filter(Boolean)
    .join("\n    ");

  return { html, head };
}
