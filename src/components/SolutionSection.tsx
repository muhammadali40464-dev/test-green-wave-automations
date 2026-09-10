import { Search, Wrench, RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionSection = () => {
  const steps = [
    {
      icon: Search,
      title: "We scope it",
      subtitle: "Free, before you pay",
      description:
        "We go through the messages your team actually answers and separate what a bot should handle from what it should never touch. If automation is the wrong answer, we say so."
    },
    {
      icon: Wrench,
      title: "We build and train it",
      subtitle: "Live in 24 to 48 hours",
      description:
        "Flows built, your systems connected, and each agent trained on your own material — product data, price lists, policies — so answers come from your business, not guesswork."
    },
    {
      icon: RefreshCw,
      title: "We keep it working",
      subtitle: "So answers stay right",
      description:
        "Prices change, stock changes, policies change. We keep the agents current, so the bot does not slowly start telling customers the wrong thing."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center space-y-6 mb-16 lg:mb-20">
          <h2 className="font-h1 text-foreground">
            You do not configure it.
            <span className="block text-whatsapp-green mt-2">We build it for you.</span>
          </h2>
          <p className="font-body-lg text-muted-foreground mx-auto max-w-2xl">
            Most chatbot tools hand you an empty canvas and leave the hard part with you. We do the hard part:
            working out what should be automated, what should not, and how it talks to the systems you already run.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-card shadow-card rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-whatsapp-green to-whatsapp-teal rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="font-h3 text-foreground">{step.title}</h3>
                <div className="inline-block bg-whatsapp-green/10 text-whatsapp-green px-4 py-2 rounded-full font-medium text-sm sm:text-base">
                  {step.subtitle}
                </div>
                <p className="font-body text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground">
            The full process, the six agent types we build, and what each one costs are on our{" "}
            <Link
              to="/services/custom-chatbot-development"
              className="text-whatsapp-green hover:text-whatsapp-dark font-semibold inline-flex items-center gap-1"
            >
              custom chatbot development page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
