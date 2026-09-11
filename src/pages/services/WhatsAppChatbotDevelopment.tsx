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
  Users, PackageSearch, Truck, CalendarCheck, ShoppingCart, Headphones,
  Mic, Check, CheckCircle, ArrowRight, Phone, Clock, AlertTriangle, Zap
} from "lucide-react";

const faqs = [
  { q: "Do I actually need the WhatsApp Business API?", a: "Only if one of three things is true: you get more enquiries than one person can answer, more than one person needs to reply on the same number, or you want the conversation connected to a system such as your store, CRM or booking calendar. If you just want a greeting and an away message, the free WhatsApp Business app already does that, and we will tell you so rather than sell you a build." },
  { q: "What does WhatsApp itself charge, on top of your fee?", a: "Since 1 July 2025 Meta bills per message delivered, not per 24-hour conversation as it used to. Marketing templates cost the most, utility and authentication templates cost less, and free-form service replies inside an open 24-hour customer service window are currently free. From 1 October 2026 that free treatment ends and service messages become chargeable. Meta bills this directly, not us, and rates vary by the recipient country." },
  { q: "What is the 24-hour window everyone talks about?", a: "When a customer messages you first, it opens a 24-hour customer service window. Inside it you can reply freely in normal language. Once it closes you can only reopen the conversation with a template Meta has pre-approved. This is the single rule that decides how a WhatsApp bot has to be designed, and getting it wrong is why many builds quietly stop working after the first day." },
  { q: "Is there a way to message customers without paying per message?", a: "Click-to-WhatsApp ads and a WhatsApp button on your Facebook page open a 72-hour free window, during which messages are not charged. If you already run Meta ads, routing them into WhatsApp instead of a landing page is usually the cheapest acquisition path available to a Pakistani business, and we build the flow that receives them." },
  { q: "How long does a WhatsApp build take?", a: "A standard single-channel build goes live in 24 to 48 hours once we have your content and access. The variable is outside our control: Meta has to verify your business and approve your message templates. We prepare and submit those with you, and we tell you at the scoping stage what is likely to slow it down." },
  { q: "Will I lose my existing WhatsApp number?", a: "A number can be migrated to the API, but once it is on the API it can no longer be used in the normal WhatsApp or WhatsApp Business app on a phone. Your team works from a shared web inbox instead. If that is a problem, many businesses keep the existing number for personal use and put the bot on a second number. We work through this with you before anything is migrated." },
  { q: "Can it reply in Urdu and understand voice notes?", a: "Yes. It replies in whichever language the customer writes in, and it transcribes voice notes, works out what was asked, and can reply in voice as well as text. In Pakistan that matters more than most businesses expect, because a large share of customers send voice rather than type, and a bot that ignores voice notes looks broken to them." },
  { q: "What happens when the bot cannot answer?", a: "It hands over to a person. The handover rules are agreed with you during flow design: particular topics, particular keywords, an unhappy customer, or simply the agent being unsure. The conversation moves into the shared team inbox with the full history visible, so nobody has to ask the customer to repeat themselves." }
];

const flows = [
  { icon: Users, t: "Qualify the enquiry", d: "Asks the questions your sales team would ask — budget, city, requirement, timeline — saves every answer against the contact, and only then involves a person." },
  { icon: PackageSearch, t: "Answer product questions", d: "Pulls price, stock and specification from your own catalogue or store, so answers are current rather than whatever was true when the bot was written." },
  { icon: Truck, t: "Order status on demand", d: "Takes an order number, looks it up live in Shopify, WooCommerce or your own API, and explains exactly where the delivery is." },
  { icon: ShoppingCart, t: "Confirm COD before dispatch", d: "Confirms cash-on-delivery orders in chat before they ship, so fewer parcels come back refused — the single most expensive problem in Pakistani e-commerce." },
  { icon: CalendarCheck, t: "Take the booking", d: "Captures service, date and time, checks real availability against your calendar, confirms it, and sends the reminder." },
  { icon: Headphones, t: "Handle support, then hand over", d: "Answers from your own documents and policies, runs the standard troubleshooting, and escalates the cases that need a human with full context attached." }
];

const steps = [
  { n: "01", t: "Scoping call", d: "We go through the messages your team actually answers on WhatsApp and separate what a bot should handle from what it should never touch. Free, and you get an honest recommendation either way." },
  { n: "02", t: "Number, Business Manager and verification", d: "We work out whether to migrate your existing number or start a new one, get your business verified with Meta, and set up the WhatsApp Business Account properly rather than in a way you have to unpick later." },
  { n: "03", t: "Templates and flow design", d: "We write and submit the templates Meta has to approve before you can message outside the 24-hour window, and design the conversation — what it asks, what it does with the answers, where it hands over. You approve the design before anything is built." },
  { n: "04", t: "Build, train and launch", d: "Flows built, your systems connected, agents trained on your product data and policies. We watch the first real conversations closely and correct anything the bot gets wrong. Your team is trained on the shared inbox before launch." },
  { n: "05", t: "Maintain", d: "Prices change, stock changes, and Meta changes its rules — as it does again on 1 October 2026. We keep the templates compliant and the agents current so the bot does not slowly start giving wrong answers." }
];

const related = [
  { to: "/services/custom-chatbot-development", t: "Custom chatbot development — the full service, every channel" },
  { to: "/services/ecommerce-chatbot-development", t: "Chatbots for Pakistani online stores" },
  { to: "/services/instagram-messenger-automation", t: "Instagram and Messenger automation" },
  { to: "/blog/whatsapp-business-api-pakistan-guide-2025", t: "WhatsApp Business API in Pakistan: When You Actually Need It" },
  { to: "/blog/whatsapp-api-vs-regular-whatsapp-business", t: "WhatsApp Business App vs API: Which Does Your Business Need?" },
  { to: "/blog/solar-companies-whatsapp-automation-pakistan", t: "Custom Chatbots for Solar Companies in Pakistan" },
  { to: "/blog/visa-consultancy-whatsapp-automation-urdu", t: "Custom Chatbots for Visa Consultancies in Pakistan" },
  { to: "/success-stories", t: "Example builds: what a chatbot does all day" }
];

const WhatsAppChatbotDevelopment = () => {
  const seo = getPageSEO("/services/whatsapp-chatbot-development");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path="/services/whatsapp-chatbot-development"
        keywords={seo.keywords}
        type="website"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "WhatsApp Chatbot Development",
            serviceType: "WhatsApp Business API chatbot design, build and maintenance",
            provider: { "@type": "Organization", name: "TheChatFlow", url: "https://thechatflow.com" },
            areaServed: { "@type": "Country", name: "Pakistan" },
            description:
              "WhatsApp chatbot development for Pakistani businesses on the WhatsApp Business API - lead qualification, order status, COD confirmation, bookings and support, with human handover.",
            offers: {
              "@type": "Offer",
              priceCurrency: "PKR",
              price: "49999",
              description: "One-time build. Platform subscription Rs. 9,999 per month. Meta message fees billed separately by Meta."
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
              <span className="text-foreground">WhatsApp chatbot development</span>
            </div>
          </div>
        </nav>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-4 py-2 rounded-full font-medium text-sm mb-6">
                <Zap className="h-4 w-4 text-whatsapp-green" />
                WhatsApp Business API, built for you
              </div>

              <h1 className="font-h1 text-foreground mb-6">
                WhatsApp chatbot development
                <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                  in Pakistan
                </span>
              </h1>

              <p className="font-body-lg text-muted-foreground mb-8">
                We design, build and maintain the bot that runs on your WhatsApp number &mdash; qualifying enquiries,
                confirming COD orders, answering &ldquo;where is my order&rdquo;, taking bookings, and handing over to a
                person the moment it should. You are not buying API access. You are buying the thing that runs on it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a free scoping call
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services/custom-chatbot-development">
                    All channels, not just WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-whatsapp-green" />Live in 24&ndash;48 hours</span>
                <span className="flex items-center gap-2"><Mic className="h-4 w-4 text-whatsapp-green" />Urdu, English and voice notes</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-whatsapp-green" />Rs. 49,999 fixed build price</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl mb-10">
              <h2 className="font-h2 text-foreground mb-4">First: do you actually need this?</h2>
              <p className="font-body-base text-muted-foreground">
                Most businesses that ask us for &ldquo;the WhatsApp API&rdquo; do not need it yet. It is worth two minutes
                to work out which side of the line you are on, because the free app is genuinely enough for a lot of
                Pakistani businesses and we would rather tell you that now than take your money.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-7 border-2 border-muted">
                <h3 className="font-h4 text-foreground mb-4">The free WhatsApp Business app is enough if&hellip;</h3>
                <div className="grid gap-3">
                  {[
                    "One person answers all your messages",
                    "You want a greeting message and an away message",
                    "You are happy replying manually during working hours",
                    "Nothing needs to connect to your store, CRM or calendar",
                    "Your volume is tens of messages a day, not hundreds"
                  ].map((x, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{x}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-5 mb-0">
                  If this is you, download the app and keep your money. We have written the full comparison in{" "}
                  <Link to="/blog/whatsapp-api-vs-regular-whatsapp-business" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                    WhatsApp Business app vs API
                  </Link>.
                </p>
              </Card>

              <Card className="p-7 border-2 border-whatsapp-green/40 bg-whatsapp-green/5">
                <h3 className="font-h4 text-foreground mb-4">You need a build if&hellip;</h3>
                <div className="grid gap-3">
                  {[
                    "More enquiries arrive than one person can answer",
                    "Two or more people need to reply on the same number",
                    "You want live order, stock or booking data inside the chat",
                    "Enquiries arrive at night and go cold by morning",
                    "You run click-to-WhatsApp ads and leads are being wasted"
                  ].map((x, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-whatsapp-green flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{x}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/contact">That is us &mdash; book a scoping call</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-2xl mb-12">
              <h2 className="font-h2 text-foreground mb-4">What we build on WhatsApp</h2>
              <p className="font-body-base text-muted-foreground">
                Specialist agents, each with its own instructions and knowledge, routed automatically and sharing what
                the customer has already said. Not one bot trying to answer everything.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flows.map((f, i) => (
                <Card key={i} className="p-6 h-full hover-lift">
                  <div className="w-12 h-12 bg-whatsapp-green/10 rounded-2xl flex items-center justify-center mb-4">
                    <f.icon className="h-6 w-6 text-whatsapp-green" />
                  </div>
                  <h3 className="font-h4 text-foreground mb-2">{f.t}</h3>
                  <p className="text-muted-foreground m-0">{f.d}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container-width">
            <div className="gradient-cta rounded-3xl p-8 md:p-10 text-center text-white">
              <h2 className="font-h3 text-white mb-3">Which of these would move the needle for you?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Tell us the messages your team answers over and over on WhatsApp. We will tell you which parts a bot
                should take, which parts it should not, and what it would cost.
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
            <div className="max-w-3xl mb-10">
              <h2 className="font-h2 text-foreground mb-4">What it costs, including the part nobody explains</h2>
              <p className="font-body-base text-muted-foreground">
                There are two separate bills. Ours, which is fixed and published below. And Meta&rsquo;s, which most
                agencies leave out of the conversation entirely until the first invoice arrives.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              <Card className="p-8 border-2 border-whatsapp-green/30 relative">
                <Badge className="gradient-cta text-white absolute -top-3 left-8 px-4 py-1">Our fee</Badge>
                <div className="pt-3">
                  <p className="text-muted-foreground mb-2">One-time build</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">Rs. 49,999</span>
                  </div>
                  <div className="grid gap-3">
                    {[
                      "Business verification and WhatsApp account setup",
                      "Message templates written and submitted to Meta",
                      "Conversation flows designed and approved by you",
                      "Agents trained on your products, prices and policies",
                      "Team training on the shared inbox",
                      "30 days of support after launch"
                    ].map((f, i) => (
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
                  {[
                    "Unlimited contacts and chats",
                    "AI models included",
                    "Multi-agent shared inbox",
                    "Visual flow builder",
                    "Analytics, API and webhooks",
                    "Instagram, Messenger, Telegram and web chat included",
                    "Cancel any time, no contract"
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-7 border-2 border-amber-300 bg-amber-50">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-h4 text-amber-900 mb-3">Meta&rsquo;s message fees, billed separately by Meta</h3>
                  <p className="text-amber-900 mb-4">
                    On <strong>1 July 2025</strong> Meta stopped charging per 24-hour conversation and moved to charging
                    <strong> per message delivered</strong>. A lot of published advice in Pakistan still describes the old
                    model. Here is how it actually works now:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {[
                      ["Marketing templates", "Promotions and re-engagement. The most expensive category."],
                      ["Utility templates", "Order confirmations, delivery updates, reminders. Cheaper."],
                      ["Authentication templates", "One-time passcodes and login codes."],
                      ["Service messages", "Your free-form replies inside an open 24-hour window."]
                    ].map(([t, d], i) => (
                      <div key={i} className="bg-white/70 rounded-xl p-4">
                        <p className="font-semibold text-amber-900 m-0 mb-1">{t}</p>
                        <p className="text-sm text-amber-900/80 m-0">{d}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-amber-900 mb-3">
                    <strong>The 24-hour window is the rule that shapes everything.</strong> When a customer messages you
                    first, it opens a 24-hour window in which you can reply in normal language. Once it closes, you can
                    only reopen the conversation with a pre-approved template. Designing around that window is most of
                    the skill in a WhatsApp build.
                  </p>
                  <p className="text-amber-900 mb-3">
                    <strong>There is a free entry point.</strong> Click-to-WhatsApp ads and a WhatsApp button on your
                    Facebook page open a <strong>72-hour free window</strong> where messages are not charged. If you
                    already run Meta ads, pointing them at WhatsApp instead of a landing page is usually the cheapest
                    acquisition route available to a Pakistani business.
                  </p>
                  <p className="text-amber-900 m-0">
                    <strong>One change to plan for:</strong> from <strong>1 October 2026</strong>, service messages stop
                    being free. If your model depends on high volumes of free in-window replies, the economics shift, and
                    we will factor that into what we recommend.
                  </p>
                </div>
              </div>
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
            <div className="max-w-2xl mb-12">
              <h2 className="font-h2 text-foreground mb-4">How a WhatsApp build actually works</h2>
              <p className="font-body-base text-muted-foreground">
                Five stages. Two of them depend on Meta rather than on us, and we tell you that up front instead of
                letting a verification delay look like a missed deadline.
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
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-7 bg-whatsapp-green/5 border-whatsapp-green/20">
                <div className="flex items-center gap-3 mb-3">
                  <Mic className="h-5 w-5 text-whatsapp-green" />
                  <h3 className="font-h4 text-foreground m-0">It handles voice notes</h3>
                </div>
                <p className="text-muted-foreground m-0">
                  A large share of Pakistani customers send a voice note rather than typing. The bot transcribes it,
                  works out what was asked, and replies in text or in voice. A WhatsApp bot that ignores voice notes
                  looks broken to a big part of your audience.
                </p>
              </Card>
              <Card className="p-7 bg-whatsapp-green/5 border-whatsapp-green/20">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-whatsapp-green" />
                  <h3 className="font-h4 text-foreground m-0">It answers in the customer&rsquo;s language</h3>
                </div>
                <p className="text-muted-foreground m-0">
                  Urdu, English, or the Roman-Urdu mix people actually type. Your team can translate any message inside
                  the shared inbox, so an agent who does not read Urdu can still take over a conversation.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-background">
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
                Tell us what you want WhatsApp to handle
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                A free scoping call, an honest answer about whether you need the API at all, and a fixed price before
                you commit to anything.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button size="lg" className="bg-white text-whatsapp-green hover:bg-white/90 font-bold px-10 py-4" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a free scoping call
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-whatsapp-green font-bold px-10 py-4" asChild>
                  <Link to="/services/custom-chatbot-development">
                    See the full service
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

export default WhatsAppChatbotDevelopment;
