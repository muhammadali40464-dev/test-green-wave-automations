import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need technical knowledge to use The ChatFlow?",
      answer: "Not at all! Our drag & drop builder is designed for business owners, not developers. You can create complex chat flows with simple point-and-click actions. Plus, our setup service handles everything for you if you prefer a done-for-you approach."
    },
    {
      question: "How quickly can I get started with WhatsApp automation?",
      answer: "With our setup service, you'll be up and running in 24-48 hours. This includes WhatsApp Business API setup, chatbot configuration, team training, and go-live support. If you choose to set it up yourself, you can start immediately after signup."
    },
    {
      question: "What's included in the WhatsApp Business API?",
      answer: "You get the official WhatsApp Business API with verified green tick, unlimited messaging capabilities, broadcast features, rich media support, and integration with our AI platform. This is the same API used by major corporations worldwide."
    },
    {
      question: "Do you support Urdu and other local languages?",
      answer: "Yes! Our platform fully supports Urdu, English, and Arabic. The AI can understand and respond in these languages naturally. You can create multilingual chatbots that automatically detect customer language preferences."
    },
    {
      question: "Can I integrate with Instagram and Facebook?",
      answer: "Absolutely! Our unified inbox connects WhatsApp, Instagram DMs, and Facebook Messenger in one place. You can manage all customer conversations from a single dashboard and set up automated responses across all platforms."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support, dedicated account managers for enterprise clients, comprehensive training materials, and regular webinars. Our Pakistan-based support team understands local business needs and provides support in English and Urdu."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "No contracts required! You can cancel your monthly subscription anytime. The setup service is a one-time fee with no ongoing obligations. We're confident you'll love the results, so we don't lock you into long-term commitments."
    },
    {
      question: "How does the AI understand customer context?",
      answer: "Our AI uses advanced ChatGPT technology trained on business conversations. It remembers conversation history, understands customer intent, and can handle complex queries. You can also train it with your specific business information and FAQs."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-h1 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <p className="font-body-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here's everything you need to know about The ChatFlow.
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

        {/* Still have questions CTA */}
        <div className="mt-16 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="font-h2 text-foreground">
              Still have questions?
            </h3>
            <p className="font-body text-muted-foreground">
              Our team is here to help you get started
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Chat with Support
            </Button>
            <Button variant="secondary" size="lg">
              Book a Demo Call
            </Button>
          </div>
          
          <p className="font-small text-muted-foreground">
            Available 24/7 • Response time: Under 5 minutes • Support in English & Urdu
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;