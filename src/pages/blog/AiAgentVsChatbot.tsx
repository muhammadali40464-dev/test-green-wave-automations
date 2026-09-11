import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import BlogCTASection from "@/components/BlogCTASection";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertTriangle, Check, X } from "lucide-react";

const tiers = [
  {
    name: "A rule-based bot",
    sub: "Menus, keywords and decision trees",
    does: "Follows a script somebody wrote in advance. Press 1 for prices, press 2 for delivery. It answers only what it was told to answer.",
    fails: "Anything phrased in a way the script did not anticipate. Ask it a question sideways and it loops back to the menu.",
    fit: "Fine for a shop with five repeated questions and no budget. Most Pakistani businesses outgrow one within a few months."
  },
  {
    name: "An AI chatbot",
    sub: "A language model answering from your material",
    does: "Reads the question in whatever words the customer used, in English or Urdu, and answers from your catalogue, prices and policies. No menu.",
    fails: "Doing anything. It knows your return policy and will explain it beautifully. It cannot process the return.",
    fit: "The right answer for most businesses whose problem is that the same questions arrive two hundred times a week."
  },
  {
    name: "An AI agent",
    sub: "A model that can also act",
    does: "Everything above, plus it can reach into your systems. Check live stock, book the slot, raise the ticket, take the order, push the record into your CRM.",
    fails: "Being cheap or quick to build. Every action it can take is a connection somebody has to build, secure and test against your real data.",
    fit: "Businesses where the work after the answer is the expensive part, and where the systems it needs to reach actually have a way in."
  }
];

const agentWorthIt = [
  "Order status where customers ask constantly and the answer changes hourly. Reading it live beats a human opening the panel forty times a day.",
  "Appointment booking against a real calendar. Checking availability, holding the slot and confirming it is the entire job, and it is mechanical.",
  "Cash-on-delivery confirmation, where the agent has to update the order record for the confirmation to mean anything to your warehouse.",
  "Lead qualification that writes into your CRM. A qualified lead sitting in a chat log nobody exports is not a lead.",
  "Anything where a human currently reads a message, then types the same information into a second system. That retyping is what an agent removes."
];

const agentWrongBuy = [
  "Your systems have no API. If stock lives in a spreadsheet on one person's laptop, there is nothing for an agent to connect to, and no amount of AI fixes that.",
  "Your volume is low. Under roughly a dozen enquiries a day, a person answering properly beats anything automated, and we will say so.",
  "The answer is the whole job. Clinics, tuition centres and consultancies often just need questions answered fast and accurately. That is a chatbot, and it costs less.",
  "You have not written down your own process. An agent has to be told what a valid booking is before it can make one. If your team does it differently every time, the build stalls on that, not on the AI.",
  "Somebody sold you the word. Agent is the term this year the way API was two years ago. It is a capability, not a tier of quality."
];

const faqs = [
  {
    q: "Is an AI agent and a chatbot the same thing?",
    a: "No, though the line is blurrier than vendors make it sound. A chatbot handles the conversation. An AI agent handles the conversation and can then act on it inside your systems: check stock, book the slot, update the order. Every AI agent contains a chatbot. Not every chatbot is an agent, and plenty of businesses are better served by one that is not."
  },
  {
    q: "What is the difference between a chatbot and an AI chatbot?",
    a: "A plain chatbot follows a decision tree written in advance and answers only what it was scripted to answer. An AI chatbot passes the customer's message to a language model that understands it in whatever words they used, then answers from your own material. The practical difference is that a customer cannot phrase a question wrongly to an AI chatbot, whereas a rule-based bot fails constantly on ordinary phrasing."
  },
  {
    q: "What is a rule-based chatbot?",
    a: "A bot built from menus, keywords and if-then branches. Press 1 for prices, press 2 for delivery. It is predictable and cheap, and it never invents an answer, which is a genuine advantage. Its limitation is that it can only handle paths somebody thought of in advance, so customers who ask in their own words hit a dead end."
  },
  {
    q: "Is ChatGPT an AI agent?",
    a: "ChatGPT on its own is a chat interface to a language model, so in its basic form it is a chatbot. It becomes agentic when it is given tools it can use, such as browsing the web or running code, because it can then act rather than only answer. The same distinction applies to a business bot: the model is not what makes something an agent, the connections to your systems are."
  },
  {
    q: "Is an AI agent like a bot?",
    a: "It is a bot with hands. The word bot covers anything automated that talks to customers. Agent is the narrower case where the software can also change something: place an order, book a time, update a record. If it can only tell you things, it is not an agent whatever it is being called."
  },
  {
    q: "What are the 7 types of AI agents?",
    a: "This comes from academic classification rather than anything you would buy. The standard textbook taxonomy in Russell and Norvig's Artificial Intelligence: A Modern Approach lists five: simple reflex, model-based reflex, goal-based, utility-based and learning agents. The lists that say seven usually add hierarchical and multi-agent systems. It is useful for a computer science exam and close to useless for deciding what your business should buy, which comes down to one question: does it need to act, or only answer?"
  },
  {
    q: "How much do AI agents cost in Pakistan?",
    a: "For a built and maintained business agent we charge Rs. 49,999 once and Rs. 9,999 a month, and an agent build sits at the upper end of that scope because each system it connects to is real integration work. A pure AI chatbot with no integrations is the cheaper end of the same range. On top of either, Meta charges its own per-message fees for WhatsApp, billed to you directly. Our full breakdown of chatbot pricing in Pakistan covers subscription tools and freelancers too."
  },
  {
    q: "Is an AI agent free?",
    a: "The tools to experiment with one are. Running one for a business is not, because every message costs something at the model provider, and on WhatsApp Meta bills its own per-message fee on top. Anyone quoting you a free or unlimited agent is absorbing those costs into a price somewhere else, or has not run one at volume yet."
  }
];

const related = [
  { to: "/services/ai-agent-development", t: "AI agent development: what we connect and what it costs" },
  { to: "/services/custom-chatbot-development", t: "Custom chatbot development: what we build and what it costs" },
  { to: "/blog/chatbot-price-pakistan", t: "What a chatbot actually costs in Pakistan, in rupees" },
  { to: "/services/whatsapp-chatbot-development", t: "WhatsApp chatbot development in Pakistan" },
  { to: "/blog/how-chatbots-work-small-businesses-pakistan", t: "How a custom chatbot works for a small business" },
  { to: "/blog/chatbot-automation-guide-pakistan", t: "Custom chatbot automation: a practical guide" },
  { to: "/success-stories", t: "Example builds: what a chatbot does all day" }
];

const AiAgentVsChatbot = () => {
  const seo = getPageSEO("/blog/ai-agent-vs-chatbot");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path="/blog/ai-agent-vs-chatbot"
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
            headline: "AI agent vs chatbot: which one does your business actually need?",
            description: seo.description,
            url: "https://thechatflow.com/blog/ai-agent-vs-chatbot",
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
              <span className="text-foreground">AI agent vs chatbot</span>
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
              AI agent vs chatbot: which one does your business actually need?
            </h1>

            <p className="font-body-lg text-muted-foreground mb-6">
              Almost every page explaining this difference is published by a company selling agents, and they all reach
              the same conclusion. We build both, and we turn down agent projects most months, so here is the version
              with the awkward parts left in.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>Published: 10 September 2026</span>
              <span>&bull;</span>
              <span>9 min read</span>
            </div>
          </div>
        </header>

        <article className="pb-8">
          <div className="container-width max-w-3xl">

            <Card className="p-6 border-2 border-whatsapp-green/30 bg-whatsapp-green/5 mb-12">
              <h2 className="font-h4 text-foreground mb-3">The short answer</h2>
              <p className="text-muted-foreground mb-3">
                A chatbot talks. An AI agent talks and then does something in your systems. One test separates them:
                <strong> can it change a record in your business, or can it only tell you about one?</strong> If it can
                only tell you, it is a chatbot, whatever the vendor calls it.
              </p>
              <p className="text-muted-foreground m-0">
                Most Pakistani businesses asking us for an agent need a well-built AI chatbot with two or three actions
                bolted on. That is a smaller, cheaper, faster build than a full agent, and it solves the problem they
                described. We scope that difference before quoting on any{" "}
                <Link to="/services/custom-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  custom chatbot development
                </Link>{" "}
                project, because getting it wrong in either direction is expensive.
              </p>
            </Card>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Three things get called the same word</h2>
              <p className="font-body-base text-muted-foreground mb-6">
                The confusion is not your fault. Rule-based bots, AI chatbots and AI agents are all sold as chatbots,
                and increasingly all three get sold as agents. They are genuinely different products with different
                build costs and different failure modes.
              </p>
              <div className="space-y-5">
                {tiers.map((t, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                      <h3 className="font-h4 text-foreground m-0">{t.name}</h3>
                      <span className="text-whatsapp-green font-semibold text-sm">{t.sub}</span>
                    </div>
                    <p className="text-muted-foreground mb-3"><strong className="text-foreground">What it does:</strong> {t.does}</p>
                    <p className="text-muted-foreground mb-3"><strong className="text-foreground">Where it stops:</strong> {t.fails}</p>
                    <p className="text-muted-foreground m-0"><strong className="text-foreground">Who it suits:</strong> {t.fit}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">The test that settles it in one question</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                Forget the model, the platform and the branding. Take the single task that costs your team the most time
                and ask what finishing it requires.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0 mt-1" />
                    <h3 className="font-h4 text-foreground m-0">Answering is the job</h3>
                  </div>
                  <p className="text-muted-foreground m-0">
                    What is your price. Do you deliver to Multan. Is this covered under warranty. What documents do I
                    need. The customer wants information you already have written down. You need a chatbot.
                  </p>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <ArrowRight className="h-5 w-5 text-whatsapp-green flex-shrink-0 mt-1" />
                    <h3 className="font-h4 text-foreground m-0">Answering is the start of the job</h3>
                  </div>
                  <p className="text-muted-foreground m-0">
                    Where is my order. Book me for Thursday. Confirm my COD parcel. Change my delivery address. The
                    reply is worthless unless something moves in a system afterwards. You need an agent.
                  </p>
                </Card>
              </div>
              <p className="font-body-base text-muted-foreground">
                Run this over your last fifty WhatsApp conversations and you will usually find the split is lopsided.
                For a solar company it is mostly the left column, because the work is qualifying and educating. For an
                online store it is mostly the right, because the work is order status and confirmation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Where an agent earns its cost</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                An agent pays for itself in exactly one situation: a person is currently reading a message and then
                retyping the same information into a second screen. That retyping is the cost you are removing.
              </p>
              <div className="grid gap-3">
                {agentWorthIt.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="h-4 w-4 text-whatsapp-green flex-shrink-0 mt-1.5" />
                    <span className="text-muted-foreground">{d}</span>
                  </div>
                ))}
              </div>
              <p className="font-body-base text-muted-foreground mt-6">
                Most of these are e-commerce and services patterns, which is why our{" "}
                <Link to="/services/whatsapp-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  WhatsApp chatbot builds
                </Link>{" "}
                for stores tend to include agent actions while the ones for consultancies often do not.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Where an agent is the wrong buy</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                We turn down more agent projects than we take. These are the five reasons, and any of them on its own is
                enough to make the cheaper build the better one.
              </p>
              <div className="space-y-3">
                {agentWrongBuy.map((r, i) => (
                  <Card key={i} className="p-5">
                    <div className="flex items-start gap-3">
                      <X className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{r}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">What each one costs to build</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                The price gap between a chatbot and an agent is not the AI. The same model can power both, and the model
                is a small line on the bill. The gap is integration work: every action an agent can take is a connection
                somebody builds against your live data, then secures, then tests against the ways your business is
                messy in practice.
              </p>
              <Card className="p-6 mb-5">
                <h3 className="font-h4 text-foreground mb-3">What that means for a quote</h3>
                <p className="text-muted-foreground mb-3">
                  Our build is Rs. 49,999 once and Rs. 9,999 a month for the platform. A chatbot build with no
                  integrations sits comfortably inside that. An agent build sits at the top of it, and a genuinely
                  complex one with a custom ERP behind it is scoped separately before you commit to anything.
                </p>
                <p className="text-muted-foreground m-0">
                  Two connections is the usual sweet spot. A store that can read live order status and confirm a COD
                  parcel has removed most of its repetitive work without paying for a system that can do everything.
                  Our{" "}
                  <Link to="/blog/chatbot-price-pakistan" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                    full breakdown of chatbot pricing in Pakistan
                  </Link>{" "}
                  compares this against subscription tools and freelance builds. If you have already worked out that
                  you need the agent, our{" "}
                  <Link to="/services/ai-agent-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                    AI agent development service
                  </Link>{" "}
                  sets out what we connect and what we refuse to connect.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">One date that affects both</h2>
              <Card className="p-6 border-2 border-amber-300 bg-amber-50">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-1" />
                  <p className="text-amber-900 m-0">
                    On <strong>1 July 2025</strong> Meta moved WhatsApp from charging per 24-hour conversation to
                    charging <strong>per message delivered</strong>. Advice written before that date, which is still
                    most of what ranks for Pakistani searches, produces budgets that are simply wrong.
                  </p>
                </div>
                <p className="text-amber-900 mb-3">
                  Today, a customer messaging you opens a <strong>24-hour customer service window</strong> in which
                  free-form replies cost nothing, and click-to-WhatsApp ads open a <strong>72-hour free window</strong>.
                  Meta has told its business solution providers that from <strong>1 October 2026</strong> free-form
                  replies inside that window, and utility templates sent inside it, start carrying a per-message fee at
                  country-specific rates.
                </p>
                <p className="text-amber-900 m-0">
                  This matters more for chatbots than for agents. A chatbot that answers questions generates a lot of
                  in-window messages, and those are the ones whose price is changing. An agent that resolves a request
                  in three messages instead of eleven gets relatively cheaper to run after that date. If you are
                  budgeting past this autumn, price both models on message counts rather than on the build alone.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">How we decide, in practice</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                Before quoting, we ask for the last two weeks of your WhatsApp conversations and sort them into the two
                columns above. The ratio decides the build. If eighty per cent of your messages end when the customer
                has an answer, an agent is a solution to a problem you do not have, and we will quote a chatbot instead
                and tell you why.
              </p>
              <p className="font-body-base text-muted-foreground">
                If the ratio flips the other way, the next question is whether the systems those actions need can
                actually be reached. Shopify and WooCommerce have proper connectors. A custom ERP written in 2014 by a
                developer who has left the country usually does not, and that discovery belongs before the quote rather
                than three weeks into a build.{" "}
                <Link to="/contact" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  Send us a fortnight of your chat history
                </Link>{" "}
                and we will tell you which of the three you need, including when the answer is the cheap one.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Questions people ask about AI agents and chatbots</h2>
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

          </div>
        </article>

        <BlogCTASection />
      </main>

      <Footer />
    </>
  );
};

export default AiAgentVsChatbot;
