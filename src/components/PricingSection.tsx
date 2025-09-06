import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const monthlyFeatures = [
    "WhatsApp Business API",
    "1000+ contacts included",
    "AI ChatGPT integration", 
    "Instagram & Facebook",
    "Drag & drop builder",
    "24/7 support"
  ];

  const setupFeatures = [
    "Complete bot setup",
    "Custom flow design",
    "Team training included",
    "30-day support",
    "Go-live guarantee",
    "Done-for-you service"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-h1 text-foreground">
            Simple, Transparent Pricing
          </h2>
          
          <p className="font-body-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Monthly Plan */}
          <div className="relative bg-card shadow-card rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="font-h2 text-foreground">Monthly Plan</h3>
                <p className="text-muted-foreground">Everything you need to automate</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-hero text-whatsapp-green">PKR 9,999</span>
                  <span className="font-body text-muted-foreground">/month</span>
                </div>
                <p className="font-small text-muted-foreground">Billed monthly, cancel anytime</p>
              </div>

              <div className="space-y-4">
                {monthlyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                    <span className="font-body text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="secondary" size="lg" className="w-full">
                Start Monthly Plan
              </Button>
            </div>
          </div>

          {/* Setup Service - Featured */}
          <div className="relative bg-gradient-to-b from-whatsapp-green to-whatsapp-dark shadow-hero rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-white text-whatsapp-green px-6 py-2 font-semibold">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </Badge>
            </div>

            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="font-h2 text-white">Setup Service</h3>
                <p className="text-white/90">We do everything for you</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-hero text-white">PKR 49,999</span>
                  <span className="font-body text-white/80">once</span>
                </div>
                <p className="font-small text-white/80">One-time setup fee</p>
              </div>

              <div className="space-y-4">
                {setupFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="font-body text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="w-full bg-white text-whatsapp-green hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                Get Setup Service
              </Button>
            </div>
          </div>
        </div>

        {/* Best Value Offer */}
        <div className="bg-gradient-to-r from-whatsapp-green/10 to-whatsapp-dark/10 rounded-2xl p-8 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="font-h2 text-foreground">
              Most businesses choose both
            </h3>
            <p className="font-body text-muted-foreground">
              Get setup service + monthly plan for the best results
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-lg">
            <span className="font-medium text-muted-foreground line-through">PKR 59,998</span>
            <span className="font-bold text-whatsapp-green text-2xl">PKR 54,999</span>
            <Badge className="bg-red-500 text-white">Save PKR 5,000</Badge>
          </div>
          
          <Button variant="hero" size="xl" className="mx-auto">
            <Zap className="mr-2 h-6 w-6" />
            Get Both - Start Today
          </Button>
          
          <p className="font-small text-muted-foreground">
            Setup completed in 24-48 hours • No contracts • Full support included
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;