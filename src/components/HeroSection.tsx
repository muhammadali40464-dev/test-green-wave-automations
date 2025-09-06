import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, MessageCircle, Users, TrendingUp, CheckCircle, Star } from "lucide-react";

const HeroSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  // Conversation scenarios
  const conversations = [
    {
      id: 'visa',
      title: 'Visa Consultancy',
      messages: [
        { id: 1, type: 'incoming', sender: 'Hassan', time: '2:14 PM', text: 'Assalam o alaikum, Canada study visa ke liye kya process hai?', avatar: '👨‍💼' },
        { id: 2, type: 'outgoing', sender: 'TheChatFlow', time: '2:14 PM', text: 'Walaikum salam Hassan bhai!\nCanada study visa ke liye ye documents chahiye:\n📚 IELTS 6.5+\n💰 15 lakh bank statement\n🎓 University admission letter\n🆓 Free consultation book karein?', verified: true },
        { id: 3, type: 'incoming', sender: 'Hassan', time: '2:15 PM', text: 'Haan bhai, appointment book karo', avatar: '👨‍💼' },
        { id: 4, type: 'outgoing', sender: 'TheChatFlow', time: '2:15 PM', text: '✅ Perfect! Available slots:\n📅 Tomorrow 2 PM - Office visit\n📞 Today 6 PM - Video call\nKaunsa prefer karenge?', verified: true },
        { id: 5, type: 'incoming', sender: 'Hassan', time: '2:15 PM', text: 'Video call today', avatar: '👨‍💼' },
        { id: 6, type: 'outgoing', sender: 'TheChatFlow', time: '2:15 PM', text: '✅ Confirmed!\n📹 Zoom link: bit.ly/consultation123\n⏰ 6 PM sharp\n📋 Document checklist WhatsApp kar diya\n💬 Any questions, just ask!', verified: true }
      ]
    },
    {
      id: 'solar',
      title: 'Solar Business',
      messages: [
        { id: 1, type: 'incoming', sender: 'Ayesha', time: '3:22 PM', text: 'Bhai solar system ka rate kya hai? Bijli ka bill 30K ata hai', avatar: '👩‍💼' },
        { id: 2, type: 'outgoing', sender: 'TheChatFlow', time: '3:22 PM', text: 'Salam Ayesha! 30K bill ke liye 12KW system perfect:\n⚡ System price: 14 lakh\n💰 Monthly saving: 25K+\n🏠 Free site survey + quote\n📞 Book karein?', verified: true },
        { id: 3, type: 'incoming', sender: 'Ayesha', time: '3:23 PM', text: 'Survey book karo, DHA Phase 6 mein hun', avatar: '👩‍💼' },
        { id: 4, type: 'outgoing', sender: 'TheChatFlow', time: '3:23 PM', text: '✅ Survey booked!\n👷 Engineer: Ahmed Khan\n📅 Tomorrow 11 AM\n📍 DHA Phase 6 confirmed\n📞 Contact: +92-XXX-XXXXXXX\n💡 Installation guide PDF send kar diya!', verified: true }
      ]
    }
  ];

  const [currentConversation, setCurrentConversation] = useState(0);

  useEffect(() => {
    const conversation = conversations[currentConversation];
    let messageIndex = 0;
    setVisibleMessages([]);

    const showNextMessage = () => {
      if (messageIndex < conversation.messages.length) {
        const message = conversation.messages[messageIndex];
        
        if (message.type === 'outgoing') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, message.id]);
            messageIndex++;
            setTimeout(showNextMessage, 1500);
          }, 2000);
        } else {
          setVisibleMessages(prev => [...prev, message.id]);
          messageIndex++;
          setTimeout(showNextMessage, 1000);
        }
      } else {
        // Switch to next conversation after delay
        setTimeout(() => {
          setCurrentConversation(prev => (prev + 1) % conversations.length);
        }, 3000);
      }
    };

    setTimeout(showNextMessage, 1000);
  }, [currentConversation]);

  return (
    <section className="relative min-h-screen flex items-center gradient-background overflow-hidden">
      {/* Meta Business Partner Badge */}
      <div className="absolute top-24 right-8 z-10 hidden lg:block">
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/fad311d9-4d57-4024-ae73-23c50c0b157a.png" 
              alt="Meta Business Partner" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1 text-center font-medium">Official Partner</p>
        </Card>
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <h1 className="font-h1 text-foreground leading-tight">
                Transform Every Chat Into 
                <span className="block bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">
                  Revenue
                </span>
                <span className="block text-whatsapp-green font-medium text-3xl md:text-4xl">
                  With AI Automation
                </span>
              </h1>
              
              <p className="font-body-lg text-muted-foreground max-w-lg">
                Watch conversations flow automatically across WhatsApp, Instagram & Facebook
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="shadow-hero group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Live Demo
              </Button>
              <Button variant="secondary" size="lg">
                Start Free Trial
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-whatsapp-green mr-2" />
                  <span className="font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Pakistani Businesses</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MessageCircle className="h-5 w-5 text-whatsapp-green mr-2" />
                  <span className="font-bold text-foreground">10M+</span>
                </div>
                <p className="text-sm text-muted-foreground">Messages</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-whatsapp-green mr-2" />
                  <span className="font-bold text-foreground">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-5 w-5 text-whatsapp-green mr-2" />
                  <span className="font-bold text-foreground">Meta</span>
                </div>
                <p className="text-sm text-muted-foreground">Partner</p>
              </div>
            </div>
          </div>

          {/* Right Side - WhatsApp Interface */}
          <div className="flex justify-center lg:justify-end">
            <div className="whatsapp-interface bg-[#E5DDD5] rounded-2xl shadow-2xl w-[380px] h-[600px] overflow-hidden relative">
              
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-whatsapp-green rounded-full flex items-center justify-center text-white font-bold">
                  TC
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">TheChatFlow</h3>
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <p className="text-xs text-green-100">🟢 Online • Last seen just now</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 space-y-3 h-[520px] overflow-y-auto">
                {conversations[currentConversation].messages.map((message) => (
                  <div
                    key={message.id}
                    className={`transition-all duration-500 ${
                      visibleMessages.includes(message.id) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {message.type === 'incoming' ? (
                      <div className="flex items-start gap-2 mb-4">
                        <div className="text-2xl">{message.avatar}</div>
                        <div>
                          <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm max-w-[250px]">
                            <p className="text-sm text-gray-800 whitespace-pre-wrap">{message.text}</p>
                            <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-end mb-4">
                        <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-md p-3 shadow-sm max-w-[250px]">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-[#075E54]">{message.sender}</span>
                            {message.verified && <CheckCircle className="h-3 w-3 text-blue-500" />}
                          </div>
                          <p className="text-sm text-gray-800 whitespace-pre-wrap">{message.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <p className="text-xs text-gray-600">{message.time}</p>
                            <div className="flex">
                              <CheckCircle className="h-3 w-3 text-blue-500" />
                              <CheckCircle className="h-3 w-3 text-blue-500 -ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="text-2xl">🤖</div>
                    <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">TheChatFlow is typing</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Conversation Indicator */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <p className="text-xs font-medium text-gray-700">
                  {conversations[currentConversation].title} Demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-whatsapp-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-whatsapp-dark/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;