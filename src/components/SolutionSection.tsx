import { Zap, Brain, MessageCircle } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "WhatsApp API",
      subtitle: "Official Business API",
      description: "Direct integration with WhatsApp Business API. Get the verified green tick and unlimited messaging capabilities."
    },
    {
      icon: Brain,
      title: "AI Integration", 
      subtitle: "ChatGPT Powered",
      description: "Advanced AI understands context and provides natural, helpful responses that feel human-like to your customers."
    },
    {
      icon: Zap,
      title: "Multi-Channel",
      subtitle: "Instagram + Facebook",
      description: "Unified inbox for WhatsApp, Instagram DMs, and Facebook messages. Manage all conversations in one place."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-h1 text-foreground">
            One Platform. All Channels.
            <span className="block text-whatsapp-green">
              Zero Coding Required.
            </span>
          </h2>
          
          <p className="font-body-lg text-muted-foreground max-w-3xl mx-auto">
            Stop losing customers to slow responses. Our AI-powered platform handles all your customer conversations automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card shadow-card rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-whatsapp-green to-whatsapp-teal rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-h3 text-foreground">
                  {feature.title}
                </h3>
                
                <div className="inline-block bg-whatsapp-green/10 text-whatsapp-green px-3 py-1 rounded-full font-medium text-sm">
                  {feature.subtitle}
                </div>
                
                <p className="font-body text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Visual */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-whatsapp-green/5 to-whatsapp-dark/5 rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-whatsapp-green rounded-xl flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-medium">WhatsApp Business</h4>
                <p className="text-sm text-muted-foreground">Official API Integration</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-whatsapp-green to-whatsapp-dark rounded-2xl flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-medium text-lg">WhatBot Platform</h4>
                <p className="text-sm text-whatsapp-green font-medium">AI-Powered Automation</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-whatsapp-dark rounded-xl flex items-center justify-center mx-auto">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-medium">ChatGPT AI</h4>
                <p className="text-sm text-muted-foreground">Smart Responses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;