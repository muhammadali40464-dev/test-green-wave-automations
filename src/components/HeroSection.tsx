import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, MessageCircle, Users, CheckCircle, Star, Video, Phone, MoreVertical } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  // More human-like conversation scenarios with minimal emojis
  const conversations = [
    {
      id: 'visa',
      title: 'Visa Consultancy',
      color: '#FF6B6B',
      messages: [
        { 
          id: 1, 
          type: 'incoming', 
          sender: 'Hassan Ahmed', 
          time: '2:14 PM', 
          text: 'Assalam o alaikum, Canada study visa ke liye kya documents chahiye?',
          avatar: 'H',
          status: 'delivered'
        },
        { 
          id: 2, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '2:14 PM', 
          text: 'Walaikum salam Hassan!\n\nCanada study visa ke liye ye main documents hain:\n\n• IELTS 6.5 overall\n• Bank statement 15 lakh minimum\n• University admission letter\n• Academic transcripts\n\nFree consultation book karna chahenge?',
          verified: true,
          status: 'read'
        },
        { 
          id: 3, 
          type: 'incoming', 
          sender: 'Hassan Ahmed', 
          time: '2:15 PM', 
          text: 'Haan bilkul, appointment book kar dein',
          avatar: 'H',
          status: 'delivered'
        },
        { 
          id: 4, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '2:15 PM', 
          text: 'Perfect Hassan!\n\nAvailable time slots:\n\n• Tomorrow 2:00 PM - Office visit\n• Today 6:00 PM - Video call\n\nKonsa prefer karenge?',
          verified: true,
          status: 'read'
        },
        { 
          id: 5, 
          type: 'incoming', 
          sender: 'Hassan Ahmed', 
          time: '2:16 PM', 
          text: 'Video call today please',
          avatar: 'H',
          status: 'delivered'
        },
        { 
          id: 6, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '2:16 PM', 
          text: 'Confirmed!\n\nVideo call today at 6:00 PM\nZoom link: bit.ly/tcf-consultation\n\nDocument checklist aur meeting details WhatsApp kar diye hain. Any questions?',
          verified: true,
          status: 'read'
        }
      ]
    },
    {
      id: 'solar',
      title: 'Solar Business',
      color: '#4ECDC4',
      messages: [
        { 
          id: 1, 
          type: 'incoming', 
          sender: 'Ayesha Khan', 
          time: '3:22 PM', 
          text: 'Solar system ka quote chahiye. Bijli ka bill monthly 25-30k ata hai',
          avatar: 'A',
          status: 'delivered'
        },
        { 
          id: 2, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '3:22 PM', 
          text: 'Salam Ayesha!\n\n25-30K bill ke liye 10KW system perfect rahega:\n\n• System cost: 12-14 lakh\n• Monthly saving: 20-25K\n• Payback period: 2.5-3 years\n\nFree site survey book karein?',
          verified: true,
          status: 'read'
        },
        { 
          id: 3, 
          type: 'incoming', 
          sender: 'Ayesha Khan', 
          time: '3:23 PM', 
          text: 'Yes please. DHA Phase 6 mein hai location',
          avatar: 'A',
          status: 'delivered'
        },
        { 
          id: 4, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '3:23 PM', 
          text: 'Site survey scheduled!\n\nEngineer: Ahmed Khan\nDate: Tomorrow 11:00 AM\nLocation: DHA Phase 6\n\nContact details aur preparation guide send kar diya hai.',
          verified: true,
          status: 'read'
        }
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
          // Show typing indicator before TheChatFlow response
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, message.id]);
            messageIndex++;
            setTimeout(showNextMessage, 2000);
          }, 2500);
        } else {
          setVisibleMessages(prev => [...prev, message.id]);
          messageIndex++;
          setTimeout(showNextMessage, 1500);
        }
      } else {
        setTimeout(() => {
          setCurrentConversation(prev => (prev + 1) % conversations.length);
        }, 4000);
      }
    };

    setTimeout(showNextMessage, 1500);
  }, [currentConversation]);

  return (
    <>
      {/* Main Hero Section - Transform Every Chat */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-soft-green via-card to-background">
        <div className="container-width relative z-10">
          <div className="text-center space-y-8 lg:space-y-12 max-w-5xl mx-auto">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-6 py-3 rounded-full font-medium text-base sm:text-lg animate-fade-in-up">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              Official Meta Business Partner
            </div>
            
            {/* Hero Headline */}
            <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
              <h1 className="font-hero text-foreground leading-[0.95] tracking-tight">
                Transform Every Chat Into
                <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent mt-2">
                  Revenue
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-whatsapp-green leading-tight">
                With AI Automation
              </h2>
              
              <p className="font-body-lg text-muted-foreground mx-auto max-w-3xl leading-relaxed">
                Watch authentic conversations flow automatically across WhatsApp, Instagram & Facebook. 
                Trusted by 500+ Pakistani businesses to convert every message into a sales opportunity.
              </p>
            </div>

            {/* Enhanced CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center animate-fade-in-up">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-whatsapp-green hover:bg-whatsapp-dark text-white shadow-hero group hover-lift px-8 py-6 text-lg sm:text-xl font-semibold w-full sm:w-auto"
                onClick={() => navigate('/contact')}
              >
                <CheckCircle className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get Started Free
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white px-8 py-6 text-lg sm:text-xl font-semibold hover-lift w-full sm:w-auto"
              >
                <Play className="mr-3 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Enhanced Trust Indicators - Mobile Optimized */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 lg:pt-12 animate-fade-in-up">
              <div className="text-center group p-4 bg-card rounded-2xl hover:shadow-lg transition-all">
                <div className="p-3 bg-whatsapp-green/10 rounded-2xl group-hover:bg-whatsapp-green/20 transition-colors mb-3 w-fit mx-auto">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7 text-whatsapp-green" />
                </div>
                <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">500+</div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">Pakistani Businesses</p>
              </div>
              
              <div className="text-center group p-4 bg-card rounded-2xl hover:shadow-lg transition-all">
                <div className="p-3 bg-whatsapp-green/10 rounded-2xl group-hover:bg-whatsapp-green/20 transition-colors mb-3 w-fit mx-auto">
                  <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-whatsapp-green" />
                </div>
                <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">10M+</div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">Messages Automated</p>
              </div>
              
              <div className="text-center group p-4 bg-card rounded-2xl hover:shadow-lg transition-all">
                <div className="p-3 bg-whatsapp-green/10 rounded-2xl group-hover:bg-whatsapp-green/20 transition-colors mb-3 w-fit mx-auto">
                  <Star className="h-6 w-6 sm:h-7 sm:w-7 text-whatsapp-green" />
                </div>
                <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">95%</div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">Customer Satisfaction</p>
              </div>
              
              <div className="text-center group p-4 bg-card rounded-2xl hover:shadow-lg transition-all">
                <div className="p-3 bg-whatsapp-green/10 rounded-2xl group-hover:bg-whatsapp-green/20 transition-colors mb-3 w-fit mx-auto">
                  <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-whatsapp-green" />
                </div>
                <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">Meta</div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">Official Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Demo Interface Section */}
      <section className="section-padding bg-gradient-to-br from-background via-soft-green to-card relative overflow-hidden">
        <div className="container-width relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-foreground mb-6">
              See It In Action
              <span className="block bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">
                Live Demo
              </span>
            </h2>
            <p className="font-body-lg text-muted-foreground max-w-2xl mx-auto">
              Watch real conversations being handled automatically. No scripts, no delays - just natural, 
              intelligent responses that convert leads into customers.
            </p>
          </div>

          {/* WhatsApp Interface */}
          <div className="flex justify-center">
            <div className="whatsapp-interface bg-[#E5DDD5] rounded-3xl shadow-elevated w-full max-w-[380px] sm:max-w-[420px] h-[500px] sm:h-[600px] lg:h-[680px] overflow-hidden relative border border-gray-200 hover-lift">
              
              {/* Authentic WhatsApp Header */}
              <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-whatsapp-green rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                      TC
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full border-2 border-[#075E54]"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-base md:text-[17px]">TheChatFlow</h3>
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-blue-400" />
                    </div>
                    <p className="text-xs md:text-[13px] text-green-100">Online</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 md:gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Video className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <MoreVertical className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 h-[380px] sm:h-[480px] lg:h-[560px] overflow-y-auto" id="chat-messages">
                {conversations[currentConversation].messages.map((message) => (
                  <div
                    key={message.id}
                    className={`transition-all duration-700 message-enter ${
                      visibleMessages.includes(message.id) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-6'
                    }`}
                  >
                    {message.type === 'incoming' ? (
                      <div className="flex items-start gap-2 mb-3 md:mb-4">
                        <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-semibold text-gray-700">
                          {message.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="bg-white rounded-2xl rounded-tl-md p-3 md:p-4 shadow-sm max-w-[240px] md:max-w-[280px] message-bubble">
                            <p className="text-sm md:text-[15px] text-gray-800 whitespace-pre-wrap leading-relaxed">{message.text}</p>
                            <div className="flex items-center justify-between mt-2">
                              <p className="text-[10px] md:text-[11px] text-gray-500">{message.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-end mb-3 md:mb-4">
                        <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-md p-3 md:p-4 shadow-sm max-w-[240px] md:max-w-[280px] message-bubble">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs md:text-[13px] font-semibold text-[#075E54]">{message.sender}</span>
                            {message.verified && <CheckCircle className="h-3 w-3 text-blue-500" />}
                          </div>
                          <p className="text-sm md:text-[15px] text-gray-800 whitespace-pre-wrap leading-relaxed">{message.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-2">
                            <p className="text-[10px] md:text-[11px] text-gray-600">{message.time}</p>
                            <div className="flex ml-2">
                              <CheckCircle className="h-3 w-3 text-blue-500" />
                              <CheckCircle className="h-3 w-3 text-blue-500 -ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Enhanced Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start gap-2 animate-fade-in-up">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-whatsapp-green rounded-full flex items-center justify-center text-white font-bold text-xs">
                      TC
                    </div>
                    <div className="bg-[#DCF8C6] rounded-2xl rounded-tl-md p-3 md:p-4 shadow-sm message-bubble">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs md:text-[13px] font-semibold text-[#075E54]">TheChatFlow</span>
                        <CheckCircle className="h-3 w-3 text-blue-500" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs md:text-[13px] text-gray-600 font-medium">typing</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-[#075E54] rounded-full typing-dots"></div>
                          <div className="w-2 h-2 bg-[#075E54] rounded-full typing-dots" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-[#075E54] rounded-full typing-dots" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Conversation Indicator */}
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 md:px-4 py-2 shadow-sm conversation-indicator">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: conversations[currentConversation].color }}
                      ></div>
                      <p className="text-xs font-semibold text-gray-700">
                        {conversations[currentConversation].title}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">Live Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;