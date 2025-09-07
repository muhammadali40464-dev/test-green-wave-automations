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
        <div className="text-center space-y-6 mb-16 lg:mb-20">
          <h2 className="font-h1 text-foreground">
            One Platform. All Channels.
            <span className="block text-whatsapp-green mt-2">
              Zero Coding Required.
            </span>
          </h2>
          
          <p className="font-body-lg text-muted-foreground mx-auto">
            Stop losing customers to slow responses. Our AI-powered platform handles all your customer conversations automatically.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card shadow-card rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-whatsapp-green to-whatsapp-teal rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h3 className="font-h3 text-foreground">
                  {feature.title}
                </h3>
                
                <div className="inline-block bg-whatsapp-green/10 text-whatsapp-green px-4 py-2 rounded-full font-medium text-sm sm:text-base">
                  {feature.subtitle}
                </div>
                
                <p className="font-body text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;