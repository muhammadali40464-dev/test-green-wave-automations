import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

const BlogCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-whatsapp-green to-whatsapp-dark">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-h2 mb-6">Thinking about building one?</h2>
          <p className="font-body-lg mb-8 text-white/90">
            Tell us the messages your team answers over and over. We will tell you which parts a chatbot should take,
            which parts it should not, and what it would cost \u2014 Rs. 49,999 to build, Rs. 9,999 a month to run.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-whatsapp-green hover:bg-white/90 font-semibold px-8 transition-colors"
              asChild
            >
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Book a free scoping call
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-whatsapp-green font-semibold px-8 transition-colors"
              asChild
            >
              <Link to="/services/custom-chatbot-development">
                See how we build
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-white/80" />
              <span className="text-white/90">Live in 24 to 48 hours</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-white/80" />
              <span className="text-white/90">English and Urdu</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-white/80" />
              <span className="text-white/90">Fixed price before you commit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTASection;
