import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-whatsapp-green text-white px-6 py-2 rounded-full font-bold text-xl">
                WhatBot Pakistan
              </div>
            </div>

            {/* Hero Headline */}
            <div className="space-y-4">
              <h1 className="font-hero text-foreground">
                Automate Your WhatsApp Business
                <span className="block text-whatsapp-green">
                  With AI-Powered Chat Solutions
                </span>
              </h1>
              
              <p className="font-body-lg text-muted-foreground max-w-2xl">
                Transform customer conversations into sales with 
                Pakistan's #1 WhatsApp automation platform
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              
              <Button variant="secondary" size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 space-y-4">
              <p className="font-small text-muted-foreground">
                Trusted by 500+ Pakistani Businesses
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-whatsapp-green" />
                  10M+ Messages Automated
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-whatsapp-green" />
                  99.9% Uptime
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-whatsapp-green" />
                  24/7 Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src={whatsappMockup}
                alt="WhatsApp Business API automation interface showing AI-powered customer conversations"
                className="w-full h-auto shadow-hero rounded-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-whatsapp-green/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-whatsapp-teal/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;