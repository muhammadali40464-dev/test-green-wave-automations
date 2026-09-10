import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import BlogCTASection from "@/components/BlogCTASection";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, AlertTriangle, Phone } from "lucide-react";

const faqs = [
  { q: "How much does a chatbot cost in Pakistan?", a: "Three different answers, depending on what you are buying. A self-serve subscription tool costs roughly Rs. 5,000 to Rs. 30,000 a month but you build and maintain the bot yourself. A freelancer typically charges Rs. 20,000 to Rs. 80,000 for a one-off build with no ongoing support. A built-and-maintained service like ours is Rs. 49,999 once plus Rs. 9,999 a month. On top of any of these, Meta charges its own per-message fees for WhatsApp." },
  { q: "How much is a chatbot subscription?", a: "Global tools advertise from about nineteen dollars a month, but that entry price usually covers a single agent, a low message cap and no AI. The plans businesses actually end up on are far higher, and none of them include somebody doing the work of designing and building the conversation. Our platform fee is Rs. 9,999 a month with unlimited contacts and chats, but the reason it works is the build that sits on top of it." },
  { q: "How much does it cost to create a chatbot from scratch?", a: "Writing one yourself from scratch is rarely worth it. You would need a developer, hosting, an AI provider account, and somebody to maintain it as your products and prices change. In Pakistan that is a salaried developer, which is more expensive per month than a built service, and it stops working the day that person leaves." },
  { q: "Is there a WhatsApp chatbot available in Pakistan?", a: "Yes. Pakistani businesses can use the official WhatsApp Business API through an approved provider, and several local companies build on it, including us. The API is available, the constraint is not availability but whether your enquiry volume justifies the cost of a build." },
  { q: "What does WhatsApp itself charge?", a: "Since 1 July 2025 Meta charges per message delivered rather than per 24-hour conversation. Marketing templates cost the most, utility and authentication templates less, and free-form replies inside an open 24-hour customer service window are free until 1 October 2026, when that changes. Meta bills this to you directly. Any provider claiming unlimited messages included is not telling you the whole picture." },
  { q: "Can I buy a chatbot and own it outright?", a: "You can commission a build and own the conversation design, the content and the data. What nobody sells outright is the messaging channel itself: WhatsApp, Instagram and Messenger all run on Meta infrastructure with Meta fees, whoever you buy from." },
  { q: "How do I know if a quote is reasonable?", a: "Ask three questions. What happens when the bot cannot answer? What does Meta charge on top? Who updates it when my prices change? A quote that has no answer to the second and third questions is a quote for building something, not for running it, and running it is where most of the value and most of the ongoing work sits." }
];

const options = [
  {
    name: "A self-serve subscription tool",
    price: "Roughly Rs. 5,000 to Rs. 30,000 a month",
    good: "Cheapest to start. Fine if your flows are simple and somebody on your team genuinely enjoys building them.",
    bad: "You design the conversation, connect the systems, and fix it when it breaks. Most of these accounts go quiet within a few months because nobody has the time."
  },
  {
    name: "A freelancer",
    price: "Roughly Rs. 20,000 to Rs. 80,000 one-off",
    good: "Cheap for a first build, and fine for something small and static.",
    bad: "Usually no ongoing maintenance. When your prices change or Meta changes a rule, the bot starts giving wrong answers and the freelancer has moved on."
  },
  {
    name: "A built and maintained service",
    price: "Rs. 49,999 once, then Rs. 9,999 a month",
    good: "Somebody scopes it, designs the conversation, connects your store or calendar, trains it on your material, and keeps it current as your business changes.",
    bad: "More expensive up front than a freelancer. Not worth it if your volume is genuinely low, and we will tell you when it is not."
  }
];

const drivers = [
  "How many channels you launch on. One is the standard build; WhatsApp plus Instagram plus a web widget is more work.",
  "Whether your systems have a ready connector. Shopify and WooCommerce are quick; a custom ERP means an engineer writing an integration.",
  "How many languages. Urdu and English is normal here. A third language means another set of flows to design and test.",
  "How many specialist agents. One support agent is simple; sales plus qualification plus order status plus bookings, each with its own knowledge, is a bigger build.",
  "Whether existing contacts and conversation history need migrating.",
  "How much changes after the 30-day support window closes."
];

const redFlags = [
  "A quote with unlimited messages included. Meta charges per message whoever you buy from, so this cost is being hidden rather than removed.",
  "A price with no mention of Meta fees at all. You will meet them on your first invoice.",
  "A guaranteed percentage increase in leads or sales. Nobody can promise that without knowing your margins, your market and your follow-up.",
  "No answer to what happens when the bot cannot answer. If there is no handover design, your customers will hit a wall.",
  "A build price with no maintenance offer. Prices change, stock changes, Meta changes rules. A bot nobody updates quietly starts lying to your customers."
];

const related = [
  { to: "/services/custom-chatbot-development", t: "Custom chatbot development — what we build and what it costs" },
  { to: "/services/whatsapp-chatbot-development", t: "WhatsApp chatbot development in Pakistan" },
  { to: "/blog/whatsapp-business-api-pakistan-guide-2025", t: "WhatsApp Business API in Pakistan: when you actually need it" },
  { to: "/blog/whatsapp-api-vs-regular-whatsapp-business", t: "WhatsApp Business app vs API: which do you need?" },
  { to: "/blog/how-chatbots-work-small-businesses-pakistan", t: "How a custom chatbot works for a small business" },
  { to: "/success-stories", t: "Example builds: what a chatbot does all day" }
];

const ChatbotPricePakistan = () => {
  const seo = getPageSEO("/blog/chatbot-price-pakistan");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path="/blog/chatbot-price-pakistan"
        keywords={seo.keywords}
        type="article"
        author={seo.author}
        publishedDate={seo.publishedDate}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "How much does a chatbot cost in Pakistan in 2026?",
            description: seo.description,
            url: "https://thechatflow.com/blog/chatbot-price-pakistan",
            datePublished: "2026-09-10",
            dateModified: "2026-09-10",
            author: { "@type": "Organization", name: "TheChatFlow" },
            publisher: { "@type": "Organization", name: "TheChatFlow", url: "https://thechatflow.com" }
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
              <Link to="/blog" className="hover:text-foreground">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Chatbot cost in Pakistan</span>
            </div>
          </div>
        </nav>

        <header className="section-padding">
          <div className="container-width max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-whatsapp-green hover:text-whatsapp-dark transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            <h1 className="font-h1 text-foreground mb-4">
              How much does a chatbot cost in Pakistan in 2026?
            </h1>

            <p className="font-body-lg text-muted-foreground mb-6">
              Most pages that answer this quote a monthly subscription and stop. That is the wrong number, because it
              leaves out the two costs that actually decide whether a chatbot is worth it: the work of building the
              thing, and what Meta charges you for every message. Here is the whole picture, in rupees.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>Published: 10 September 2026</span>
              <span>&bull;</span>
              <span>8 min read</span>
            </div>
          </div>
        </header>

        <article className="pb-8">
          <div className="container-width max-w-3xl">

            <Card className="p-6 border-2 border-whatsapp-green/30 bg-whatsapp-green/5 mb-12">
              <h2 className="font-h4 text-foreground mb-3">The short answer</h2>
              <p className="text-muted-foreground mb-3">
                A built and maintained chatbot in Pakistan costs <strong>Rs. 49,999 once and Rs. 9,999 a month</strong>,
                which is what we charge. A self-serve tool you configure yourself runs roughly Rs. 5,000 to Rs. 30,000 a
                month. A freelancer will build you something one-off for Rs. 20,000 to Rs. 80,000 and then move on.
              </p>
              <p className="text-muted-foreground m-0">
                Whichever you pick, WhatsApp charges its own per-message fee on top, billed to you by Meta. Anyone
                quoting you a flat price with unlimited messages included is hiding that cost, not removing it.
              </p>
            </Card>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Three ways to buy a chatbot, and what each really costs</h2>
              <div className="space-y-5">
                {options.map((o, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                      <h3 className="font-h4 text-foreground m-0">{o.name}</h3>
                      <span className="text-whatsapp-green font-semibold">{o.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-3"><strong className="text-foreground">Works when:</strong> {o.good}</p>
                    <p className="text-muted-foreground m-0"><strong className="text-foreground">Falls down when:</strong> {o.bad}</p>
                  </Card>
                ))}
              </div>
              <p className="font-body-base text-muted-foreground mt-6">
                The honest way to choose is by asking who is going to do the work. A subscription tool is cheap because
                you are the one building it. If nobody on your team has a spare day a week for that, the cheap option is
                the expensive one, because it quietly stops working. Our{" "}
                <Link to="/services/custom-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  custom chatbot development service
                </Link>{" "}
                exists for the businesses where that is true.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">The cost nobody quotes you: Meta&rsquo;s message fees</h2>
              <Card className="p-6 border-2 border-amber-300 bg-amber-50">
                <p className="text-amber-900 mb-4">
                  On <strong>1 July 2025</strong> Meta stopped charging per 24-hour conversation and started charging
                  <strong> per message delivered</strong>. Plenty of pricing advice written for the Pakistani market
                  still describes the old model, so budgets built on it come out wrong. There are four categories:
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/70 rounded-xl p-4">
                    <p className="font-semibold text-amber-900 m-0 mb-1">Marketing</p>
                    <p className="text-sm text-amber-900/80 m-0">Promotions and re-engagement. Dearest category.</p>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4">
                    <p className="font-semibold text-amber-900 m-0 mb-1">Utility</p>
                    <p className="text-sm text-amber-900/80 m-0">Order confirmations, reminders, delivery updates.</p>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4">
                    <p className="font-semibold text-amber-900 m-0 mb-1">Authentication</p>
                    <p className="text-sm text-amber-900/80 m-0">One-time passcodes and login codes.</p>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4">
                    <p className="font-semibold text-amber-900 m-0 mb-1">Service</p>
                    <p className="text-sm text-amber-900/80 m-0">Free-form replies inside an open 24-hour window.</p>
                  </div>
                </div>
                <p className="text-amber-900 mb-3">
                  Two things follow from this that change your bill more than any provider&rsquo;s pricing page.
                  First, when a customer messages you, a <strong>24-hour window</strong> opens in which replies are
                  free-form. Once it closes you can only reopen the conversation with a pre-approved template, and that
                  costs money. Second, click-to-WhatsApp ads and a WhatsApp button on your Facebook page open a{" "}
                  <strong>72-hour free window</strong>, which makes ads-into-WhatsApp the cheapest route to a
                  conversation most Pakistani businesses have available.
                </p>
                <p className="text-amber-900 m-0">
                  One date to put in your calendar: from <strong>1 October 2026</strong> service messages stop being
                  free. If your plan leans on high volumes of free in-window replies, redo the sums.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">What actually moves the price</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                Rs. 49,999 covers a standard build. These are the things that genuinely make a build bigger, and any
                honest quote will tell you which apply before you pay rather than after:
              </p>
              <div className="grid gap-3">
                {drivers.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="h-4 w-4 text-whatsapp-green flex-shrink-0 mt-1.5" />
                    <span className="text-muted-foreground">{d}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">What it has to save to be worth it</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                Do not take anybody&rsquo;s ROI figure, including ours. Work it out on your own numbers, because the
                answer is completely different for a clinic and for a solar installer. There are only two sums.
              </p>
              <Card className="p-6 mb-5">
                <h3 className="font-h4 text-foreground mb-3">If the bot saves you time</h3>
                <p className="text-muted-foreground m-0">
                  Count the hours your team spends each week retyping the same answers. Multiply by what that hour costs
                  you. If it clears Rs. 9,999 a month, the platform pays for itself and the build pays back over the
                  first year.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-h4 text-foreground mb-3">If the bot wins you work</h3>
                <p className="text-muted-foreground m-0">
                  Count the enquiries that currently arrive outside working hours or go unanswered. Estimate how many
                  would convert if they got an instant reply, and multiply by your profit per sale. For a business
                  selling something substantial, one recovered sale often covers the entire first year.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Red flags when someone quotes you</h2>
              <div className="space-y-3">
                {redFlags.map((r, i) => (
                  <Card key={i} className="p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{r}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Questions people ask about chatbot pricing</h2>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <Card key={i} className="p-6">
                    <h3 className="font-h4 text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground m-0">{f.a}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-4">
              <h2 className="font-h3 text-foreground mb-5">Read next</h2>
              <div className="grid md:grid-cols-2 gap-4">
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
            </section>

            <div className="text-center py-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get a fixed price for your build
                </Link>
              </Button>
            </div>
          </div>
        </article>

        <BlogCTASection />
      </main>

      <Footer />
    </>
  );
};

export default ChatbotPricePakistan;
