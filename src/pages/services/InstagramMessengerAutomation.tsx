import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Phone, Instagram, MessageCircle, Clock } from "lucide-react";

const freeToolsAreEnough = [
  "One person handles all the DMs",
  "You want the same reply sent to everyone who comments a keyword",
  "Nothing needs to know what the customer ordered",
  "You are happy inside one tool's own inbox"
];

const buildEarnsIt = [
  { t: "More than one person replying", d: "Shared inbox, one contact record, no two people answering the same customer differently." },
  { t: "The reply depends on real data", d: "Order status, stock, a booking slot. A canned DM cannot know any of that." },
  { t: "Urdu and voice notes", d: "Roman Urdu is how a lot of Pakistani customers actually write. Tools built for English reply badly to it." },
  { t: "The conversation should continue elsewhere", d: "A DM that becomes a WhatsApp thread or a CRM record, rather than dying in the Instagram inbox." },
  { t: "Handover has to work", d: "The bot needs to know when to stop and pass a real person the full context, not restart the conversation." }
];

const rules = [
  { t: "Private replies to comments: 7 days", d: "You can send one private message to somebody who commented on a post, ad or reel, within 7 days of the comment. On Instagram Live it only works during the broadcast." },
  { t: "Then a 24-hour window opens", d: "Only once the person replies to that message can the conversation continue, and it continues inside a 24-hour messaging window." },
  { t: "Human agent tag: 7 days", d: "A real person can keep replying manually for up to 7 days, which is what makes proper handover possible instead of losing the thread at hour 25." },
  { t: "A Professional account is required", d: "Instagram Business or Creator. Personal accounts cannot use any of this." }
];

const faqs = [
  { q: "Can I automate Instagram comment-to-DM for free?", a: "Yes, and for a lot of businesses you should. Several tools offer a free tier that sends a canned DM when somebody comments a keyword, and if that is all you need, buying a custom build would be a waste of money. It stops being enough when the right reply depends on data the tool cannot see, or when more than one person is answering." },
  { q: "How long can I reply to an Instagram comment?", a: "You can send one private reply within 7 days of the comment being created, for posts, ads posts and reels. On Instagram Live, replies only work during the broadcast itself. Once the person answers your private reply, the conversation continues inside a 24-hour messaging window." },
  { q: "What happens after the 24-hour window closes?", a: "A human agent tag lets a real person keep replying manually for up to 7 days, which is the mechanism that makes handover work properly. Outside that, reopening the conversation depends on the message tags Meta approves for specific purposes, and promotional content is not one of them." },
  { q: "Do I need an Instagram Business account?", a: "Yes. An Instagram Professional account, either Business or Creator, connected to a Facebook page. Personal accounts have no access to the messaging features any of this relies on." },
  { q: "How much does it cost?", a: "Rs. 49,999 for the build and Rs. 9,999 a month for the platform, the same as our other channels, because the platform and the maintenance are shared. If a free tool covers what you need, we will say so rather than sell you this." },
  { q: "Can Instagram and WhatsApp share one inbox?", a: "Yes, and for most brands that is the point. The same contact, the same history and the same team inbox across Instagram, Messenger, WhatsApp and a website widget, so a customer who moves channel does not start again." }
];

const related = [
  { to: "/services/custom-chatbot-development", t: "Custom chatbot development: all channels, one system" },
  { to: "/services/ecommerce-chatbot-development", t: "Chatbots for Pakistani online stores" },
  { to: "/services/whatsapp-chatbot-development", t: "WhatsApp chatbot development in Pakistan" },
  { to: "/blog/ai-agent-vs-chatbot", t: "AI agent vs chatbot: which one do you need?" }
];

const InstagramMessengerAutomation = () => {
  const seo = getPageSEO("/services/instagram-messenger-automation");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path="/services/instagram-messenger-automation"
        keywords={seo.keywords}
        type="website"
        author={seo.author}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Instagram and Messenger Automation",
            description: seo.description,
            url: "https://thechatflow.com/services/instagram-messenger-automation",
            serviceType: "Instagram and Facebook Messenger automation",
            provider: { "@type": "Organization", name: "TheChatFlow", url: "https://thechatflow.com" },
            areaServed: { "@type": "Country", name: "Pakistan" },
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
              <Link to="/services/custom-chatbot-development" className="hover:text-foreground">Services</Link>
              <span>/</span>
              <span className="text-foreground">Instagram and Messenger automation</span>
            </div>
          </div>
        </nav>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-4 py-2 rounded-full font-medium text-sm mb-6">
                <Instagram className="h-4 w-4 text-whatsapp-green" />
                Comment-to-DM, and what comes after it
              </div>

              <h1 className="font-h1 text-foreground mb-6">
                Instagram and Messenger
                <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                  automation for Pakistani brands
                </span>
              </h1>

              <p className="font-body-lg text-muted-foreground mb-8">
                A comment becomes a DM, the DM becomes a real conversation, and the conversation ends somewhere useful.
                We build the part after the auto-reply, which is where most setups fall over.
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
                    All channels in one system
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-whatsapp-green" />Shared inbox with WhatsApp</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-whatsapp-green" />Urdu and voice notes</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-whatsapp-green" />Proper 7-day handover</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl mb-8">
              <h2 className="font-h2 text-foreground mb-4">Start here: a free tool may be all you need</h2>
              <p className="font-body-base text-muted-foreground">
                Several tools do comment-to-DM on a free tier, and plenty of Pakistani brands genuinely do not need
                more than that. We would rather say this on the page than after you have paid us.
              </p>
            </div>

            <Card className="p-7 max-w-3xl border-2 border-muted">
              <h3 className="font-h4 text-foreground mb-4">A free tool is enough if&hellip;</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {freeToolsAreEnough.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-whatsapp-green flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl mb-10">
              <h2 className="font-h2 text-foreground mb-4">When a built system earns its cost</h2>
              <p className="font-body-base text-muted-foreground">
                Every one of these is something the canned-reply tools cannot do, because they never see your data and
                they end at the first message.
              </p>
            </div>

            <div className="max-w-3xl divide-y border-y">
              {buildEarnsIt.map((b, i) => (
                <div key={i} className="py-5 flex items-start gap-4">
                  <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-h4 text-foreground mb-1">{b.t}</h3>
                    <p className="text-muted-foreground m-0">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body-base text-muted-foreground max-w-3xl mt-8">
              The second one is the real dividing line. A reply that depends on live order data needs the bot to reach
              into your systems, which is{" "}
              <Link to="/blog/ai-agent-vs-chatbot" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                the difference between a chatbot and an agent
              </Link>{" "}
              and the thing that decides what your build costs.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-3xl mb-10">
              <h2 className="font-h2 text-foreground mb-4">The rules Meta actually enforces</h2>
              <p className="font-body-base text-muted-foreground">
                Most broken Instagram setups are broken because somebody designed a flow the platform does not allow.
                These four constraints shape every build.
              </p>
            </div>

            <div className="max-w-3xl divide-y border-y">
              {rules.map((r, i) => (
                <div key={i} className="py-5 flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <h3 className="font-h4 text-foreground sm:w-56 flex-shrink-0 m-0">{r.t}</h3>
                  <p className="text-muted-foreground m-0">{r.d}</p>
                </div>
              ))}
            </div>

            <p className="font-body-base text-muted-foreground max-w-3xl mt-8">
              WhatsApp works on a different clock again, with its own windows and its own per-message billing. If your
              customers move between the two, our{" "}
              <Link to="/services/whatsapp-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                WhatsApp chatbot page
              </Link>{" "}
              covers that side, and stores should also read the{" "}
              <Link to="/services/ecommerce-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                e-commerce build
              </Link>.
            </p>
          </div>
        </section>

        <section className="section-padding gradient-background">
          <div className="container-width">
            <div className="max-w-3xl mb-8">
              <h2 className="font-h2 text-foreground mb-4">Where these setups usually fail</h2>
            </div>
            <div className="max-w-3xl divide-y border-y">
              {[
                "The auto-DM fires and then nothing. No second step, no handover, no record.",
                "The bot answers in English to a customer writing Roman Urdu, and the customer leaves.",
                "Two team members reply from two tools and contradict each other.",
                "Somebody builds a promotional flow for outside the window, and Meta blocks it."
              ].map((n, i) => (
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
                Show us what happens after the auto-DM
              </h2>
              <p className="text-white/90 text-lg mb-8">
                If a free tool already covers it, we will tell you. If your DMs need to know what the customer ordered,
                that is a build, and we will scope it before you pay.
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

export default InstagramMessengerAutomation;
