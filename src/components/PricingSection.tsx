import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, AlertCircle } from "lucide-react";

const PricingSection = () => {
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
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Monthly Plan */}
          <div className="relative gradient-card shadow-card rounded-3xl p-8 hover-lift">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="gradient-cta text-white px-6 py-2 font-semibold shadow-hero">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </Badge>
            </div>

            <div className="text-center space-y-6 pt-4">
              <div className="space-y-2">
                <h3 className="font-h2 text-foreground">Monthly Plan</h3>
                <p className="text-muted-foreground">Everything you need to automate</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-hero bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">Rs. 9,999</span>
                  <span className="font-body text-muted-foreground">/month</span>
                </div>
                <p className="font-small text-muted-foreground">Billed monthly, cancel anytime</p>
              </div>

              <div className="space-y-4">
                {monthlyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                    <span className="font-body text-foreground text-left">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="w-full animate-pulse-custom">
                <Zap className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-card shadow-card rounded-3xl p-8 hover-lift">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="font-h2 text-foreground">Enterprise Plan</h3>
                <p className="text-muted-foreground">Custom solutions for scale</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-hero text-foreground">Contact Us</span>
                </div>
                <p className="font-small text-muted-foreground">Custom pricing based on needs</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left">Everything in Monthly Plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left">Custom integrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left">Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left">Custom AI training</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left">White-label solution</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                  <span className="font-body text-foreground text-left">Dedicated infrastructure</span>
                </div>
              </div>

              <Button variant="secondary" size="lg" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Mandatory Implementation Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" />
            <div className="space-y-4">
              <div>
                <h3 className="font-h3 text-orange-800 mb-2">📋 MANDATORY FOR ALL CUSTOMERS</h3>
                <p className="text-orange-700 font-medium text-lg">Implementation & Setup: Rs. 49,999 (One-time)</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {implementationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-whatsapp-green flex-shrink-0" />
                    <span className="text-orange-800 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/50 rounded-lg p-4 border border-orange-200">
                <p className="text-orange-800 font-semibold">💡 <strong>Total to start:</strong> Rs. 59,998 (Rs. 9,999 monthly + Rs. 49,999 setup)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="gradient-cta rounded-3xl p-8 text-center space-y-6 text-white">
          <div className="space-y-2">
            <h3 className="font-h2 text-white">
              Ready to 10X Your Business Growth?
            </h3>
            <p className="font-body-lg text-white/90">
              Join 500+ Pakistani businesses already automating their success
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-lg">
            <span className="font-medium text-white/80 line-through">Rs. 119,996</span>
            <span className="font-bold text-white text-2xl">Rs. 59,998</span>
            <Badge className="bg-red-500 text-white">Save Setup Costs</Badge>
          </div>
          
          <Button variant="hero" size="xl" className="mx-auto bg-white text-whatsapp-green hover:bg-white/90 shadow-2xl">
            <Zap className="mr-2 h-6 w-6" />
            Start Your Automation Journey
          </Button>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>Setup in 24-48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>No contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;