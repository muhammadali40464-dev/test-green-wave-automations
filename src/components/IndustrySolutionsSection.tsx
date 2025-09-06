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
    },
    {
      icon: GraduationCap,
      name: "Visa Consultancy",
      title: "Lead Qualification & Appointments",
      scenario: [
        { type: "trigger", text: "Visa inquiry → Qualification starts" },
        { type: "bot", text: "Konsa country? Education level? Budget kitna hai?" },
        { type: "customer", text: "Canada, Bachelor's, 30 lakh budget" },
        { type: "bot", text: "Perfect match! Free consultation book karein? 🎓" },
        { type: "result", text: "Qualified lead + Appointment scheduled" }
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Home,
      name: "Real Estate",
      title: "Property Leads & Tours",
      scenario: [
        { type: "trigger", text: "Property inquiry → Lead capture" },
        { type: "bot", text: "Budget range? Location preference? Family size?" },
        { type: "customer", text: "1-2 crore, DHA, 4 members" },
        { type: "bot", text: "5 perfect options! Site visit book karein? 🏠" },
        { type: "result", text: "Hot lead + Site visit booked" }
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Heart,
      name: "Healthcare",
      title: "Appointment Booking",
      scenario: [
        { type: "trigger", text: "Health query → Symptom assessment" },
        { type: "bot", text: "Problem kya hai? Kab se? Emergency hai?" },
        { type: "customer", text: "Chest pain, 2 days, urgent" },
        { type: "bot", text: "Today 3 PM slot available. Confirm? 🏥" },
        { type: "result", text: "Appointment booked + Medical history saved" }
      ],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Store,
      name: "Retail Stores",
      title: "Product Inquiries & Sales",
      scenario: [
        { type: "trigger", text: "Product interest → Sales process" },
        { type: "bot", text: "Size? Color preference? Budget range?" },
        { type: "customer", text: "Medium, black, 5000 tak" },
        { type: "bot", text: "Perfect match! Home delivery? COD available 📦" },
        { type: "result", text: "Sale confirmed + Order processed" }
      ],
      color: "from-orange-500 to-red-500"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-16">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex flex-col items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-2xl font-medium transition-all hover-lift ${
                activeTab === index
                  ? 'bg-whatsapp-green text-white shadow-hero'
                  : 'bg-white text-gray-600 hover:bg-whatsapp-green/10 hover:text-whatsapp-green shadow-md'
              }`}
            >
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center ${
                activeTab === index 
                  ? 'bg-white/20' 
                  : 'bg-whatsapp-green/10'
              }`}>
                <industry.icon className="h-5 w-5 lg:h-6 lg:w-6" />
              </div>
              <span className="text-xs lg:text-sm text-center">{industry.name}</span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className={`bg-gradient-to-r ${industries[activeTab].color} rounded-3xl p-1 shadow-2xl`}>
            <div className="bg-white rounded-3xl p-6 lg:p-8">
              <h3 className="font-h3 lg:font-h2 text-center mb-8">{industries[activeTab].title}</h3>
              
              <div className="space-y-4 lg:space-y-6">
                {industries[activeTab].scenario.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 lg:gap-4">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-whatsapp-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">
                        {step.type === 'bot' ? 'AI' : '👤'}
                      </span>
                    </div>
                    <div className="flex-1 p-3 lg:p-4 rounded-2xl bg-whatsapp-green/10 border border-whatsapp-green/20">
                      <p className="font-body text-whatsapp-green text-sm lg:text-base">{step.text}</p>
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