import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import BlogCTASection from "@/components/BlogCTASection";
import SEOHead from "@/components/SEO/SEOHead";
import { getPageSEO } from "@/data/seoData";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertTriangle, Check, X } from "lucide-react";

const questions = [
  {
    q: "What happens when the bot cannot answer?",
    why: "This is the fastest filter there is. Every bot fails on something. What matters is what the customer sees in that moment.",
    good: "A named handover: the conversation moves to a human inbox, the customer is told, and somebody is responsible for picking it up inside a stated window.",
    bad: "&ldquo;It won&rsquo;t happen, our AI handles everything.&rdquo; It will happen, usually in week one, and a bot that loops back to a menu loses you the enquiry."
  },
  {
    q: "What does Meta charge on top of your fee?",
    why: "WhatsApp fees are billed by Meta directly, per message delivered. A company that does not mention them either does not run WhatsApp builds or is hiding the number.",
    good: "A category-by-category answer, and a note that rates change quarterly. Bonus points if they know Pakistan is priced in US dollars.",
    bad: "&ldquo;Unlimited messages included.&rdquo; Nobody can include what Meta bills you for. The cost is being hidden, not removed."
  },
  {
    q: "Who updates it when my prices change?",
    why: "Products change, prices change, policies change. A bot nobody maintains starts giving wrong answers within a couple of months, and wrong answers are worse than no bot.",
    good: "A named maintenance arrangement with a monthly fee attached. Somebody owns it after launch.",
    bad: "A one-off build price with no mention of what happens afterwards. You are buying a snapshot, not a system."
  },
  {
    q: "Can I see it working before I pay the balance?",
    why: "Chatbots demo beautifully and break on real phrasing. You want to test it on your own awkward questions, in Urdu and English, before the money moves.",
    good: "A staging number or test environment you can message yourself, with your own content loaded.",
    bad: "A video walkthrough of somebody else&rsquo;s bot, or a demo you are not allowed to type into."
  },
  {
    q: "Whose WhatsApp Business account is it?",
    why: "If the number and the Meta Business account sit under the agency&rsquo;s name, you cannot leave without losing the asset and the conversation history.",
    good: "The WABA and the phone number are registered to your business. The agency has access, not ownership.",
    bad: "Vagueness, or &ldquo;we manage all that for you.&rdquo; Ask again, and get the answer in writing."
  },
  {
    q: "What does the bot connect to?",
    why: "A bot that only answers questions is a cheaper build than one that checks stock or books a slot. Confusing the two is how quotes go wrong in both directions.",
    good: "Specific system names and a clear statement about which have ready connectors and which need custom work.",
    bad: "&ldquo;It integrates with everything.&rdquo; A custom ERP with no API integrates with nothing without somebody writing that integration."
  },
  {
    q: "Does it handle Urdu, and how?",
    why: "Most Pakistani customers write Roman Urdu, mixed with English, with spelling nobody standardised. This is the single most common cause of a bot feeling stupid.",
    good: "A direct answer about Roman Urdu specifically, ideally with a test you can run yourself.",
    bad: "&ldquo;Yes, it supports 100+ languages.&rdquo; Language support in a model is not the same as handling how your customers actually type."
  },
  {
    q: "Can you show me a build you did that failed?",
    why: "Anybody can show you a success. A company that can describe a project that went wrong, and what they changed afterwards, has done enough work to have scars.",
    good: "A specific story with a lesson attached, even an anonymised one.",
    bad: "&ldquo;All our clients are happy.&rdquo; Nobody has a hundred percent record, and pretending otherwise tells you how they will handle your problem."
  },
  {
    q: "What would make you tell me not to buy this?",
    why: "The most useful answer in the whole conversation. A company that cannot name a scenario where you are the wrong customer will sell to anyone.",
    good: "A real disqualifier: low volume, no written process, systems with no way in.",
    bad: "A pause, then a reason why you are perfect for it."
  }
];

const resellerTells = [
  "The proposal describes a dashboard rather than your business. If the features list could be pasted into any other client&rsquo;s proposal unchanged, you are buying software access with a setup call attached.",
  "Pricing is per-agent or per-contact rather than per-build. That is a platform&rsquo;s pricing model showing through the agency&rsquo;s invoice.",
  "They cannot explain what happens to your data or where the conversation history lives.",
  "Scoping takes ten minutes. Real scoping is uncomfortable, because somebody has to make you describe what a valid order actually looks like.",
  "The word custom appears everywhere and nothing in the proposal is specific to you."
];

const notYet = [
  "Under roughly a dozen enquiries a day. A person answering properly beats anything automated at that volume, and the build will not pay for itself.",
  "Nobody has written down how the process works. If three staff handle the same request three different ways, that has to be settled before a bot can be told what correct looks like.",
  "The real problem is that nobody follows up. Automating the first reply does not fix a pipeline where leads go cold on day three.",
  "You are between systems. If your store or CRM is being replaced in two months, build after the migration, not before."
];

const faqs = [
  {
    q: "How do I choose a chatbot development company in Pakistan?",
    a: "Judge them on the answers to a handful of specific questions rather than on the portfolio. The most revealing are what happens when the bot cannot answer, what Meta charges on top of their fee, who maintains it after launch, and whose WhatsApp Business account the number sits under. A company that answers those four precisely is doing real builds. A company that deflects on any of them is reselling platform access."
  },
  {
    q: "How much does it cost to develop a chatbot in Pakistan?",
    a: "It depends on what you are buying: a self-serve subscription tool, a freelancer's one-off build, or a built and maintained service are three different products at three different prices. Ours is Rs. 49,999 once and Rs. 9,999 a month, with Meta's message fees billed to you separately by Meta. We have written up the full comparison, including the ranges for the other two routes."
  },
  {
    q: "Which companies develop chatbots in Pakistan?",
    a: "Several, and the honest answer is that the directory listings you find on page one are not a ranking of quality. Clutch, GoodFirms and Upwork sort by review volume and profile completeness, not by whether the build survives contact with real customers. Use the questions above on any shortlist, including ours."
  },
  {
    q: "Should I hire a freelancer or an agency for a chatbot?",
    a: "A freelancer is fine for something small and static that will not change. The risk is not the build quality, it is what happens three months later when your prices change or Meta changes a rule and the freelancer has moved on. If the bot is answering customers every day, somebody needs to own it continuously."
  },
  {
    q: "What questions should I ask a chatbot developer before signing?",
    a: "Nine are worth asking, and they are laid out in full above. If you only have time for three: what happens when the bot cannot answer, who updates it when my prices change, and what would make you tell me not to buy this. The third one separates consultants from salespeople faster than anything else."
  },
  {
    q: "How long does a chatbot build take in Pakistan?",
    a: "A standard single-channel build is a matter of weeks rather than months, and most of that time is not engineering. It is getting your content, prices and policies written down accurately, and agreeing what the bot should do when it is unsure. Projects that run long almost always run long on that, not on the technology."
  },
  {
    q: "Do I own the chatbot after it is built?",
    a: "You should own the conversation design, the content and the data, and the WhatsApp Business account and number should be registered to your business rather than the agency's. What nobody sells outright is the messaging channel itself, because WhatsApp, Instagram and Messenger run on Meta's infrastructure with Meta's fees whoever you buy from."
  },
  {
    q: "Is Botsify or a local agency better for a Pakistani business?",
    a: "They are different purchases. A platform gives you tools and expects you to build the conversation yourself; a development company designs and builds it for you and keeps it current. Neither is better in the abstract. The question is whether anyone on your team has the time and inclination to own a bot as an ongoing job."
  }
];

const related = [
  { t: "How much does a chatbot cost in Pakistan?", to: "/blog/chatbot-price-pakistan" },
  { t: "Custom chatbot development: what we build", to: "/services/custom-chatbot-development" }
];

const ChooseChatbotCompany = () => {
  const seo = getPageSEO("/blog/choose-chatbot-development-company-pakistan");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path="/blog/choose-chatbot-development-company-pakistan"
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
            headline: "How to choose a chatbot development company in Pakistan",
            description: seo.description,
            url: "https://thechatflow.com/blog/choose-chatbot-development-company-pakistan",
            datePublished: "2026-09-12",
            dateModified: "2026-09-12",
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
              <span className="text-foreground">Choosing a chatbot company</span>
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
              How to choose a chatbot development company in Pakistan
            </h1>

            <p className="font-body-lg text-muted-foreground mb-6">
              Page one for this search is three directories and a row of companies explaining why they are the best
              one. Here are the nine questions that actually separate them, written so they work on us too.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>Published: 12 September 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
          </div>
        </header>

        <article className="pb-8">
          <div className="container-width max-w-3xl">

            <Card className="p-6 border-2 border-whatsapp-green/30 bg-whatsapp-green/5 mb-12">
              <h2 className="font-h4 text-foreground mb-3">The short answer</h2>
              <p className="text-muted-foreground mb-3">
                Ask one question early: <strong>what happens when the bot cannot answer?</strong> Everything you need to
                know about how a company builds is contained in how precisely they answer it. Vagueness there predicts
                vagueness everywhere.
              </p>
              <p className="text-muted-foreground m-0">
                The rest of this page is eight more questions like it. They are the same ones we expect to be asked
                before somebody commissions{" "}
                <Link to="/services/custom-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  custom chatbot development
                </Link>{" "}
                from us, and we have included the answers that should make you walk away, including when they are ours.
              </p>
            </Card>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Nine questions, and what each answer reveals</h2>
              <p className="font-body-base text-muted-foreground mb-6">
                Run these on every company on your shortlist. Ask them on a call rather than by email, because the
                hesitation before an answer is often more informative than the answer.
              </p>
              <div className="space-y-5">
                {questions.map((item, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-whatsapp-green/10 text-whatsapp-green font-semibold">
                        {i + 1}
                      </span>
                      <h3 className="font-h4 text-foreground m-0 pt-1">{item.q}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: item.why }} />
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground m-0 text-sm" dangerouslySetInnerHTML={{ __html: "<strong class='text-foreground'>What you want to hear:</strong> " + item.good }} />
                      </div>
                      <div className="flex items-start gap-3">
                        <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground m-0 text-sm" dangerouslySetInnerHTML={{ __html: "<strong class='text-foreground'>What should worry you:</strong> " + item.bad }} />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Spotting a reseller in developer&rsquo;s clothes</h2>
              <p className="font-body-base text-muted-foreground mb-6">
                Plenty of companies in this market buy access to a chatbot platform, add a setup fee, and sell it as a
                custom build. That is a legitimate business, and it is not what you think you are buying when somebody
                says development. Five tells:
              </p>
              <div className="space-y-4">
                {resellerTells.map((t, i) => (
                  <Card key={i} className="p-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-muted text-foreground font-semibold text-sm">
                        {i + 1}
                      </span>
                      <p className="text-muted-foreground m-0" dangerouslySetInnerHTML={{ __html: t }} />
                    </div>
                  </Card>
                ))}
              </div>
              <p className="font-body-base text-muted-foreground mt-6">
                None of this means the price is wrong. It means you should compare it against what platform access
                costs on its own, which is the comparison we set out in{" "}
                <Link to="/blog/chatbot-price-pakistan" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  what a chatbot actually costs in Pakistan
                </Link>
                .
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">What a real scoping conversation covers</h2>
              <p className="font-body-base text-muted-foreground mb-6">
                You can judge a company by how uncomfortable their scoping call is. A good one makes you do homework.
                It should get through most of this before anybody quotes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <h3 className="font-h4 text-foreground mb-2">Your actual messages</h3>
                  <p className="text-muted-foreground m-0">
                    A fortnight of real chat history, read properly. Not a summary of what you think customers ask, because
                    the two are never the same.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-h4 text-foreground mb-2">The edge cases</h3>
                  <p className="text-muted-foreground m-0">
                    Refunds, complaints, the customer who wants a discount. The awkward conversations decide whether the
                    bot helps or embarrasses you.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-h4 text-foreground mb-2">Who is on the other end</h3>
                  <p className="text-muted-foreground m-0">
                    Named people, working hours, and what happens at 11pm on a Sunday. Handover design is most of the
                    value in a build.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-h4 text-foreground mb-2">What counts as done</h3>
                  <p className="text-muted-foreground m-0">
                    A written definition of success before the build starts. Otherwise the project ends when everyone
                    gets tired rather than when it works.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">When the answer is don&rsquo;t hire anyone yet</h2>
              <p className="font-body-base text-muted-foreground mb-6">
                We turn down projects for these reasons most months, and any company worth hiring will tell you the same
                thing rather than take the deposit.
              </p>
              <div className="space-y-4">
                {notYet.map((n, i) => (
                  <Card key={i} className="p-5 border-l-4 border-l-amber-500">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground m-0">{n}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Where we sit, including the unflattering part</h2>
              <p className="font-body-base text-muted-foreground mb-5">
                We build custom chatbots and AI agents for Pakistani businesses on WhatsApp, Instagram and Messenger.
                Rs. 49,999 for a standard build, Rs. 9,999 a month to keep it running and current. Meta bills you for
                messages directly, at its own published rates, and we pass nothing on top of that.
              </p>
              <p className="font-body-base text-muted-foreground mb-5">
                We are the wrong choice if you want to log into a dashboard and build flows yourself, because we do not
                sell that. We are also the wrong choice below about a dozen enquiries a day, and we will say so on the
                call rather than after the invoice. Our{" "}
                <Link to="/services/whatsapp-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  WhatsApp builds
                </Link>{" "}
                are the bulk of what we do, and the constraints we design around are Meta&rsquo;s, not ours.
              </p>
              <p className="font-body-base text-muted-foreground">
                Run the nine questions on us the same way you would on anyone else.{" "}
                <Link to="/contact" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                  Book a scoping call
                </Link>{" "}
                and bring your awkward ones. If the honest answer is that you should not be buying this yet, that is
                what you will get, and it costs you nothing to find out.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-h2 text-foreground mb-6">Questions people ask before hiring</h2>
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

export default ChooseChatbotCompany;
