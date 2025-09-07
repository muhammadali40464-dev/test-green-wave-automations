import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Zap, CheckCircle, Clock, Shield } from "lucide-react";

const FinalCTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="section-padding bg-gradient-to-b from-whatsapp-green to-whatsapp-dark text-white">
      <div className="container-width">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="font-hero text-white">
              Ready to Transform Your
              <span className="block">
                Customer Communication?
              </span>
            </h2>
            
            <p className="font-body-lg text-white/90 max-w-3xl mx-auto">
              Start automating WhatsApp messages today and never lose another customer to slow responses. 
              Join 500+ Pakistani businesses already growing with WhatBot.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="bg-white text-whatsapp-green hover:bg-white/90 hover:scale-105 shadow-2xl"
              onClick={() => navigate('/contact')}
            >
              <Zap className="mr-3 h-6 w-6" />
              Book Free Demo
            </Button>
            
            <Button 
              variant="secondary" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-whatsapp-green"
              onClick={() => navigate('/contact')}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Setup in 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">No contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Cancel anytime</span>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80">Businesses Trust Us</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">10M+</div>
                <div className="text-white/80">Messages Automated</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/80">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Final Push */}
          <div className="space-y-4">
            <p className="font-body text-white/90">
              Don't let your competitors get ahead. Every day you wait is revenue you're losing.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Limited Setup Slots Available This Month
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;