import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Play, MessageCircle, Users, CheckCircle, Star, Video, Phone, MoreVertical, Send } from "lucide-react";

const HeroSection = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [userInput, setUserInput] = useState("");
  const [interactiveMessages, setInteractiveMessages] = useState<any[]>([]);
  const [isInteractive, setIsInteractive] = useState(false);

  // Removed auto-scroll functionality as requested

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

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    
    setIsInteractive(true);
    const userMessage = {
      id: Date.now(),
      type: 'incoming',
      sender: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: userInput,
      avatar: 'Y',
      status: 'delivered'
    };
    
    setInteractiveMessages(prev => [...prev, userMessage]);
    setUserInput("");
    
    // Show typing indicator
    setTimeout(() => {
      setIsTyping(true);
    }, 500);
    
    // Show response after typing
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: Date.now() + 1,
        type: 'outgoing',
        sender: 'TheChatFlow',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: 'Thank you for your message! Our AI automation can handle queries like this 24/7. Would you like to see how we can help your business?',
        verified: true,
        status: 'read'
      };
      setInteractiveMessages(prev => [...prev, botResponse]);
    }, 2500);
  };

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-whatsapp-green/5">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-whatsapp-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-whatsapp-dark/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-width relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          
          {/* Left Content - Enhanced Typography */}
          <div className="space-y-8 lg:space-y-10 lg:pr-12">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="h-4 w-4 text-whatsapp-green" />
                  Official Meta Business Partner
                </div>
                
                <h1 className="font-hero text-foreground leading-[0.95] tracking-tight">
                  Transform Every Chat Into
                  <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                    Revenue
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-whatsapp-green">
                  With AI Automation
                </h2>
                
                <p className="font-body-lg text-muted-foreground max-w-xl leading-relaxed">
                  Watch authentic conversations flow automatically across WhatsApp, Instagram & Facebook. 
                  Trusted by 500+ Pakistani businesses.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-whatsapp-green hover:bg-whatsapp-dark text-white shadow-hero group hover-lift px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/contact">
                  <CheckCircle className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Sign up today
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white px-8 py-4 text-lg font-semibold hover-lift"
                asChild
              >
                <Link to="/#pricing">
                  <Play className="mr-3 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pt-8 lg:pt-12">
                <div className="text-center group">
                  <div className="p-3 bg-whatsapp-green/10 rounded-2xl group-hover:bg-whatsapp-green/20 transition-colors mb-3 w-fit mx-auto">
                    <Users className="h-6 w-6 text-whatsapp-green" />
                  </div>
                  <div className="font-bold text-xl lg:text-2xl text-foreground">500+</div>
                  <p className="text-sm text-muted-foreground font-medium">Pakistani Businesses</p>
                </div>
                
                <div className="text-center group">
                  <div className="p-3 bg-whatsapp-green/10 rounded-2xl group-hover:bg-whatsapp-green/20 transition-colors mb-3 w-fit mx-auto">
                    <MessageCircle className="h-6 w-6 text-whatsapp-green" />
                  </div>
                  <div className="font-bold text-xl lg:text-2xl text-foreground">10M+</div>
                  <p className="text-sm text-muted-foreground font-medium">Messages Automated</p>
                </div>
                
                <div className="text-center group">
                  <div className="p-3 bg-whatsapp-green/10 rounded-2xl group-hover:bg-whatsapp-green/20 transition-colors mb-3 w-fit mx-auto">
                    <Star className="h-6 w-6 text-whatsapp-green" />
                  </div>
                  <div className="font-bold text-xl lg:text-2xl text-foreground">95%</div>
                  <p className="text-sm text-muted-foreground font-medium">Customer Satisfaction</p>
                </div>
                
                <div className="text-center group">
                  <div className="p-3 bg-whatsapp-green/10 rounded-2xl group-hover:bg-whatsapp-green/20 transition-colors mb-3 w-fit mx-auto">
                    <CheckCircle className="h-6 w-6 text-whatsapp-green" />
                  </div>
                  <div className="font-bold text-xl lg:text-2xl text-foreground">Meta</div>
                  <p className="text-sm text-muted-foreground font-medium">Official Partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced WhatsApp Interface */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="whatsapp-interface bg-[#E5DDD5] rounded-3xl shadow-elevated w-full max-w-[400px] h-[600px] md:h-[680px] overflow-hidden relative border border-gray-200 hover-lift">
              
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
              <div className="flex-1 p-3 md:p-4 space-y-3 md:space-y-4 h-[420px] md:h-[500px] overflow-y-auto" id="chat-messages">
                {/* Show interactive messages when user is interacting */}
                {isInteractive ? (
                  interactiveMessages.map((message) => (
                    <div key={message.id} className="transition-all duration-700 opacity-100 translate-y-0">
                      {message.type === 'incoming' ? (
                        <div className="flex items-start gap-2 mb-3 md:mb-4">
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-semibold text-white">
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
                  ))
                ) : (
                  /* Show demo conversation */
                  conversations[currentConversation].messages.map((message) => (
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
                  ))
                )}

                {/* Enhanced Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start gap-2 animate-fade-in-up">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-whatsapp-green rounded-full flex items-center justify-center text-white font-bold text-xs">
                      TC
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-md p-3 md:p-4 shadow-sm message-bubble">
                      <div className="flex items-center gap-3">
                        <span className="text-xs md:text-[13px] text-gray-600 font-medium">TheChatFlow is typing</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full typing-dots"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full typing-dots" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full typing-dots" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Input Field */}
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                <div className="bg-white rounded-xl shadow-sm border p-2 md:p-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message here..."
                      className="flex-1 bg-transparent border-none outline-none text-sm md:text-[15px] text-gray-800 placeholder-gray-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!userInput.trim()}
                      className="p-2 bg-whatsapp-green text-white rounded-full hover:bg-whatsapp-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Demo indicator - show when not interactive */}
                {!isInteractive && (
                  <div className="mt-2 bg-white/95 backdrop-blur-sm rounded-xl px-3 md:px-4 py-2 shadow-sm conversation-indicator">
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
                      <p className="text-xs text-gray-500">Try typing above!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;