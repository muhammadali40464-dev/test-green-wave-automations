import { MousePointer, Brain, Target, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MousePointer,
      title: "No-Code Chatbot Builder",
      description: "Design conversations with simple drag & drop",
      details: "Create complex chat flows without any technical knowledge. Our visual builder makes it easy to design perfect customer journeys.",
      image: "🎯"
    },
    {
      icon: Brain,
      title: "AI-Powered Responses",
      description: "ChatGPT integration for natural conversations", 
      details: "Advanced AI understands context and provides human-like responses that engage customers and drive conversions.",
      image: "🤖"
    },
    {
      icon: Target,
      title: "Lead Capture & Qualification",
      description: "Convert chats into qualified sales opportunities",
      details: "Automatically identify hot leads, collect contact information, and score prospects based on their engagement level.",
      image: "📊"
    },
    {
      icon: Clock,
      title: "24/7 Automated Support",
      description: "Never miss a customer query, even while sleeping",
      details: "Your AI assistant works around the clock, handling customer inquiries and booking appointments while you focus on growing your business.",
      image: "🌙"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-h1 text-foreground">
            Powerful Features That 
            <span className="block text-whatsapp-green">
              Drive Real Results
            </span>
          </h2>
          
          <p className="font-body-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your customer communication and boost sales
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-whatsapp-green to-whatsapp-dark rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-h2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-body text-whatsapp-green font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <p className="font-body-lg text-muted-foreground leading-relaxed">
                  {feature.details}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-2 rounded-full font-medium">
                    <div className="w-2 h-2 bg-whatsapp-green rounded-full"></div>
                    Easy Setup
                  </div>
                  <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-2 rounded-full font-medium">
                    <div className="w-2 h-2 bg-whatsapp-green rounded-full"></div>
                    24/7 Support
                  </div>
                  <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-2 rounded-full font-medium">
                    <div className="w-2 h-2 bg-whatsapp-green rounded-full"></div>
                    No Coding
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-whatsapp-green/5 to-whatsapp-dark/5 rounded-3xl p-12 text-center">
                  <div className="text-8xl mb-6">{feature.image}</div>
                  <div className="space-y-4">
                    <div className="bg-white shadow-card rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-whatsapp-green rounded-full flex items-center justify-center">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">Active</p>
                        </div>
                      </div>
                      <div className="text-left space-y-2">
                        <div className="h-2 bg-whatsapp-green/20 rounded-full">
                          <div className={`h-2 bg-whatsapp-green rounded-full`} style={{width: `${85 + index * 5}%`}}></div>
                        </div>
                        <p className="text-sm text-muted-foreground">Performance: {85 + index * 5}%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-whatsapp-green/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-whatsapp-teal/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;