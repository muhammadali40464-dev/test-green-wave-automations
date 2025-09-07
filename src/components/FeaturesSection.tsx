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
        <div className="text-center space-y-6 mb-16 lg:mb-20">
          <h2 className="font-h1 text-foreground">
            Powerful Features That 
            <span className="block text-whatsapp-green mt-2">
              Drive Real Results
            </span>
          </h2>
          
          <p className="font-body-lg text-muted-foreground mx-auto">
            Everything you need to transform your customer communication and boost sales
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 lg:space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-whatsapp-green to-whatsapp-dark rounded-2xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-h2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-body text-whatsapp-green font-medium mt-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <p className="font-body-lg text-muted-foreground leading-relaxed">
                  {feature.details}
                </p>
                
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-3 rounded-full font-medium text-sm sm:text-base">
                    <div className="w-2 h-2 bg-whatsapp-green rounded-full"></div>
                    Easy Setup
                  </div>
                  <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-3 rounded-full font-medium text-sm sm:text-base">
                    <div className="w-2 h-2 bg-whatsapp-green rounded-full"></div>
                    24/7 Support
                  </div>
                  <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-3 rounded-full font-medium text-sm sm:text-base">
                    <div className="w-2 h-2 bg-whatsapp-green rounded-full"></div>
                    No Coding
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={`relative mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-whatsapp-green/5 to-whatsapp-dark/5 rounded-3xl p-8 sm:p-12 text-center">
                  <div className="text-6xl sm:text-7xl lg:text-8xl mb-6">{feature.image}</div>
                  <div className="space-y-4">
                    <div className="bg-white shadow-card rounded-2xl p-6 sm:p-8">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-whatsapp-green rounded-full flex items-center justify-center">
                          <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <div className="text-left flex-1">
                          <h4 className="font-medium text-foreground text-base sm:text-lg">{feature.title}</h4>
                          <p className="text-sm sm:text-base text-muted-foreground">Active</p>
                        </div>
                      </div>
                      <div className="text-left space-y-3">
                        <div className="h-3 bg-whatsapp-green/20 rounded-full">
                          <div className={`h-3 bg-whatsapp-green rounded-full transition-all duration-1000`} style={{width: `${85 + index * 5}%`}}></div>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground">Performance: {85 + index * 5}%</p>
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