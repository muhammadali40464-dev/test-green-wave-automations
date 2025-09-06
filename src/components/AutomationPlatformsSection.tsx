import { MessageCircle, Instagram, Facebook, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const AutomationPlatformsSection = () => {
  const platforms = [
    {
      name: "WhatsApp Automation",
      icon: MessageCircle,
      color: "from-whatsapp-green to-green-600",
      bgColor: "bg-gradient-to-br from-whatsapp-green/5 to-green-50",
      features: [
        "Inbox Chat Automation",
        "Unlimited Contacts",
        "Unlimited Automations/Flows",
        "Unlimited Agent Dashboards",
        "Use Chat Flows with Buttons",
        "Integrate with ChatGPT, Gemini or Claude AI",
        "Auto Reply with menu options",
        "Keyword triggers",
        "Connect Google Sheets & Calendar",
        "Automate Marketing",
        "Send Forms & Discounts",
        "Message scheduling",
        "Send Marketing Broadcast",
        "Send Service Broadcast"
      ]
    },
    {
      name: "Instagram Automation", 
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
      features: [
        "Comment to DM Automation",
        "Auto Reply Comments - Keywords or intent",
        "Inbox Chat Automation", 
        "Unlimited Contacts",
        "Unlimited Automations/Flows",
        "Use Chat Flows with Buttons",
        "Integrate with ChatGPT, Gemini or Claude AI",
        "Auto Reply with menu options",
        "Keyword triggers",
        "Automate Marketing",
        "Message scheduling",
        "Send drip Campaign"
      ]
    },
    {
      name: "Facebook Automation",
      icon: Facebook,
      color: "from-blue-600 to-blue-800", 
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      features: [
        "Comment to DM Automation",
        "Auto Reply Comments - Keywords or intent",
        "Inbox Chat Automation",
        "Unlimited Contacts", 
        "Unlimited Automations/Flows",
        "Use Chat Flows with Buttons",
        "Integrate with ChatGPT, Gemini or Claude AI",
        "Auto Reply with menu options",
        "Keyword triggers",
        "Automate Marketing",
        "Message scheduling",
        "Send drip Campaign"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-width">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-6 py-3 rounded-full font-medium">
            <Zap className="h-5 w-5" />
            Multi-Platform Automation
          </div>
          
          <h2 className="font-h1 text-foreground">
            Automate Across All
            <span className="block bg-gradient-to-r from-whatsapp-green via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Social Platforms
            </span>
          </h2>
          
          <p className="font-body-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with customers wherever they are. Our unified platform manages WhatsApp, Instagram, 
            and Facebook automation from one powerful dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            
            return (
              <div 
                key={index} 
                className={`${platform.bgColor} rounded-3xl p-6 lg:p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/50`}
              >
                <div className="text-center space-y-6">
                  {/* Icon and Title */}
                  <div className="space-y-4">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto shadow-lg`}>
                      <IconComponent className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <h3 className="font-h3 lg:font-h2 text-gray-800">{platform.name}</h3>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 text-left">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-whatsapp-green to-green-600 mt-2 flex-shrink-0"></div>
                        <span className="font-body text-gray-700 text-sm lg:text-base leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center section-content-gap">
          <div className="space-y-4 lg:space-y-6 mb-12">
            <h3 className="font-h3 lg:font-h2 text-foreground">
              Ready to Automate All Your Social Platforms?
            </h3>
            <p className="font-body lg:font-body-lg text-muted-foreground max-w-2xl mx-auto">
              Start with one platform or get them all. Our expert team will set up your automation 
              flows across WhatsApp, Instagram, and Facebook in just 24-48 hours.
            </p>
          </div>
          
          <a href="/contact">
            <Button variant="hero" size="xl" className="animate-pulse-custom shadow-hero">
              <Zap className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
              Get All Platforms Setup
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AutomationPlatformsSection;