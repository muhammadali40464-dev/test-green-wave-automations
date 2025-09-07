import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Play, MessageCircle, Users, CheckCircle, Star, Video, Phone, MoreVertical } from "lucide-react";

const HeroSection = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState<string>('');
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Enhanced realistic conversation scenarios in Roman Urdu
  const conversations = [
    {
      id: 'ecommerce',
      title: 'Fashion Store',
      color: '#FF6B6B',
      messages: [
        { 
          id: 1, 
          type: 'incoming', 
          sender: 'Zara Ahmed', 
          time: '2:14 PM', 
          text: 'Kya ye kurta medium size mein available hai? Navy blue color?',
          avatar: 'Z',
          status: 'delivered'
        },
        { 
          id: 2, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '2:14 PM', 
          text: 'Haan bilkul Zara! Navy blue kurta medium size stock mein hai.\n\n• Original price: Rs. 3,500\n• Sale price: Rs. 2,500\n• Free delivery Karachi mein\n• Cash on delivery available\n\nOrder confirm kar dun?',
          verified: true,
          status: 'read'
        },
        { 
          id: 3, 
          type: 'incoming', 
          sender: 'Zara Ahmed', 
          time: '2:15 PM', 
          text: 'Haan please. Address: DHA Phase 2, Block L',
          avatar: 'Z',
          status: 'delivered'
        },
        { 
          id: 4, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '2:15 PM', 
          text: 'Perfect! Order confirmed.\n\nOrder ID: #KRT2024\nTotal: Rs. 2,500\nDelivery: Tomorrow 3-6 PM\n\nTracking link aur invoice WhatsApp kar diya hai. Thank you Zara!',
          verified: true,
          status: 'read'
        }
      ]
    },
    {
      id: 'course',
      title: 'Online Course',
      color: '#4ECDC4',
      messages: [
        { 
          id: 1, 
          type: 'incoming', 
          sender: 'Ahmad Ali', 
          time: '3:22 PM', 
          text: 'Digital marketing course ka duration kitna hai? Fees kya hai?',
          avatar: 'A',
          status: 'delivered'
        },
        { 
          id: 2, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '3:22 PM', 
          text: 'Salam Ahmad!\n\n3 month ka complete course hai:\n\n• Live classes + recordings\n• Facebook & Google Ads\n• Social media marketing\n• Certificate included\n\nTotal fees: 25K (2 installments mein)',
          verified: true,
          status: 'read'
        },
        { 
          id: 3, 
          type: 'incoming', 
          sender: 'Ahmad Ali', 
          time: '3:23 PM', 
          text: 'Installments kaise? Job guarantee hai?',
          avatar: 'A',
          status: 'delivered'
        },
        { 
          id: 4, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '3:23 PM', 
          text: 'First: 15K (enrollment)\nSecond: 10K (after 1 month)\n\nJob guarantee nahi but:\n• 90% students get jobs\n• Free portfolio development\n• Interview preparation\n\nFree demo class book karein?',
          verified: true,
          status: 'read'
        },
        { 
          id: 5, 
          type: 'incoming', 
          sender: 'Ahmad Ali', 
          time: '3:24 PM', 
          text: 'Haan demo class book kar dein please',
          avatar: 'A',
          status: 'delivered'
        },
        { 
          id: 6, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '3:24 PM', 
          text: 'Booked!\n\nDemo class: Tomorrow 7:00 PM\nZoom link: bit.ly/dm-demo\nDuration: 1 hour\n\nCourse outline aur joining details send kar diye. See you tomorrow Ahmad!',
          verified: true,
          status: 'read'
        }
      ]
    },
    {
      id: 'doctor',
      title: 'Clinic Appointment',
      color: '#9B59B6',
      messages: [
        { 
          id: 1, 
          type: 'incoming', 
          sender: 'Fatima Sheikh', 
          time: '4:30 PM', 
          text: 'Dr sahab ka appointment mil sakta hai? Back pain ka issue hai, 3 din se',
          avatar: 'F',
          status: 'delivered'
        },
        { 
          id: 2, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '4:30 PM', 
          text: 'Salam Fatima!\n\nDr. Ahmed (Orthopedic) available hai:\n\n• Today 6:00 PM\n• Tomorrow 11:00 AM\n• Tomorrow 4:00 PM\n\nKonsa time suit karta hai?',
          verified: true,
          status: 'read'
        },
        { 
          id: 3, 
          type: 'incoming', 
          sender: 'Fatima Sheikh', 
          time: '4:31 PM', 
          text: 'Today 6 PM please. Fee kya hai?',
          avatar: 'F',
          status: 'delivered'
        },
        { 
          id: 4, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '4:31 PM', 
          text: 'Appointment confirmed!\n\nDoctor: Dr. Ahmed\nTime: Today 6:00 PM\nFee: Rs. 2,000\nLocation: Clinic Address\n\nPlease bring any previous reports. Token number WhatsApp kar diya hai.',
          verified: true,
          status: 'read'
        }
      ]
    },
    {
      id: 'restaurant',
      title: 'Restaurant Booking',
      color: '#E67E22',
      messages: [
        { 
          id: 1, 
          type: 'incoming', 
          sender: 'Hassan Malik', 
          time: '5:45 PM', 
          text: '2 people ke liye table book karna hai. Anniversary dinner hai',
          avatar: 'H',
          status: 'delivered'
        },
        { 
          id: 2, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '5:45 PM', 
          text: 'Congratulations Hassan!\n\nSpecial anniversary setup available:\n\n• Window seat with city view\n• Complimentary dessert\n• Candle decoration\n\nKab ka booking chahiye?',
          verified: true,
          status: 'read'
        },
        { 
          id: 3, 
          type: 'incoming', 
          sender: 'Hassan Malik', 
          time: '5:46 PM', 
          text: 'Tomorrow 8 PM. Advance kitna dena hoga?',
          avatar: 'H',
          status: 'delivered'
        },
        { 
          id: 4, 
          type: 'outgoing', 
          sender: 'TheChatFlow', 
          time: '5:46 PM', 
          text: 'Perfect!\n\nBooking confirmed:\nDate: Tomorrow 8:00 PM\nTable: Anniversary special\nAdvance: Rs. 1,000\n\nPayment link send kar diya. Menu aur directions WhatsApp par aa gaye hain.',
          verified: true,
          status: 'read'
        }
      ]
    }
  ];

  const [currentConversation, setCurrentConversation] = useState(0);

  // Auto-scroll function
  const scrollToBottom = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const conversation = conversations[currentConversation];
    let messageIndex = 0;
    setVisibleMessages([]);
    setIsTyping(false);
    setTypingUser('');
    
    const showNextMessage = () => {
      if (messageIndex < conversation.messages.length) {
        const message = conversation.messages[messageIndex];
        const messageLength = message.text.length;
        const typingDuration = Math.max(2000, Math.min(4500, messageLength * 25)); // Slower typing for readability
        
        if (message.type === 'outgoing') {
          // Show TheChatFlow typing indicator
          setIsTyping(true);
          setTypingUser('TheChatFlow');
          setTimeout(() => {
            setIsTyping(false);
            setTypingUser('');
            setVisibleMessages(prev => [...prev, message.id]);
            messageIndex++;
            // Auto-scroll after message appears
            setTimeout(() => {
              scrollToBottom();
              setTimeout(showNextMessage, 2500); // Longer pause for reading
            }, 100);
          }, typingDuration);
        } else {
          // Show customer typing indicator for incoming messages
          if (messageIndex > 0) {
            setIsTyping(true);
            setTypingUser(message.sender);
            setTimeout(() => {
              setIsTyping(false);
              setTypingUser('');
              setVisibleMessages(prev => [...prev, message.id]);
              messageIndex++;
              // Auto-scroll after message appears
              setTimeout(() => {
                scrollToBottom();
                setTimeout(showNextMessage, 2000);
              }, 100);
            }, 1500); // Longer typing for customers
          } else {
            setVisibleMessages(prev => [...prev, message.id]);
            messageIndex++;
            setTimeout(() => {
              scrollToBottom();
              setTimeout(showNextMessage, 2000);
            }, 100);
          }
        }
      } else {
        setTimeout(() => {
          setCurrentConversation(prev => (prev + 1) % conversations.length);
        }, 6000); // Much longer conversation switching for better UX
      }
    };

    setTimeout(showNextMessage, 1500); // Slower start
  }, [currentConversation]);

  // Auto-scroll when new messages appear
  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-whatsapp-green/5">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-whatsapp-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-whatsapp-dark/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-width relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[90vh]">
          
          {/* Left Content - Mobile Optimized */}
          <div className="order-1 lg:order-1 space-y-8 lg:space-y-10">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-4 py-3 rounded-full text-sm sm:text-base font-medium">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-whatsapp-green" />
                  Official Meta Business Partner
                </div>
                
                <h1 className="font-hero text-foreground">
                  Transform Every Chat Into
                  <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent mt-2">
                    Revenue
                  </span>
                </h1>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-whatsapp-green leading-tight">
                  With AI Automation
                </h2>
                
                <p className="font-body-lg text-muted-foreground leading-relaxed">
                  Watch authentic conversations flow automatically across WhatsApp, Instagram & Facebook. 
                  Trusted by 500+ Pakistani businesses.
                </p>
              </div>

              {/* Enhanced CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-whatsapp-green hover:bg-whatsapp-dark text-white shadow-hero group hover-lift px-8 py-6 text-lg sm:text-xl font-semibold w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">
                  <CheckCircle className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get Started Free
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white px-8 py-6 text-lg sm:text-xl font-semibold hover-lift w-full sm:w-auto"
                asChild
              >
                <Link to="/#pricing">
                  <Play className="mr-3 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
              </div>

              {/* Enhanced Trust Indicators - Mobile Optimized */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 lg:pt-12">
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

          {/* Right Side - Enhanced WhatsApp Interface */}
          <div className="order-2 lg:order-2 flex justify-center">
            <div className="whatsapp-interface bg-[#E5DDD5] rounded-3xl shadow-2xl w-full max-w-[380px] sm:max-w-[420px] h-[500px] sm:h-[600px] lg:h-[680px] overflow-hidden relative border-2 border-gray-300 hover-lift">
              
              {/* Subtle Demo Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30">
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex gap-1">
                    {conversations.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          index === currentConversation ? 'bg-whatsapp-green' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Status Bar */}
              <div className="bg-black text-white px-4 py-1 text-xs flex justify-between items-center">
                <span>9:41 AM</span>
                <div className="flex items-center gap-1">
                  <span>●●●●</span>
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>
              
              {/* Authentic WhatsApp Header */}
              <div className="bg-[#075E54] text-white p-3 sm:p-4 flex items-center justify-between">
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
                    <div className="flex">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 -mr-1" style={{ color: '#4FC3F7', filter: 'drop-shadow(0 0 2px rgba(79, 195, 247, 0.3))' }} />
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4" style={{ color: '#4FC3F7', filter: 'drop-shadow(0 0 2px rgba(79, 195, 247, 0.3))' }} />
                    </div>
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

              {/* Chat Messages Container With Auto-Scroll */}
              <ScrollArea className="flex-1 h-[350px] sm:h-[450px] lg:h-[520px]">
                <div 
                  ref={chatScrollRef}
                  className="p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-full"
                >
                  {conversations[currentConversation].messages.map((message) => {
                    const isVisible = visibleMessages.includes(message.id);
                    if (!isVisible) return null;

                    return (
                      <div
                        key={message.id}
                        className="animate-message-in"
                      >
                        {message.type === 'incoming' ? (
                          <div className="flex items-start gap-2 mb-3 md:mb-4">
                            <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-semibold text-gray-700">
                              {message.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="bg-white rounded-2xl rounded-tl-md p-3 md:p-4 shadow-md max-w-[240px] md:max-w-[280px] message-bubble border border-gray-100">
                                <p className="text-sm md:text-[15px] text-gray-800 whitespace-pre-wrap leading-relaxed">{message.text}</p>
                                <div className="flex items-center justify-between mt-2">
                                  <p className="text-[10px] md:text-[11px] text-gray-500">{message.time}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-end mb-3 md:mb-4">
                            <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-md p-3 md:p-4 shadow-md max-w-[240px] md:max-w-[280px] message-bubble border border-green-100">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs md:text-[13px] font-semibold text-[#075E54]">{message.sender}</span>
                              {message.verified && (
                                <div className="flex">
                                  <CheckCircle className="h-3 w-3 -mr-1" style={{ color: '#4FC3F7', filter: 'drop-shadow(0 0 1px rgba(79, 195, 247, 0.4))' }} />
                                  <CheckCircle className="h-3 w-3" style={{ color: '#4FC3F7', filter: 'drop-shadow(0 0 1px rgba(79, 195, 247, 0.4))' }} />
                                </div>
                              )}
                            </div>
                              <p className="text-sm md:text-[15px] text-gray-800 whitespace-pre-wrap leading-relaxed">{message.text}</p>
                              <div className="flex items-center justify-end gap-1 mt-2">
                                <p className="text-[10px] md:text-[11px] text-gray-600">{message.time}</p>
                                <div className="flex ml-2">
                                  <CheckCircle className="h-3 w-3 -mr-1" style={{ color: message.status === 'read' ? '#4FC3F7' : '#999', filter: message.status === 'read' ? 'drop-shadow(0 0 1px rgba(79, 195, 247, 0.4))' : 'none' }} />
                                  <CheckCircle className="h-3 w-3" style={{ color: message.status === 'read' ? '#4FC3F7' : '#999', filter: message.status === 'read' ? 'drop-shadow(0 0 1px rgba(79, 195, 247, 0.4))' : 'none' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Enhanced Typing Indicator with proper user context */}
                  {isTyping && (
                    <div className={`animate-fade-in-up ${
                      typingUser === 'TheChatFlow' ? 'flex items-start gap-2' : 'flex justify-end'
                    }`}>
                      {typingUser === 'TheChatFlow' ? (
                        <>
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-whatsapp-green rounded-full flex items-center justify-center text-white font-bold text-xs">
                            TC
                          </div>
                          <div className="bg-white rounded-2xl rounded-tl-md p-3 md:p-4 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs md:text-[13px] font-semibold text-gray-700">TheChatFlow is typing</span>
                            </div>
                            <div className="flex gap-1">
                              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-md p-3 md:p-4 shadow-lg border border-green-100 max-w-[240px] md:max-w-[280px]">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs md:text-[13px] font-semibold text-[#075E54]">{typingUser} is typing</span>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Enhanced Conversation Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/70 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg">
                {conversations.map((conv, index) => (
                  <div
                    key={conv.id}
                    className={`flex items-center gap-2 transition-all duration-500 ${
                      index === currentConversation 
                        ? 'scale-110' 
                        : 'scale-90 opacity-60'
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        index === currentConversation 
                          ? 'bg-white shadow-lg animate-pulse' 
                          : 'bg-white/40'
                      }`}
                      style={{ backgroundColor: index === currentConversation ? conv.color : undefined }}
                    />
                    {index === currentConversation && (
                      <span className="text-white text-xs font-medium whitespace-nowrap">
                        {conv.title}
                      </span>
                    )}
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

export default HeroSection;