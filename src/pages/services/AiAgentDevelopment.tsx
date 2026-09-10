import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Phone, Clock, Plug, ShieldCheck } from "lucide-react";

const actions = [
  { t: "Read live order status", d: "From Shopify, WooCommerce or your own admin, so the answer is true at the moment it is given." },
  { t: "Book and hold a slot", d: "Checks the real calendar, offers what is free, writes the booking back." },
  { t: "Confirm a COD order", d: "Updates the order record, so the confirmation means something to your warehouse." },
  { t: "Write a qualified lead into your CRM", d: "A lead sitting in a chat log nobody exports is not a lead." },
  { t: "Raise and track a ticket", d: "Creates it, gives the customer the reference, answers follow-ups against it." }
];

const notForYou = [
  "Your data lives in one person's spreadsheet. There is nothing for an agent to connect to.",
  "You get under a dozen enquiries a day. A person answering properly still wins.",
  "Answering is the whole job. That is a chatbot, and it costs less.",
  "Your process changes every time. An agent has to be told what a valid booking is before it can make one."
];

const steps = [
  { n: "01", t: "We read your last two weeks of chats", d: "Sorted into questions that end with an answer, and questions where the work starts after the answer. The ratio decides the build." },
  { n: "02", t: "We check what can actually be reached", d: "Shopify and WooCommerce have proper connectors. A custom ERP may not. This happens before the quote, not three weeks into the build." },
  { n: "03", t: "We build and connect", d: "Flows, permissions, and every action tested against your real data, including the ways your business is messy in practice." },
  { n: "04", t: "We keep it current", d: "Products change, prices change, Meta changes rules. An agent nobody maintains starts quietly giving wrong answers." }
];

const faqs = [
  { q: "What is AI agent development?", a: "Building software that holds a conversation and can then act on it inside your systems. The conversation part is a chatbot and is the easy half. The development work is the connections: reading live data, writing records back, handling the cases where the data is missing or wrong, and doing it without exposing anything it should not." },
  { q: "How much does an AI agent cost in Pakistan?", a: "Our build is Rs. 49,999 once and Rs. 9,999 a month for the platform. An agent build sits at the upper end of that scope because each system it connects to is real integration work. A genuinely complex one, with a custom ERP behind it, is scoped separately before you commit to anything. On top of either, message fees are billed by the channel provider." },
  { q: "How is this different from a chatbot?", a: "One question separates them: can it change a record in your business, or can it only tell you about one? If it can only tell you, it is a chatbot whatever it is being called. We wrote a longer piece on the difference because paying for the wrong one is the most common mistake in this market." },
  { q: "How long does an agent build take?", a: "A chatbot with no integrations can be live in 24 to 48 hours. An agent depends entirely on what it has to connect to. A store on Shopify is quick. A system with no API is a conversation about whether an agent is the right purchase at all." },
  { q: "Do we need to be on a particular platform?", a: "No, but it helps. Shopify, WooCommerce and most mainstream calendars and CRMs have connectors we can use directly. Anything custom needs an API or a database we are allowed to read. If neither exists, we will tell you that before quoting." },
  { q: "Which channels can the agent run on?", a: "WhatsApp, Instagram, Facebook Messenger, Telegram and a website widget, sharing one contact record and one team inbox. The same agent behaves consistently across all of them rather than being rebuilt per channel." }
];

const related = [
  { to: "/blog/ai-agent-vs-chatbot", t: "AI agent vs chatbot: which one do you actually need?" },
  { to: "/services/custom-chatbot-development", t: "Custom chatbot development: the full service" },
  { to: "/blog/chatbot-price-pakistan", t: "What a chatbot costs in Pakistan, in rupees" },
  { to: "/services/ecommerce-chatbot-development", t: "Chatbots for Pakistani online stores" }
];

const AiAgentDevelopment = () => {
  const seo = getPageSEO("/services/ai-agent-development");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path="/services/ai-agent-development"
        keywords={seo.keywords}
        type="website"
        author={seo.author}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Agent Development",
            description: seo.description,
            url: "https://thechatflow.com/services/ai-agent-development",
            serviceType: "AI agent development",
            provider: { "@type": "Organization", name: "TheChatFlow", url: "https://thechatflow.com" },
            areaServed: { "@type": "Country", name: "Pakistan" },
            offers: {
              "@type": "Offer",
              priceCurrency: "PKR",
              price: "49999",
              description: "One-time build. Platform subscription Rs. 9,999 per month. Channel message fees billed separately."
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
              <span className="text-foreground">AI agent development</span>
            </div>
          </div>
        </nav>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-4 py-2 rounded-full font-medium text-sm mb-6">
                <Plug className="h-4 w-4 text-whatsapp-green" />
                Connected to the systems you already run
              </div>

              <h1 className="font-h1 text-foreground mb-6">
                AI agent development
                <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                  for Pakistani businesses
                </span>
              </h1>

              <p className="font-body-lg text-muted-foreground mb-8">
                An agent does not just answer. It checks the stock, books the slot, confirms the order and writes the
                record back. We build the connections that make that true, and we say plainly when you would be better
                off with something smaller.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a free scoping call
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/blog/ai-agent-vs-chatbot">
                    Agent or chatbot? Read this first
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-whatsapp-green" />Rs. 49,999 fixed build price</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-whatsapp-green" />Scoped before you pay</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-whatsapp-green" />We turn down bad-fit projects</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl">
              <h2 className="font-h2 text-foreground mb-5">One question tells you if you need one</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                Take the task that costs your team the most time and ask what finishing it requires. If the customer
                wants information you already have written down, answering is the job, and a chatbot does that for
                less.
              </p>
              <p className="font-body-base text-muted-foreground mb-5">
                If the reply is worthless until something moves in a system afterwards, that is an agent. Where is my
                order. Book me for Thursday. Change my delivery address. Confirm my COD parcel.
              </p>
              <p className="font-body-base text-muted-foreground">
                We wrote the long version of this in{" "}
                <Link to="/blog/ai-agent-vs-chatbot" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  AI agent vs chatbot
                </Link>
                , including the five cases where an agent is the wrong buy. It is worth the nine minutes before you
                spend anything.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl mb-8">
              <h2 className="font-h2 text-foreground mb-4">What an agent can actually do</h2>
              <p className="font-body-base text-muted-foreground">
                Every line below is a connection somebody builds, secures and tests against your live data. That work
                is the price difference between an agent and a chatbot.
              </p>
            </div>

            <div className="max-w-3xl divide-y border-y">
              {actions.map((a, i) => (
                <div key={i} className="py-5 flex items-start gap-4">
                  <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-h4 text-foreground mb-1">{a.t}</h3>
                    <p className="text-muted-foreground m-0">{a.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body-base text-muted-foreground max-w-3xl mt-8">
              Two connections is the usual sweet spot. A store that can read live order status and confirm a COD parcel
              has removed most of its repetitive work without paying for a system that does everything. That pattern is
              covered in more depth on our{" "}
              <Link to="/services/ecommerce-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                e-commerce chatbot page
              </Link>.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl mb-8">
              <h2 className="font-h2 text-foreground mb-4">What it costs</h2>
              <p className="font-body-base text-muted-foreground">
                The same price as the rest of our work, because the platform and the maintenance are the same. What
                moves is scope, and we tell you which parts apply before you pay rather than after.
              </p>
            </div>

            <Card className="p-7 max-w-3xl border-2 border-whatsapp-green/30 bg-whatsapp-green/5">
              <div className="grid sm:grid-cols-2 gap-6 mb-5">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Build, one time</p>
                  <p className="font-h3 text-foreground m-0">Rs. 49,999</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Platform, monthly</p>
                  <p className="font-h3 text-foreground m-0">Rs. 9,999</p>
                </div>
              </div>
              <p className="text-muted-foreground m-0">
                Message fees are billed by the channel, not by us. On WhatsApp that is Meta, per message. Anyone
                quoting you a flat price with unlimited messages included is hiding that cost rather than removing it.
                Our{" "}
                <Link to="/blog/chatbot-price-pakistan" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  full pricing breakdown
                </Link>{" "}
                compares this against subscription tools and freelance builds.
              </p>
            </Card>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl mb-8">
              <h2 className="font-h2 text-foreground mb-4">When we will tell you not to buy one</h2>
              <p className="font-body-base text-muted-foreground">
                We turn down more agent projects than we take. Any one of these on its own makes the cheaper build the
                better one.
              </p>
            </div>

            <div className="max-w-3xl divide-y border-y">
              {notForYou.map((n, i) => (
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
            <div className="max-w-3xl mb-8">
              <h2 className="font-h2 text-foreground mb-4">How a build runs</h2>
            </div>

            <div className="max-w-3xl grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {steps.map((s, i) => (
                <div key={i}>
                  <p className="font-mono text-sm text-whatsapp-green font-semibold mb-2">{s.n}</p>
                  <h3 className="font-h4 text-foreground mb-2">{s.t}</h3>
                  <p className="text-muted-foreground m-0">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <h2 className="font-h2 text-foreground mb-8 max-w-3xl">Questions we get asked</h2>
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

        <section className="section-padding">
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
                Send us a fortnight of your chat history
              </h2>
              <p className="text-white/90 text-lg mb-8">
                We will sort it, tell you whether you need an agent or a chatbot, and quote the one you actually need.
                Including when that is the cheaper one.
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

export default AiAgentDevelopment;
