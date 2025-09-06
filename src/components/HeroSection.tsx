import { Button } from "@/components/ui/button";
import { Play, CheckCircle, MessageCircle, Zap } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-mockup.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const demos = [
    {
      title: "Solar Business",
      messages: [
        { type: "customer", text: "Bhai solar system ka rate kya hai?" },
        { type: "bot", text: "5KW system sirf 8 lakh! Free site survey book karein? 📞" },
        { type: "customer", text: "Haan book karo" },
        { type: "bot", text: "Perfect! Engineer kal 2 PM ayega ✅" }
      ]
    },
    {
      title: "Visa Consultancy", 
      messages: [
        { type: "customer", text: "Canada visa requirements kya hain?" },
        { type: "bot", text: "IELTS 6.5, 15 lakh bank statement. Free consultation? 🎓" },
        { type: "customer", text: "Appointment book karo" },
        { type: "bot", text: "Slot booked! Tomorrow 3 PM ✅" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev >= demos[currentDemo].messages.length - 1) {
          setTimeout(() => {
            setCurrentDemo((current) => (current + 1) % demos.length);
            setMessageIndex(0);
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [currentDemo]);

  return (
    <section className="section-padding gradient-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="gradient-cta text-white px-6 py-3 rounded-full font-bold text-xl shadow-hero animate-float">
                <MessageCircle className="inline-block mr-2 h-6 w-6" />
                TheChatFlow
              </div>
            </div>

            {/* Hero Headline */}
            <div className="space-y-6">
              <h1 className="font-hero text-foreground">
                Transform Every Chat Into
                <span className="block bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">
                  Revenue With AI Automation
                </span>
              </h1>
              
              <p className="font-body-lg text-muted-foreground max-w-2xl lg:max-w-none">
                Watch your business conversations flow automatically across 
                <strong className="text-whatsapp-green"> WhatsApp, Instagram & Facebook</strong> - 24/7, in perfect Pakistani style
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group animate-pulse-custom">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Live Demo
              </Button>
              
              <Button variant="secondary" size="lg" className="group hover-scale">
                <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Start Free Trial
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 space-y-4">
              <p className="font-small text-muted-foreground">
                Trusted by <strong className="text-whatsapp-green">500+</strong> Pakistani Businesses
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2 animate-slide-up">
                  <CheckCircle className="h-4 w-4 text-whatsapp-green" />
                  10M+ Messages Automated
                </div>
                <div className="flex items-center gap-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <CheckCircle className="h-4 w-4 text-whatsapp-green" />
                  95% Customer Satisfaction
                </div>
                <div className="flex items-center gap-2 animate-slide-up" style={{animationDelay: '0.4s'}}>
                  <CheckCircle className="h-4 w-4 text-whatsapp-green" />
                  24/7 Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Chat Demo */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-hero p-6 max-w-sm mx-auto hover-lift">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-whatsapp-green rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{demos[currentDemo].title}</h3>
                  <span className="text-xs text-whatsapp-green">● Online</span>
                </div>
              </div>

              {/* Animated Messages */}
              <div className="space-y-3 pt-4 h-64 overflow-hidden">
                {demos[currentDemo].messages.slice(0, messageIndex + 1).map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                  >
                    <div 
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.type === 'customer' 
                          ? 'bg-whatsapp-green text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {messageIndex < demos[currentDemo].messages.length - 1 && (
                  <div className="flex justify-start animate-pulse">
                    <div className="bg-gray-100 px-3 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-whatsapp-green/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-whatsapp-teal/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
            
            {/* Flow lines */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-whatsapp-green/20 to-transparent opacity-50 rounded-full animate-pulse-custom"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;