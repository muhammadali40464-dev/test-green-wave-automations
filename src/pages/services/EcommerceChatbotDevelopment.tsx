import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Phone, Package, Truck, ShoppingCart, AlertTriangle } from "lucide-react";

const jobs = [
  {
    icon: Truck,
    t: "Confirming COD orders before they ship",
    d: "The bot reaches the customer while the order is still fresh, confirms the address and the intent, and updates the order record. An unconfirmed parcel that comes back costs you the delivery both ways plus the handling."
  },
  {
    icon: Package,
    t: "Answering where is my order",
    d: "Read live from your store rather than a person opening the admin panel again. This is usually the single biggest share of a Pakistani store's inbox, and it is entirely mechanical."
  },
  {
    icon: ShoppingCart,
    t: "Following up abandoned carts",
    d: "A message within the hour rather than never. It works because it is timely and specific about what they left, not because it is clever."
  }
];

const connectors = [
  { t: "Shopify", d: "Direct connector. Orders, fulfilment status and customer records read live." },
  { t: "WooCommerce", d: "Direct connector, same scope, via your store's API." },
  { t: "Your own admin", d: "Possible where an API or a database we can read exists. We check this before quoting." },
  { t: "A spreadsheet", d: "Honestly, no. If stock lives in one person's file, there is nothing reliable to connect to yet." }
];

const notWorthIt = [
  "Under roughly a dozen orders a day. A person still does this better and cheaper.",
  "You sell one product with no variants and no delivery questions.",
  "Nobody owns the inbox. Automation makes an unowned inbox worse, not better.",
  "You want the bot to discount its way to a sale. That trains customers to wait for the bot."
];

const faqs = [
  { q: "How much does an e-commerce chatbot cost in Pakistan?", a: "Rs. 49,999 for the build and Rs. 9,999 a month for the platform. Message fees are billed by Meta directly on top, per message. A store connecting order status and COD confirmation sits inside the standard build; heavier custom integration is scoped separately before you commit." },
  { q: "Does it work with Shopify and WooCommerce?", a: "Yes, both have direct connectors, so live order status, fulfilment state and customer records are read at the moment the customer asks rather than from a stale copy. A custom admin is possible where an API or readable database exists, and we check that before quoting rather than after." },
  { q: "Can it reduce return-to-origin on COD orders?", a: "That is the main reason Pakistani stores buy one. The mechanism is simple: reach the customer while the order is fresh, confirm the address and the intent, and write that confirmation back to the order. We will not quote you a percentage, because the honest answer depends on your categories, your cities and your courier. Work it out on your own RTO cost per parcel." },
  { q: "What does WhatsApp itself charge?", a: "Since 1 July 2025 Meta charges per message delivered rather than per 24-hour conversation. A customer message opens a 24-hour window in which free-form replies are free today, and click-to-WhatsApp ads open a 72-hour free window. From 1 October 2026 free-form replies inside that window, and utility templates sent inside it, start carrying a per-message fee." },
  { q: "Which channel should a store start on?", a: "WhatsApp, almost always, because that is where Pakistani customers already message. Instagram matters if your discovery happens there. Starting on one channel and adding the second later costs less than launching on both at once and finding out only one gets used." },
  { q: "Does it handle Urdu?", a: "Yes, including Roman Urdu and voice notes, which is how a large share of Pakistani customers actually message. A bot that only understands formal English fails on the first real conversation." }
];

const related = [
  { to: "/services/whatsapp-chatbot-development", t: "WhatsApp chatbot development: the channel in detail" },
  { to: "/services/ai-agent-development", t: "AI agent development: when the bot needs to act" },
  { to: "/blog/chatbot-price-pakistan", t: "What a chatbot costs in Pakistan, in rupees" },
  { to: "/services/custom-chatbot-development", t: "Custom chatbot development: the full service" }
];

const EcommerceChatbotDevelopment = () => {
  const seo = getPageSEO("/services/ecommerce-chatbot-development");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path="/services/ecommerce-chatbot-development"
        keywords={seo.keywords}
        type="website"
        author={seo.author}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "E-commerce Chatbot Development",
            description: seo.description,
            url: "https://thechatflow.com/services/ecommerce-chatbot-development",
            serviceType: "E-commerce chatbot development",
            provider: { "@type": "Organization", name: "TheChatFlow", url: "https://thechatflow.com" },
            areaServed: { "@type": "Country", name: "Pakistan" },
            offers: {
              "@type": "Offer",
              priceCurrency: "PKR",
              price: "49999",
              description: "One-time build. Platform subscription Rs. 9,999 per month. Meta message fees billed separately."
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a }
            }))
          })}
        </script>
      </Helmet>

      <MegaMenu />

      <main className="min-h-screen pt-16">
        <nav className="py-4 border-b" aria-label="Breadcrumb">
          <div className="container-width">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <Link to="/services/custom-chatbot-development" className="hover:text-foreground">Services</Link>
              <span>/</span>
              <span className="text-foreground">E-commerce chatbot development</span>
            </div>
          </div>
        </nav>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-4 py-2 rounded-full font-medium text-sm mb-6">
                <ShoppingCart className="h-4 w-4 text-whatsapp-green" />
                Built around COD, order status and carts
              </div>

              <h1 className="font-h1 text-foreground mb-6">
                Chatbots for
                <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                  Pakistani online stores
                </span>
              </h1>

              <p className="font-body-lg text-muted-foreground mb-8">
                Most of a Pakistani store&rsquo;s inbox is three questions asked over and over, and one of them decides
                whether a parcel comes back. We build the bot that handles those, connected to your real order data so
                the answers are true when it gives them.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a free scoping call
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/blog/chatbot-price-pakistan">
                    See the full pricing breakdown
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-whatsapp-green" />Shopify and WooCommerce connectors</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-whatsapp-green" />Urdu, English and voice notes</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-whatsapp-green" />Rs. 49,999 fixed build price</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl mb-10">
              <h2 className="font-h2 text-foreground mb-4">The three jobs worth automating first</h2>
              <p className="font-body-base text-muted-foreground">
                Not everything in the inbox should be automated. These three are mechanical, high volume, and cost you
                money when they are slow.
              </p>
            </div>

            <div className="max-w-3xl space-y-8">
              {jobs.map((j, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-whatsapp-green/10 flex items-center justify-center flex-shrink-0">
                    <j.icon className="h-5 w-5 text-whatsapp-green" />
                  </div>
                  <div>
                    <h3 className="font-h4 text-foreground mb-2">{j.t}</h3>
                    <p className="text-muted-foreground m-0">{j.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body-base text-muted-foreground max-w-3xl mt-10">
              All three need the bot to reach your order data, not just answer from a script. That is the difference
              between a chatbot and{" "}
              <Link to="/services/ai-agent-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                an agent that can act
              </Link>
              , and for a store it is usually worth paying for.
            </p>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl mb-8">
              <h2 className="font-h2 text-foreground mb-4">What it connects to</h2>
              <p className="font-body-base text-muted-foreground">
                We check this before quoting. A store that cannot be read is a different conversation, and it is better
                to have it now.
              </p>
            </div>

            <div className="max-w-3xl divide-y border-y">
              {connectors.map((c, i) => (
                <div key={i} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <h3 className="font-h4 text-foreground sm:w-44 flex-shrink-0 m-0">{c.t}</h3>
                  <p className="text-muted-foreground m-0">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl mb-8">
              <h2 className="font-h2 text-foreground mb-4">The message-cost maths nobody shows you</h2>
              <p className="font-body-base text-muted-foreground">
                For a store this matters more than the build price, because volume is the whole point. Two rules decide
                most of your bill.
              </p>
            </div>

            <Card className="p-7 max-w-3xl border-2 border-amber-300 bg-amber-50">
              <div className="flex items-start gap-3 mb-5">
                <AlertTriangle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-1" />
                <p className="text-amber-900 m-0">
                  Since <strong>1 July 2025</strong> Meta charges per message delivered, not per 24-hour conversation.
                  Budgets built on the old model come out wrong, and most advice written for this market still
                  describes it.
                </p>
              </div>
              <p className="text-amber-900 mb-4">
                When a customer messages you first, a <strong>24-hour window</strong> opens where replies are
                free-form. Click-to-WhatsApp ads open a <strong>72-hour free window</strong>, which makes
                ads-into-WhatsApp the cheapest route to a conversation most Pakistani stores have available.
              </p>
              <p className="text-amber-900 m-0">
                One date for the calendar: from <strong>1 October 2026</strong> free-form replies inside that window,
                and utility templates sent inside it, start carrying a per-message fee. If your plan leans on high
                volumes of free in-window replies, redo the sums now.
              </p>
            </Card>

            <p className="font-body-base text-muted-foreground max-w-3xl mt-8">
              The practical consequence is that resolving a request in three messages beats resolving it in eleven.
              Our{" "}
              <Link to="/services/whatsapp-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                WhatsApp chatbot page
              </Link>{" "}
              goes through the template categories and the verification process in full.
            </p>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl mb-8">
              <h2 className="font-h2 text-foreground mb-4">When we would tell you to wait</h2>
            </div>
            <div className="max-w-3xl divide-y border-y">
              {notWorthIt.map((n, i) => (
                <div key={i} className="py-4 flex items-start gap-4">
                  <X className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{n}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <h2 className="font-h2 text-foreground mb-8 max-w-3xl">Questions store owners ask</h2>
            <div className="max-w-3xl divide-y border-y">
              {faqs.map((f, i) => (
                <div key={i} className="py-6">
                  <h3 className="font-h4 text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground m-0">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <h2 className="font-h3 text-foreground mb-6">Read next</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
              {related.map((r, i) => (
                <Link key={i} to={r.to} className="block">
                  <Card className="p-5 h-full hover-lift">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-whatsapp-green flex-shrink-0 mt-1" />
                      <span className="text-foreground font-medium">{r.t}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal">
          <div className="container-width">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Tell us your order volume and your RTO rate
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Those two numbers are enough for us to say whether this pays for itself in your store, and we will tell
                you if it does not.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Book a free scoping call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EcommerceChatbotDevelopment;
