import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How much does a custom chatbot cost in Pakistan?",
    answer:
      "Rs. 49,999 as a one-time build cost, plus Rs. 9,999 per month for the platform. The build covers flow design, training the agents on your material, connecting your systems, team training and 30 days of support. The monthly fee covers all channels, unlimited contacts and chats, the AI models and the shared inbox. Larger builds cost more, and we tell you before you commit rather than after."
  },
  {
    question: "Is an AI agent the same as a chatbot?",
    answer:
      "Not quite. A traditional chatbot follows a fixed script: it matches a keyword and returns a prepared answer. An AI agent understands what was actually asked, and can take an action \u2014 look up a live order, check calendar availability, save a lead, or hand the conversation to a person. What we build is the second kind, with several specialist agents routed automatically rather than one bot trying to answer everything."
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard single-channel build goes live in 24 to 48 hours once we have your content and access. Builds with custom integrations, several agents or more than one language take longer. You get the timeline at the scoping stage, before any money changes hands."
  },
  {
    question: "Do I need the WhatsApp Business API?",
    answer:
      "Only if you have more enquiry volume than one person can answer, more than one agent replying on the same number, or a system you want the conversation connected to. If you simply want automatic replies, the free WhatsApp Business app already does that, and we will tell you so."
  },
  {
    question: "Can it reply in Urdu and understand voice notes?",
    answer:
      "Yes. It replies in whichever language the customer writes in, and it transcribes voice notes, works out what was asked, and can reply in voice as well as text. In Pakistan that matters more than most businesses expect, because a large share of customers send voice rather than type."
  },
  {
    question: "What happens when the chatbot cannot answer something?",
    answer:
      "It hands over to a person. The handover rules are agreed with you during flow design \u2014 particular topics, particular keywords, an unhappy customer, or simply the agent being unsure. The conversation moves into the shared team inbox with the full history visible, so nobody has to ask the customer to repeat themselves."
  },
  {
    question: "What can it connect to?",
    answer:
      "Shopify, WooCommerce and Salla for products and live orders; Google Sheets and Google Calendar; CRMs including HubSpot and ActiveCampaign; email and SMS providers; Zapier and n8n; and any system that exposes an HTTP API. If yours is unusual, our engineers build the connection rather than telling you it is not supported."
  },
  {
    question: "Do I have to configure anything myself?",
    answer:
      "No. We scope it, design the conversation, build it, train the agents on your material and maintain it as your business changes. You review the flow design before anything is built, and your team is trained on the shared inbox before launch."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer }
            }))
          })}
        </script>
      </Helmet>

      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-h1 text-foreground">Questions we get asked</h2>
          <p className="font-body-lg text-muted-foreground max-w-2xl mx-auto">
            Straight answers on cost, timelines and what a custom chatbot can and cannot do for a business in Pakistan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card shadow-card rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="hover:no-underline text-left font-medium text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="font-h2 text-foreground">Still not sure what you need?</h3>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Describe the messages your team answers over and over. We will tell you which parts a chatbot should take
              and which parts it should not.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Book a free scoping call
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services/custom-chatbot-development">
                See how we build
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="font-small text-muted-foreground">
            Free scoping call \u00b7 Fixed price before you commit \u00b7 English and Urdu
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
