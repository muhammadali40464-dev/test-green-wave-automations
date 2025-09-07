import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const BlogCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-whatsapp-green to-whatsapp-dark">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-h2 mb-6">
            Start Your Chatbot Journey Today
          </h2>
          
          <p className="font-body-lg mb-8 text-white/90">
            Join 500+ Pakistani businesses using TheChatFlow to automate customer support, 
            increase sales, and grow faster. Setup takes just 15 minutes with our expert team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-whatsapp-green hover:bg-white/90 font-semibold px-8"
              asChild
            >
              <Link to="/#pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-whatsapp-green font-semibold px-8"
              asChild
            >
              <Link to="/#contact">
                Book Free Demo
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-white/80" />
              <span className="text-white/90">15-minute setup</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-white/80" />
              <span className="text-white/90">24/7 Pakistani support</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-white/80" />
              <span className="text-white/90">No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTASection;