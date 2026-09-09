import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import StructuredData from "@/components/SEO/StructuredData";
import { getPageSEO } from "@/data/seoData";
import { Link } from "react-router-dom";
import {
  Zap,
  ShoppingBag,
  GraduationCap,
  CalendarCheck,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Phone
} from "lucide-react";

const SuccessStories = () => {
  const seoData = getPageSEO("/success-stories");

  const examples = [
    {
      sector: "Solar installers",
      icon: Zap,
      color: "bg-amber-500",
      problem:
        "Dozens of \"rate kya hai?\" messages a day, almost none of them ready to buy. Salespeople spend the morning re-typing the same three questions.",
      steps: [
        "Asks monthly electricity bill, city, roof type and whether the customer owns the property",
        "Suggests an indicative system size and price band from your own rate sheet",
        "Offers a site survey slot and writes it straight into the engineer&rsquo;s calendar",
        "Hands over to a person the moment the enquiry looks serious or unusual"
      ],
      connects: "Google Calendar, Google Sheets, your CRM",
      outcome:
        "The sales team only opens conversations that already carry a bill size, a city and a budget."
    },
    {
      sector: "Online stores",
      icon: ShoppingBag,
      color: "bg-emerald-600",
      problem:
        "&ldquo;Where is my order?&rdquo; on repeat, carts abandoned at checkout, and COD parcels refused at the door.",
      steps: [
        "Looks up a live order by number and explains exactly where it is",
        "Confirms COD orders in chat before dispatch, so fewer parcels come back",
        "Follows up on abandoned carts with the specific product left behind",
        "Answers sizing, stock and returns questions from your own product data"
      ],
      connects: "Shopify, WooCommerce, Salla",
      outcome:
        "Routine order questions stop reaching a human, and refused deliveries drop because intent is confirmed first."
    },
    {
      sector: "Visa &amp; education consultancies",
      icon: GraduationCap,
      color: "bg-sky-600",
      problem:
        "The same twenty questions &mdash; documents, eligibility, fees, timelines &mdash; asked in Urdu and English at every hour.",
      steps: [
        "Screens basic eligibility before anyone&rsquo;s time is spent",
        "Returns the correct document checklist for the destination country",
        "Answers fee and processing-time questions from your own written material",
        "Books a consultant slot only once the applicant clears screening"
      ],
      connects: "Google Calendar, Google Sheets, your file store",
      outcome:
        "Consultants speak to screened applicants instead of answering checklists all day."
    },
    {
      sector: "Clinics &amp; appointment businesses",
      icon: CalendarCheck,
      color: "bg-violet-600",
      problem:
        "Bookings arrive after hours when nobody is on the phone, and no-shows eat the schedule.",
      steps: [
        "Takes the service, preferred doctor and time, and checks real availability",
        "Confirms the booking and writes it to the practice calendar",
        "Sends a reminder before the appointment and offers one-tap rescheduling",
        "Escalates anything clinical straight to a member of staff"
      ],
      connects: "Google Calendar, SMS and email",
      outcome:
        "After-hours enquiries turn into booked appointments instead of missed calls."
    }
  ];

  return (
    <>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        path="/success-stories"
        keywords={seoData.keywords}
        type="website"
      />
      <StructuredData
        type="Organization"
        data={{
          name: "TheChatFlow",
          description:
            "Examples of custom chatbot builds for Pakistani businesses across solar, e-commerce, consultancy and appointment-based sectors.",
          url: "https://thechatflow.com/success-stories"
        }}
      />
      <MegaMenu />

      {/* Hero */}
      <section className="pt-24 pb-14 bg-gradient-to-br from-background via-background to-whatsapp-green/5">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-5 py-2.5 rounded-full text-sm font-semibold">
              <MessageCircle className="h-4 w-4 text-whatsapp-green" />
              Example builds
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              What a custom chatbot
              <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                actually does all day
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Four build patterns we are asked for most often in Pakistan &mdash; what the bot handles on its own,
              what it connects to, and where a person still takes over. Use them to work out what yours would need to do.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-10 rounded-xl border border-amber-300 bg-amber-50 p-5">
            <p className="text-sm text-amber-900 m-0">
              <strong>A note on what this page is.</strong> These are illustrative build patterns drawn from the kind of work
              we do, not named client accounts, and they carry no invented performance figures. Named case studies will be
              published here as clients agree to be quoted.
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16">
        <div className="container-width">
          <div className="grid gap-8 lg:grid-cols-2">
            {examples.map((ex, index) => (
              <Card key={index} className="border shadow-lg hover:shadow-xl transition-all h-full">
                <CardContent className="p-7 md:p-8 flex flex-col gap-6 h-full">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${ex.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <ex.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">{ex.sector}</h2>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      The problem
                    </h3>
                    <p className="text-muted-foreground leading-relaxed m-0">{ex.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      What the bot handles
                    </h3>
                    <div className="grid gap-2.5">
                      {ex.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-whatsapp-green flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-whatsapp-green/5 border border-whatsapp-green/20 p-4">
                    <p className="text-sm text-muted-foreground m-0">
                      <strong className="text-foreground">Connects to:</strong> {ex.connects}
                    </p>
                  </div>

                  <div className="mt-auto pt-2 border-t">
                    <p className="text-foreground font-medium leading-relaxed m-0">{ex.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-14">
            <p className="text-muted-foreground">
              None of these is a template. Each one is scoped around how a specific business already works &mdash;
              read how we approach a build on our{" "}
              <Link to="/services/custom-chatbot-development" className="text-whatsapp-green hover:text-whatsapp-dark font-medium">
                custom chatbot development
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto space-y-7">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Tell us what you want automated
            </h2>

            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Describe the messages your team answers over and over. We will tell you which parts a chatbot can take,
              which parts it should not, and what building it would involve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                size="lg"
                className="bg-white text-whatsapp-green hover:bg-white/90 hover:text-whatsapp-dark border-2 border-white transition-all duration-300 px-10 py-4 text-base font-bold shadow-xl hover:shadow-2xl"
                asChild
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to a developer
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-whatsapp-green transition-all duration-300 px-10 py-4 text-base font-bold"
                asChild
              >
                <Link to="/services/custom-chatbot-development">
                  See how we build
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SuccessStories;
