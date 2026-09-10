import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const suggestions = [
  { to: "/services/custom-chatbot-development", t: "Custom chatbot development" },
  { to: "/blog/chatbot-price-pakistan", t: "What a chatbot costs in Pakistan" },
  { to: "/blog/ai-agent-vs-chatbot", t: "AI agent vs chatbot" },
  { to: "/blog", t: "All articles" }
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: no route for", location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* Unknown URLs are served by the SPA fallback with a 200, so this page
          must tell crawlers not to index it or every mistyped link becomes a
          soft 404 in Search Console. */}
      <Helmet>
        <title>Page not found | TheChatFlow</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="That page does not exist. Here are the pages people usually want." />
      </Helmet>

      <MegaMenu />

      <main className="min-h-screen pt-16">
        <div className="container-width max-w-3xl section-padding">
          <p className="text-whatsapp-green font-semibold mb-3">404</p>
          <h1 className="font-h1 text-foreground mb-4">That page does not exist</h1>
          <p className="font-body-lg text-muted-foreground mb-10">
            The link may be out of date, or the address may have a typo in it. These are the pages
            people are usually looking for.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {suggestions.map((s, i) => (
              <Link
                key={i}
                to={s.to}
                className="flex items-center gap-3 p-5 rounded-xl border hover-lift text-foreground font-medium"
              >
                <ArrowRight className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                {s.t}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
