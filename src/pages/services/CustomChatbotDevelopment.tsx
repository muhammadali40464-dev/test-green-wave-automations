import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { Link } from "react-router-dom";
import {
  MessageSquare, Users, ShoppingCart, Headphones, CalendarCheck, UserCheck,
  Mic, Database, Zap, Check, CheckCircle, ArrowRight, Phone, Clock, Globe, Code2, Sparkles
} from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a chatbot?",
    a: "A standard single-channel build goes live in 24 to 48 hours once we have your content and access. Builds with custom integrations, several agents or more than one language take longer, and we tell you the timeline at the scoping stage rather than after you have paid."
  },
  {
    q: "Do I need the WhatsApp Business API?",
    a: "Only if you have more enquiry volume than one person can answer, more than one agent replying on the same number, or a system you want the conversation connected to. If you just want automatic replies, the free WhatsApp Business app already does that. We will tell you honestly which side of that line you are on."
  },
  {
    q: "Can the chatbot reply in Urdu?",
    a: "Yes. It replies in the language the customer writes in, and it understands voice notes: it transcribes them, works out what was asked, and can reply in voice as well as text. In Pakistan that matters more than most people expect, because a large share of customers send voice rather than type."
  },
  {
    q: "What can the chatbot connect to?",
    a: "Shopify, WooCommerce and Salla for products and live orders; Google Sheets and Google Calendar; CRMs including HubSpot and ActiveCampaign; email and SMS providers; Zapier and n8n; and any external system that exposes an HTTP API. If your system is unusual, our engineers build the connection."
  },
  {
    q: "What happens when the chatbot cannot answer something?",
    a: "It hands over. We define the handover rules with you during flow design: certain topics, certain keywords, an angry customer, or simply the bot being unsure. The conversation moves to the shared inbox and the right person picks it up with the full history visible."
  },
  {
    q: "How is this different from a chatbot builder I could use myself?",
    a: "A builder gives you an empty canvas and leaves the hard part to you: working out what should be automated, what should not, what the bot says when a customer goes off-script, and how it talks to your store or CRM. We do that work, and we maintain it as your business changes."
  },
  {
    q: "What does it cost to run after it is built?",
    a: "Rs. 9,999 per month covers the platform, all channels, unlimited contacts and chats, the AI models, the shared inbox and support. WhatsApp itself is billed separately by Meta. Since 1 July 2025 Meta charges per message delivered rather than per 24-hour conversation, at different rates for marketing, utility and authentication templates. We explain how that works on the WhatsApp chatbot development page."
  },
  {
    q: "Do you build for Instagram and Facebook too?",
    a: "Yes. The same set of agents runs across WhatsApp, Instagram, Facebook Messenger, Telegram and a website chat widget, sharing one contact record and one team inbox. Instagram and Facebook also support comment-to-DM, so a public comment can start a private conversation automatically."
  }
];

const agents = [
  { icon: ShoppingCart, title: "Sales agent", body: "Answers product questions, recommends from your catalogue and flags buying intent so a person can step in at the right moment." },
  { icon: Users, title: "Lead qualification", body: "Asks the questions your sales team would ask, saves every answer against the contact, and starts the follow-up sequence." },
  { icon: MessageSquare, title: "Order status", body: "Takes an order number, looks it up live in your store or API, and explains exactly where the delivery is." },
  { icon: Headphones, title: "Support agent", body: "Answers from your own documents and policies, walks customers through troubleshooting, and escalates the complex cases." },
  { icon: CalendarCheck, title: "Appointments", body: "Captures the service, date and time, checks real availability, confirms the booking and sends the reminder." },
  { icon: UserCheck, title: "Human handover", body: "Recognises when a person is needed and assigns the conversation to the right team member with full history." }
];

const steps = [
  { n: "01", t: "Scoping call", d: "We go through the messages your team actually answers and separate what a bot should handle from what it should never touch. Free, and you get the recommendation whether or not you go ahead." },
  { n: "02", t: "Flow design", d: "We design the conversation: what it asks, in what order, what it does with the answers, and exactly where it hands over to a person. You approve this before anything is built." },
  { n: "03", t: "Build and train", d: "We build the flows, connect your systems, and train each agent on your own material: product data, price lists, policy documents, past answers." },
  { n: "04", t: "Launch", d: "We go live, watch the first real conversations closely, and correct anything the bot gets wrong. Your team is trained on the shared inbox before launch, not after." },
  { n: "05", t: "Maintain", d: "Products change, prices change, policies change. We keep the agents current so the bot does not slowly start giving wrong answers." }
];

const related = [
  { to: "/blog/chatbot-price-pakistan", t: "How much does a chatbot cost in Pakistan in 2026?" },
  { to: "/services/whatsapp-chatbot-development", t: "WhatsApp chatbot development — the WhatsApp-specific build" },
  { to: "/blog/whatsapp-business-api-pakistan-guide-2025", t: "WhatsApp Business API in Pakistan: When You Actually Need It" },
  { to: "/blog/whatsapp-api-vs-regular-whatsapp-business", t: "WhatsApp Business App vs API: Which Does Your Business Need?" },
  { to: "/blog/chatbot-automation-guide-pakistan", t: "Custom Chatbot Automation for Pakistani Businesses" },
  { to: "/blog/how-chatbots-work-small-businesses-pakistan", t: "How a Custom Chatbot Works for a Small Business" },
  { to: "/blog/solar-companies-whatsapp-automation-pakistan", t: "Custom Chatbots for Solar Companies in Pakistan" },
  { to: "/blog/visa-consultancy-whatsapp-automation-urdu", t: "Custom Chatbots for Visa Consultancies in Pakistan" }
];

const CustomChatbotDevelopment = () => {
  const seo = getPageSEO("/services/custom-chatbot-development");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path="/services/custom-chatbot-development"
        keywords={seo.keywords}
        type="website"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Custom Chatbot Development",
            serviceType: "Custom AI chatbot and automation development",
            provider: { "@type": "Organization", name: "TheChatFlow", url: "https://thechatflow.com" },
            areaServed: { "@type": "Country", name: "Pakistan" },
            description: "Custom AI chatbot development for Pakistani businesses across WhatsApp, Instagram, Facebook Messenger, Telegram and website chat.",
            offers: {
              "@type": "Offer",
              priceCurrency: "PKR",
              price: "49999",
              description: "One-time build. Platform subscription Rs. 9,999 per month."
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
              <span className="text-foreground">Custom chatbot development</span>
            </div>
          </div>
        </nav>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-4 py-2 rounded-full font-medium text-sm mb-6">
                <Sparkles className="h-4 w-4 text-whatsapp-green" />
                Chatbot development services in Pakistan
              </div>

              <h1 className="font-h1 text-foreground mb-6">
                Custom AI chatbot development
                <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                  for Pakistani businesses
                </span>
              </h1>

              <p className="font-body-lg text-muted-foreground mb-8">
                We design, build and maintain AI chatbots that do one specific job well &mdash; qualify a lead, take an
                order, book an appointment, answer a support question &mdash; across WhatsApp, Instagram, Messenger,
                Telegram and your website. Not a template you configure yourself. A build, scoped around how your
                business already works.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a free scoping call
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/success-stories">
                    See example builds
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-whatsapp-green" />Live in 24&ndash;48 hours</span>
                <span className="flex items-center gap-2"><Globe className="h-4 w-4 text-whatsapp-green" />Urdu and English</span>
                <span className="flex items-center gap-2"><Code2 className="h-4 w-4 text-whatsapp-green" />Engineering team in Pakistan</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-whatsapp-green" />30 days support included</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-2xl mb-12">
              <h2 className="font-h2 text-foreground mb-4">You do not need a chatbot. You need a specific problem to stop happening.</h2>
              <p className="font-body-base text-muted-foreground">
                Every business we build for arrives with one of these three. If none of them sounds like you, we will
                say so on the call rather than sell you something you do not need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "The same twenty questions, all day", d: "Price, availability, location, timings, documents. Your team retypes the same answers instead of doing the work only they can do." },
                { t: "Enquiries arrive when nobody is there", d: "Messages land at 11pm and get answered at 10am. By then the customer has messaged three competitors and bought from whoever replied first." },
                { t: "Salespeople qualifying instead of selling", d: "Half the enquiries were never going to buy, but somebody still has to work that out one message at a time." }
              ].map((item, i) => (
                <Card key={i} className="p-6 h-full">
                  <h3 className="font-h4 text-foreground mb-3">{item.t}</h3>
                  <p className="text-muted-foreground m-0">{item.d}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-2xl mb-12">
              <h2 className="font-h2 text-foreground mb-4">Six agents that do actual work</h2>
              <p className="font-body-base text-muted-foreground">
                Not one chatbot trying to answer everything. Specialist agents, each with its own instructions and its
                own knowledge, routed automatically and sharing what the customer has already told them. Some of these
                only answer and some can act inside your systems, which is{" "}
                <Link to="/blog/ai-agent-vs-chatbot" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  the real difference between an AI agent and a chatbot
                </Link>{" "}
                and the thing that decides what your build costs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((a, i) => (
                <Card key={i} className="p-6 h-full hover-lift">
                  <div className="w-12 h-12 bg-whatsapp-green/10 rounded-2xl flex items-center justify-center mb-4">
                    <a.icon className="h-6 w-6 text-whatsapp-green" />
                  </div>
                  <h3 className="font-h4 text-foreground mb-2">{a.title}</h3>
                  <p className="text-muted-foreground m-0">{a.body}</p>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="p-6 bg-whatsapp-green/5 border-whatsapp-green/20">
                <div className="flex items-center gap-3 mb-3">
                  <Mic className="h-5 w-5 text-whatsapp-green" />
                  <h3 className="font-h4 text-foreground m-0">It listens to voice notes</h3>
                </div>
                <p className="text-muted-foreground m-0">
                  A large share of Pakistani customers send voice rather than type. The bot transcribes the note,
                  understands what was asked, and replies &mdash; in text or in voice.
                </p>
              </Card>
              <Card className="p-6 bg-whatsapp-green/5 border-whatsapp-green/20">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-whatsapp-green" />
                  <h3 className="font-h4 text-foreground m-0">It knows your business</h3>
                </div>
                <p className="text-muted-foreground m-0">
                  Each agent is trained on your own sources &mdash; written content, web pages, PDFs, spreadsheets,
                  product images, live APIs &mdash; so answers come from your material, not guesswork.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container-width">
            <div className="gradient-cta rounded-3xl p-8 md:p-10 text-center text-white">
              <h2 className="font-h3 text-white mb-3">Not sure which of these you need?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Tell us the messages your team answers over and over. We will tell you which parts a chatbot should
                take, which parts it should not, and what building it would involve.
              </p>
              <Button size="lg" className="bg-white text-whatsapp-green hover:bg-white/90 font-bold px-10" asChild>
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Book a free scoping call
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-2xl mb-10">
              <h2 className="font-h2 text-foreground mb-4">One system, every channel, connected to what you already run</h2>
              <p className="font-body-base text-muted-foreground">
                Most of our work starts on WhatsApp — if that is the only channel you need, see <Link to="/services/whatsapp-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">WhatsApp chatbot development</Link>. Every channel feeds the same contact record and the same shared inbox, so a customer who asks on
                Instagram and follows up on WhatsApp is one conversation, not two.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-7">
                <h3 className="font-h4 text-foreground mb-4">Channels</h3>
                <div className="grid gap-3">
                  {["WhatsApp Business API", "Instagram direct messages and comments", "Facebook Messenger and comments", "Telegram", "Website chat widget"].map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                      <span className="text-muted-foreground">{c}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-7">
                <h3 className="font-h4 text-foreground mb-4">Connects to</h3>
                <div className="grid gap-3">
                  {["Shopify, WooCommerce and Salla", "Google Sheets and Google Calendar", "HubSpot, ActiveCampaign and other CRMs", "Email and SMS providers", "Zapier, n8n, or any HTTP API"].map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                      <span className="text-muted-foreground">{c}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-2xl mb-12">
              <h2 className="font-h2 text-foreground mb-4">How a build actually works</h2>
              <p className="font-body-base text-muted-foreground">
                Five stages. You approve the design before anything gets built, and you know the timeline before you pay.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <Card key={i} className="p-6 md:p-7">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-7">
                    <div className="text-2xl font-bold text-whatsapp-green flex-shrink-0 md:w-16">{s.n}</div>
                    <div>
                      <h3 className="font-h4 text-foreground mb-2">{s.t}</h3>
                      <p className="text-muted-foreground m-0">{s.d}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-2xl mb-12">
              <h2 className="font-h2 text-foreground mb-4">What it costs</h2>
              <p className="font-body-base text-muted-foreground">
                Two numbers, published, so you can decide before you talk to anyone. Most agencies make you book a call
                just to find out whether you can afford them.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <Card className="p-8 border-2 border-whatsapp-green/30 relative">
                <Badge className="gradient-cta text-white absolute -top-3 left-8 px-4 py-1">The build</Badge>
                <div className="pt-3">
                  <p className="text-muted-foreground mb-2">One-time development cost</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">Rs. 49,999</span>
                  </div>
                  <div className="grid gap-3">
                    {["Complete bot configuration", "Custom conversation flow design", "Agents trained on your material", "Team training on the shared inbox", "Go-live in 24 to 48 hours", "30 days of support after launch"].map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <p className="text-muted-foreground mb-2">Platform, billed monthly</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">Rs. 9,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="grid gap-3">
                  {["All channels included", "Unlimited contacts and chats", "AI models included", "Visual flow builder", "Multi-agent shared inbox", "Analytics, API and webhooks", "Cancel any time, no contract"].map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-muted/40">
              <h3 className="font-h4 text-foreground mb-3">What moves the build cost</h3>
              <p className="text-muted-foreground mb-4">
                Rs. 49,999 covers a standard build, and we have written up <Link to="/blog/chatbot-price-pakistan" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">how our pricing compares to the alternatives in Pakistan</Link>. The number goes up when the work genuinely is bigger, and we tell
                you which of these applies before you commit:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {["More than one channel at launch", "Custom integrations with systems that have no ready connector", "More than two languages", "Several specialist agents with separate knowledge bases", "Migration of existing contacts and conversation history", "Ongoing changes beyond the 30-day support window"].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="h-4 w-4 text-whatsapp-green flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-5 mb-0">
                One cost that is not ours: WhatsApp charges Meta&rsquo;s own per-message fee, billed by Meta
                directly. We explain how that works in the{" "}
                <Link to="/blog/whatsapp-business-api-pakistan-guide-2025" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  WhatsApp Business API guide
                </Link>.
              </p>
            </Card>

            <div className="text-center mt-10">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Get a quote for your build
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-h2 text-foreground mb-4">Engineers behind the platform</h2>
                <p className="font-body-base text-muted-foreground mb-4">
                  Most chatbot vendors sell you a tool and leave the hard part with you. Where the product stops, we
                  build: our software engineers, developers and automation engineers deliver websites, web applications
                  and custom automation designed around what a business actually needs.
                </p>
                <p className="font-body-base text-muted-foreground">
                  That is the practical difference. If your chatbot needs to talk to a system nobody has a connector
                  for, that is a normal week for us rather than a reason to say no.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { t: "Web and app development", d: "Websites, portals and custom web applications, from design to deployment." },
                  { t: "Automation engineering", d: "Connecting the systems you already run so data moves between them." },
                  { t: "Custom business automation", d: "Workflows built around your operation rather than fitted to a template." },
                  { t: "GoHighLevel specialists", d: "Funnels, pipelines, campaigns and sub-account builds." }
                ].map((x, i) => (
                  <Card key={i} className="p-5">
                    <h3 className="font-h4 text-foreground mb-1">{x.t}</h3>
                    <p className="text-muted-foreground m-0">{x.d}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl">
              <h2 className="font-h2 text-foreground mb-10">Questions we get asked</h2>
              <div className="space-y-5">
                {faqs.map((f, i) => (
                  <Card key={i} className="p-6">
                    <h3 className="font-h4 text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground m-0">{f.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl mb-10">
              <h2 className="font-h2 text-foreground mb-4">Which build is yours?</h2>
              <p className="font-body-base text-muted-foreground">
                Same platform, same price, same people. What changes is where the bot lives and what it has to reach
                into, and that is what these four pages are for. Still comparing suppliers? Run{" "}
                <Link to="/blog/choose-chatbot-development-company-pakistan" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  these nine questions
                </Link>{" "}
                on us and on everyone else.
              </p>
            </div>

            <div className="max-w-3xl divide-y border-y">
              <div className="py-5">
                <h3 className="font-h4 text-foreground mb-1">
                  <Link to="/services/whatsapp-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark">
                    WhatsApp chatbot development
                  </Link>
                </h3>
                <p className="text-muted-foreground m-0">
                  The channel most Pakistani customers already message on. Covers Meta verification, the template
                  categories and the per-message fees in full.
                </p>
              </div>

              <div className="py-5">
                <h3 className="font-h4 text-foreground mb-1">
                  <Link to="/services/ai-agent-development" className="text-whatsapp-green hover:text-whatsapp-dark">
                    AI agent development
                  </Link>
                </h3>
                <p className="text-muted-foreground m-0">
                  For when answering is only the start of the job and something has to change in your systems
                  afterwards: stock checked, slot booked, record written back.
                </p>
              </div>

              <div className="py-5">
                <h3 className="font-h4 text-foreground mb-1">
                  <Link to="/services/ecommerce-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark">
                    E-commerce chatbot development
                  </Link>
                </h3>
                <p className="text-muted-foreground m-0">
                  Built around the three questions that fill a Pakistani store&rsquo;s inbox, including the COD
                  confirmation that decides whether a parcel comes back.
                </p>
              </div>

              <div className="py-5">
                <h3 className="font-h4 text-foreground mb-1">
                  <Link to="/services/instagram-messenger-automation" className="text-whatsapp-green hover:text-whatsapp-dark">
                    Instagram and Messenger automation
                  </Link>
                </h3>
                <p className="text-muted-foreground m-0">
                  Comment-to-DM and the part after it, with the 7-day and 24-hour windows Meta enforces designed in
                  rather than discovered later.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <h2 className="font-h3 text-foreground mb-6">Read next</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <div className="text-center max-w-3xl mx-auto space-y-7">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Tell us what you want automated
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                A free scoping call, an honest answer about whether a chatbot is the right tool, and a fixed price
                before you commit to anything.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button size="lg" className="bg-white text-whatsapp-green hover:bg-white/90 font-bold px-10 py-4" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a free scoping call
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-whatsapp-green font-bold px-10 py-4" asChild>
                  <Link to="/success-stories">
                    See example builds
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85 pt-2">
                <span className="flex items-center gap-2"><Check className="h-4 w-4" />Free scoping call</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4" />Fixed price before you commit</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4" />Live in 24&ndash;48 hours</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CustomChatbotDevelopment;
