import { useState } from "react";
import { ShoppingBag, Zap, GraduationCap, Home, Heart, Store } from "lucide-react";

const IndustrySolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      icon: ShoppingBag,
      name: "E-Commerce",
      title: "Recover Abandoned Carts",
      scenario: [
        { type: "trigger", text: "Cart abandoned → WhatsApp triggers" },
        { type: "bot", text: "Salam! Apka order pending hai. 10% discount? 🛒" },
        { type: "customer", text: "Haan discount do" },
        { type: "bot", text: "Code SAVE10 use karein. Order complete karein? ✅" },
        { type: "result", text: "Sale completed + Customer retained" }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      name: "Solar Companies",
      title: "Qualify & Book Surveys",
      scenario: [
        { type: "trigger", text: "Solar inquiry → Auto qualification" },
        { type: "bot", text: "Ghar ka size kitna hai? Bijli ka bill kitna ata hai?" },
        { type: "customer", text: "10 marla, 15000 ka bill" },
        { type: "bot", text: "8KW system perfect! Free survey book karein? 📞" },
        { type: "result", text: "Qualified lead + Survey booked" }
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-h1 text-foreground">
            Built For Every
            <span className="block bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">
              Pakistani Business
            </span>
          </h2>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === index
                  ? 'bg-whatsapp-green text-white shadow-hero'
                  : 'bg-gray-100 text-gray-600 hover:bg-whatsapp-green/10 hover:text-whatsapp-green'
              }`}
            >
              <industry.icon className="h-5 w-5" />
              {industry.name}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-r ${industries[activeTab].color} rounded-3xl p-1 shadow-2xl`}>
            <div className="bg-white rounded-3xl p-8">
              <h3 className="font-h2 text-center mb-8">{industries[activeTab].title}</h3>
              
              <div className="space-y-6">
                {industries[activeTab].scenario.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-whatsapp-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">
                        {step.type === 'bot' ? 'AI' : '👤'}
                      </span>
                    </div>
                    <div className="flex-1 p-4 rounded-2xl bg-whatsapp-green/10 border border-whatsapp-green/20">
                      <p className="font-medium text-whatsapp-green">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;