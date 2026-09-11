import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import BlogCTASection from "@/components/BlogCTASection";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertTriangle, Calendar } from "lucide-react";

const rates = [
  { cat: "Marketing", rate: "$0.0473", use: "Promotions, offers, re-engagement, abandoned-cart nudges." },
  { cat: "Utility", rate: "$0.0100", use: "Order confirmations, delivery updates, appointment reminders." },
  { cat: "Authentication", rate: "$0.0100", use: "One-time passcodes and login codes." },
  { cat: "Authentication-international", rate: "$0.0750", use: "OTPs sent to a Pakistani number from a business billed elsewhere." },
  { cat: "Service", rate: "Free until 30 September 2026", use: "Free-form replies inside an open 24-hour window." }
];

const tiers = [
  { from: "0", to: "150,000", rate: "$0.0100", off: "list rate" },
  { from: "150,001", to: "1,000,000", rate: "$0.0095", off: "5% below" },
  { from: "1,000,001", to: "4,000,000", rate: "$0.0090", off: "10% below" },
  { from: "4,000,001", to: "25,000,000", rate: "$0.0085", off: "15% below" },
  { from: "25,000,001", to: "50,000,000", rate: "$0.0080", off: "20% below" },
  { from: "50,000,001", to: "and above", rate: "$0.0075", off: "25% below" }
];

const changes = [
  {
    t: "Service messages start costing money",
    d: "Every free-form reply your team or your bot sends inside the 24-hour window becomes billable, at the same rate as a utility or authentication message in that market. In Pakistan that is $0.0100 today."
  },
  {
    t: "The first 1,000 service messages each month stay free",
    d: "Meta is adding a free monthly tier of 1,000 service messages per business phone number. A small clinic or a single-branch shop may never pass it. A store answering a few hundred WhatsApp enquiries a week will pass it in the first ten days."
  },
  {
    t: "Utility replies inside the window stop being free",
    d: "Utility templates sent in response to a customer have not been charged since 1 July 2025. From 1 October they are charged again."
  },
  {
    t: "Pakistan's utility and authentication rates go up",
    d: "Meta lists Pakistan by name among the markets with utility and authentication increases on 1 October, alongside Kazakhstan, Kuwait, Morocco, Oman, Peru, South Africa and Ukraine. The new figures are in Meta's October rate card."
  }
];

const actions = [
  "Count your service messages per phone number, not per business. The 1,000 free are per number. If you run three numbers through one inbox, you have 3,000 free, and if you have consolidated onto one number to tidy things up you have just given up 2,000.",
  "Count messages, not conversations. Meta charges per delivered message. A bot that answers in five short bubbles costs five times a bot that answers in one paragraph, for the same conversation.",
  "Check what your bot sends when nobody replies. Follow-up nudges, typing-indicator filler and “Are you still there?” messages were free to send and are about to stop being free.",
  "Re-read your template categories. A message Meta reads as marketing costs about four and a half times a utility message in Pakistan. Categorisation disputes are worth having before the bill, not after.",
  "Push more first contact through click-to-WhatsApp ads. The 72-hour free entry point window is not changing, and everything sent inside it stays free across all categories."
];

const faqs = [
  {
    q: "How much does the WhatsApp API cost per message in Pakistan?",
    a: "On Meta's rate card effective 1 July 2026, a marketing message to a Pakistani number costs $0.0473, a utility message $0.0100 and an authentication message $0.0100. Service messages are free until 30 September 2026. You are charged when the message is delivered, not when it is sent, and these Meta fees are separate from whatever your provider charges you."
  },
  {
    q: "Is the WhatsApp Business API free?",
    a: "No. There is no free tier on the WhatsApp Business Platform other than the free entry point window, and from 1 October 2026 a free monthly allowance of 1,000 service messages per business phone number. The free WhatsApp Business app is a different product: it has no Meta message fees at all, because it is not the Platform."
  },
  {
    q: "Is the WhatsApp Business API available in Pakistan?",
    a: "Yes. Pakistan is a standalone market on Meta's rate card with its own published rates, rather than being folded into a regional average. Any business with a registered name, a number that is not already on the consumer WhatsApp app, and a Meta Business account can be onboarded through a provider."
  },
  {
    q: "How much does it cost to send 100,000 WhatsApp messages in Pakistan?",
    a: "For utility or authentication messages, 100,000 sits inside Meta's first volume tier, so it is 100,000 × $0.0100, which is $1,000 in Meta fees. At 200,000 the tiers start to bite: the first 150,000 at $0.0100 and the next 50,000 at $0.0095, which is $1,975, an average of $0.009875 per message. Marketing messages at $0.0473 do not get volume tiers."
  },
  {
    q: "Does Meta bill Pakistani businesses in rupees?",
    a: "No. Meta publishes rate cards in sixteen currencies and the Pakistani rupee is not one of them, so Pakistan's rates are quoted and billed in US dollars. Your real rupee cost therefore moves with the exchange rate, which is worth remembering when someone quotes you a fixed rupee figure per message."
  },
  {
    q: "Will replying to my customers cost money from 1 October 2026?",
    a: "Yes, past the free allowance. Replies inside the 24-hour customer service window have been free since November 2024. From 1 October 2026 they are charged at the same rate as a utility message, after the first 1,000 service messages per business phone number each month. Replies sent inside a 72-hour free entry point window remain free."
  },
  {
    q: "How can I send 10,000 messages on WhatsApp at once?",
    a: "Through approved message templates on the WhatsApp Business Platform, to people who opted in. At Pakistan's utility rate that is $100 in Meta fees, or $473 if the content is marketing. The bulk-sending tools sold locally for a few thousand rupees a month mostly drive the consumer app through unofficial automation, which is against WhatsApp's terms and is the most common way Pakistani businesses lose a number."
  },
  {
    q: "Which WhatsApp API providers are available in Pakistan?",
    a: "Several Business Solution Providers onboard Pakistani businesses, and a number of local development shops resell through them. The distinction that matters is whether you are buying access to a dashboard or a system built around your own process. We build the second and pass Meta's fees through at cost, so the rates above are what you pay Meta either way."
  }
];

const related = [
  { t: "How much does a chatbot cost in Pakistan?", to: "/blog/chatbot-price-pakistan" },
  { t: "WhatsApp chatbot development in Pakistan", to: "/services/whatsapp-chatbot-development" }
];

const WhatsAppPricingPakistan = () => {
  const seo = getPageSEO("/blog/whatsapp-api-pricing-pakistan");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path="/blog/whatsapp-api-pricing-pakistan"
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
            headline: "WhatsApp API pricing in Pakistan, and what changes on 1 October",
            description: seo.description,
            url: "https://thechatflow.com/blog/whatsapp-api-pricing-pakistan",
            datePublished: "2026-09-11",
            dateModified: "2026-09-11",
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
              <span className="text-foreground">WhatsApp API pricing in Pakistan</span>
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
              WhatsApp API pricing in Pakistan, and what changes on 1 October
            </h1>

            <p className="font-body-lg text-muted-foreground mb-6">
              Meta&rsquo;s rates for Pakistan are published, and almost nobody selling WhatsApp services here quotes
              them. Below are the actual numbers, the volume tiers that go with them, and the four things that change
              in three weeks.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>Published: 11 September 2026</span>
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
                Sending to a Pakistani number costs <strong>$0.0473</strong> for a marketing message and{" "}
                <strong>$0.0100</strong> for a utility or authentication message. Replying to a customer inside the
                24-hour window is free today.
              </p>
              <p className="text-muted-foreground m-0">
                On <strong>1 October 2026</strong> those replies start costing the same as a utility message, after a
                free allowance of 1,000 a month per phone number, and Pakistan&rsquo;s utility rate itself goes up. If
                you already run a{" "}
                <Link to="/services/whatsapp-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  WhatsApp chatbot
                </Link>{" "}
                that answers in several short bubbles, that habit is about to have a price.
              </p>
            </Card>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">First, whether any of this applies to you</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                Two large groups of Pakistani businesses read pages like this one and worry about a bill they will
                never receive.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <h3 className="font-h4 text-foreground mb-2">You use the green WhatsApp Business app</h3>
                  <p className="text-muted-foreground m-0">
                    The free app you downloaded from the Play Store is a different product from the Business Platform.
                    It has no per-message fees, no templates and no rate card. Nothing here applies to you until you
                    outgrow it.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-h4 text-foreground mb-2">You bought &ldquo;bulk WhatsApp&rdquo; for Rs. 3,000 a month</h3>
                  <p className="text-muted-foreground m-0">
                    Packages sold on that basis are almost never the official platform. They drive the consumer app
                    through unofficial automation, which is against WhatsApp&rsquo;s terms. There are no Meta fees
                    because Meta is not involved, and the number usually gets banned eventually.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">What Meta charges in Pakistan right now</h2>
              <p className="font-body-base text-muted-foreground mb-6">
                Pakistan is a standalone market on Meta&rsquo;s rate card rather than part of a regional average, so
                these are Pakistan&rsquo;s own numbers. They took effect on 1 July 2026. Meta charges when a message is
                delivered, not when it is sent.
              </p>
              <div className="space-y-4 mb-6">
                {rates.map((r, i) => (
                  <Card key={i} className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <h3 className="font-h4 text-foreground m-0">{r.cat}</h3>
                      <span className="text-whatsapp-green font-semibold">{r.rate}</span>
                    </div>
                    <p className="text-muted-foreground m-0 text-sm">{r.use}</p>
                  </Card>
                ))}
              </div>
              <p className="font-body-base text-muted-foreground">
                One detail that catches people out when they budget: Meta publishes rate cards in sixteen currencies
                and the rupee is not among them. Pakistan is priced in US dollars, so your rupee cost per message moves
                with the exchange rate. Any provider quoting you a fixed rupee figure per message is absorbing that
                risk or, more often, has not thought about it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">The volume tiers, and why they disappoint people</h2>
              <p className="font-body-base text-muted-foreground mb-6">
                Utility and authentication messages get cheaper with volume. Marketing messages do not. The tiers are
                marginal rather than flat, which is the part that gets misread: crossing into a cheaper tier does not
                reprice everything below it.
              </p>
              <Card className="p-0 overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold text-foreground">Messages per month</th>
                        <th className="text-left p-4 font-semibold text-foreground">Rate</th>
                        <th className="text-left p-4 font-semibold text-foreground">Against list</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tiers.map((t, i) => (
                        <tr key={i} className="border-t">
                          <td className="p-4 text-muted-foreground">{t.from} &ndash; {t.to}</td>
                          <td className="p-4 text-foreground font-medium">{t.rate}</td>
                          <td className="p-4 text-muted-foreground">{t.off}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <p className="font-body-base text-muted-foreground">
                Send 200,000 utility messages in a month and you pay $0.0100 on the first 150,000 and $0.0095 on the
                next 50,000. That is $1,975, an average of $0.009875. The discount is real and it is small. Almost every
                Pakistani business we quote sits in the first tier and will stay there, so the tiers are worth
                understanding mainly so that nobody sells you a growth story built on them.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-3 mb-6">
                <Calendar className="h-6 w-6 text-whatsapp-green flex-shrink-0 mt-1" />
                <h2 className="font-h2 text-foreground m-0">What changes on 1 October 2026</h2>
              </div>
              <p className="font-body-base text-muted-foreground mb-6">
                Meta announced this on 27 May 2026 and published the new rate cards ahead of time. Four things move at
                once.
              </p>
              <div className="space-y-4 mb-6">
                {changes.map((c, i) => (
                  <Card key={i} className="p-6">
                    <h3 className="font-h4 text-foreground mb-2">{c.t}</h3>
                    <p className="text-muted-foreground m-0">{c.d}</p>
                  </Card>
                ))}
              </div>
              <p className="font-body-base text-muted-foreground">
                What does not change is the free entry point. When somebody reaches you through an ad that clicks to
                WhatsApp or a call-to-action button on your Facebook page, everything you send for the next 72 hours is
                free, in every category. That was already the cheapest route into a conversation in Pakistan. After 1
                October it is cheaper still, relative to everything else.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">What it does to a real monthly bill</h2>
              <p className="font-body-base text-muted-foreground mb-6">
                Take an online store sending 3,000 delivery and order updates, 500 promotional messages, and answering
                4,000 customer replies in a month. Using Meta&rsquo;s published Pakistan rates, the arithmetic looks
                like this.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-6">
                  <h3 className="font-h4 text-foreground mb-3">Today</h3>
                  <p className="text-muted-foreground mb-2">3,000 utility at $0.0100 &rarr; $30.00</p>
                  <p className="text-muted-foreground mb-2">500 marketing at $0.0473 &rarr; $23.65</p>
                  <p className="text-muted-foreground mb-3">4,000 service replies &rarr; free</p>
                  <p className="text-foreground font-semibold m-0">$53.65 to Meta</p>
                </Card>
                <Card className="p-6 border-2 border-whatsapp-green/30">
                  <h3 className="font-h4 text-foreground mb-3">From 1 October</h3>
                  <p className="text-muted-foreground mb-2">3,000 utility at $0.0100 &rarr; $30.00</p>
                  <p className="text-muted-foreground mb-2">500 marketing at $0.0473 &rarr; $23.65</p>
                  <p className="text-muted-foreground mb-3">4,000 service, first 1,000 free &rarr; $30.00</p>
                  <p className="text-foreground font-semibold m-0">$83.65 to Meta</p>
                </Card>
              </div>
              <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-950/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground m-0">
                    That second figure is a floor, not a forecast. It uses today&rsquo;s $0.0100 utility rate, and
                    Pakistan is on Meta&rsquo;s list of markets where the utility and authentication rate rises on the
                    same day. The shape of the change is what matters here: a bill that was mostly outbound messaging
                    becomes a bill where answering customers is a line item.
                  </p>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">The design decision this quietly forces</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                Meta charges per delivered message. Not per conversation, not per customer, not per minute. For two
                years that distinction cost nothing inside the service window, so a lot of bots were built to chat: a
                greeting, then a menu, then a confirmation, then the actual answer, each as its own bubble because it
                looks friendlier on a phone.
              </p>
              <p className="font-body-base text-muted-foreground mb-5">
                From October, a four-bubble answer costs four times a one-bubble answer. Across a few thousand
                conversations a month that is the difference between a rounding error and a real number, and it is
                fixed in the bot, not in your Meta account. Rewriting a flow to answer in one well-written message is a
                morning of work that keeps paying.
              </p>
              <p className="font-body-base text-muted-foreground">
                The same logic applies to anything your bot sends when the customer has gone quiet. Follow-up nudges,
                &ldquo;are you still there&rdquo; prompts and polite sign-offs were free. Every one of them is now a
                message you are buying. For{" "}
                <Link to="/services/ecommerce-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  online stores running cash-on-delivery confirmation
                </Link>
                , where a single order can involve half a dozen back-and-forth messages, this is the line worth
                auditing first.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">What to do in the next three weeks</h2>
              <div className="space-y-4">
                {actions.map((a, i) => (
                  <Card key={i} className="p-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-whatsapp-green/10 text-whatsapp-green font-semibold text-sm">
                        {i + 1}
                      </span>
                      <p className="text-muted-foreground m-0">{a}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Where these numbers come from</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                Every rate on this page is Meta&rsquo;s own published figure for Pakistan, read from the rate selector
                on the WhatsApp Business site and the{" "}
                <a
                  href="https://developers.facebook.com/docs/whatsapp/pricing/"
                  className="text-whatsapp-green hover:text-whatsapp-dark font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pricing documentation
                </a>{" "}
                on 11 September 2026. Meta updates rates quarterly, so check the source before you budget on them in
                six months.
              </p>
              <p className="font-body-base text-muted-foreground">
                Our own pricing sits beside these fees rather than on top of them: Rs. 49,999 to build and Rs. 9,999 a
                month for the platform, with Meta billing you for messages directly. If you want a second pair of eyes
                on what October does to your particular flows,{" "}
                <Link to="/contact" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  send us a month of your message volumes
                </Link>{" "}
                and we will work through the arithmetic with you, whether or not you end up building with us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Questions people ask about WhatsApp pricing in Pakistan</h2>
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

export default WhatsAppPricingPakistan;
