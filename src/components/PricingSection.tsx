import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, AlertCircle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();
  const monthlyFeatures = [
    "WhatsApp Business API",
    "Instagram & Facebook integration",
    "Unlimited contacts & chats",
    "AI integration (All models)", 
    "Visual flow builder",
    "Multi-agent dashboard",
    "Real-time analytics",
    "API & webhooks",
    "24/7 support"
  ];

  const implementationFeatures = [
    "Complete bot configuration",
    "Custom flow design", 
    "Team training included",
    "Go-live in 24-48 hours",
    "30-day support",
    "Success guarantee"
  ];

  return (
    <section className="section-padding gradient-background">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-2 rounded-full font-medium text-sm">
            <Zap className="h-4 w-4" />
            Pricing Plans
          </div>
          
          <h2 className="font-h1 text-foreground">
            Choose Your
            <span className="block bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          
          <p className="font-body-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Start growing your business today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {/* Monthly Plan */}
          <div className="relative gradient-card shadow-card rounded-3xl p-6 lg:p-8 hover-lift">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="gradient-cta text-white px-4 lg:px-6 py-2 font-semibold shadow-hero text-sm lg:text-base">
                <Star className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                Most Popular
              </Badge>
            </div>

            <div className="text-center space-y-4 lg:space-y-6 pt-4">
              <div className="space-y-2">
                <h3 className="font-h3 lg:font-h2 text-foreground">Monthly Plan</h3>
                <p className="text-muted-foreground text-sm lg:text-base">Everything you need to automate</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">Rs. 9,999</span>
                  <span className="font-body text-muted-foreground">/month</span>
                </div>
                <p className="font-small text-muted-foreground">Billed monthly, cancel anytime</p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                {monthlyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <Check className="h-4 w-4 lg:h-5 lg:w-5 text-whatsapp-green flex-shrink-0" />
                    <span className="font-body text-foreground text-left text-sm lg:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full animate-pulse-custom"
                  onClick={() => navigate('/contact')}
                >
                  <Users className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-card shadow-card rounded-3xl p-6 lg:p-8 hover-lift">
            <div className="text-center space-y-4 lg:space-y-6">
              <div className="space-y-2">
                <h3 className="font-h3 lg:font-h2 text-foreground">Enterprise Plan</h3>
                <p className="text-muted-foreground text-sm lg:text-base">Custom solutions for scale</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">Contact Us</span>
                </div>
                <p className="font-small text-muted-foreground">Custom pricing based on needs</p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 lg:h-5 lg:w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left text-sm lg:text-base">Everything in Monthly Plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 lg:h-5 lg:w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left text-sm lg:text-base">Custom integrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 lg:h-5 lg:w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left text-sm lg:text-base">Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 lg:h-5 lg:w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left text-sm lg:text-base">Custom AI training</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 lg:h-5 lg:w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left text-sm lg:text-base">White-label solution</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 lg:h-5 lg:w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left text-sm lg:text-base">Dedicated infrastructure</span>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full"
                  onClick={() => navigate('/contact')}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* One Time Setup Cost Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-6 lg:p-8 mb-16">
          <div className="text-center space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <h3 className="font-h3 lg:font-h2 text-blue-800">⚙️ One Time Setup Cost</h3>
              <p className="text-blue-700 font-medium text-lg lg:text-xl">Rs. 49,999 (One-time payment)</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-3xl mx-auto">
              {implementationFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/70 p-3 rounded-xl">
                  <Check className="h-4 w-4 lg:h-5 lg:w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="text-blue-800 font-medium text-sm lg:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="gradient-cta rounded-3xl p-6 lg:p-8 text-center section-content-gap text-white">
          <div className="space-y-2 lg:space-y-4 mb-8">
            <h3 className="font-h3 lg:font-h2 text-white">
              Ready to 10X Your Business Growth?
            </h3>
            <p className="font-body lg:font-body-lg text-white/90">
              Join 500+ Pakistani businesses already automating their success
            </p>
          </div>
          
          <a href="/contact">
            <Button variant="hero" size="xl" className="mx-auto bg-white text-whatsapp-green hover:bg-white/90 shadow-2xl mb-6">
              <Zap className="mr-2 h-5 w-5 lg:h-6 lg:w-6" />
              Book Free Demo
            </Button>
          </a>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 text-white/90 text-xs lg:text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-3 w-3 lg:h-4 lg:w-4" />
              <span>Setup in 24-48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-3 w-3 lg:h-4 lg:w-4" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-3 w-3 lg:h-4 lg:w-4" />
              <span>No contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;