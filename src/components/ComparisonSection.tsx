import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ComparisonSection = () => {
  const navigate = useNavigate();
  const features = [
    "Implementation Support",
    "Unlimited Chats", 
    "Unlimited Contacts",
    "All-in-One Solution",
    "Competitive Pricing",
    "Tutorials for Self-Support",
    "All Industry Use Cases",
    "24/7 Customer Support",
    "Custom AI Training",
    "Multi-platform Integration"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-cta text-white px-6 py-2 font-semibold">
            Why Choose Us
          </Badge>
          
          <h2 className="font-h1 text-foreground">
            TheChatFlow vs Others
          </h2>
          
          <p className="font-body-lg text-muted-foreground max-w-2xl mx-auto">
            See why thousands of Pakistani businesses choose TheChatFlow over alternatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-card border overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6">
              <div className="font-h4 text-gray-800 text-center md:text-left">FEATURE</div>
              <div className="font-h4 text-gray-800 text-center">THECHATFLOW</div>
              <div className="font-h4 text-gray-800 text-center">OTHERS</div>
            </div>

            {/* Features */}
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6 border-b border-gray-100 items-center hover:bg-gray-50/50 transition-colors ${
                  index % 2 === 0 ? 'bg-gray-50/30' : 'bg-white'
                }`}
              >
                <div className="font-body font-medium text-gray-800 text-center md:text-left mb-2 md:mb-0">{feature}</div>
                <div className="flex justify-center">
                  <div className="bg-whatsapp-green/10 p-3 rounded-full">
                    <Check className="h-6 w-6 text-whatsapp-green" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-red-50 p-3 rounded-full">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-gradient-to-r from-whatsapp-green to-whatsapp-dark text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform shadow-hero border-0"
              onClick={() => navigate('/contact')}
            >
              Experience The Difference - Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;