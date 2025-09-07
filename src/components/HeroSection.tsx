import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Play, MessageCircle, Users, CheckCircle, Star, Video, Phone, MoreVertical, Send, Smile } from "lucide-react";

const HeroSection = () => {
  // Define message types
  type BaseMessage = {
    id: number;
    sender: string;
    time: string;
    text: string;
    status: 'delivered' | 'read';
  };

  type IncomingMessage = BaseMessage & {
    type: 'incoming';
    avatar: string;
  };

  type OutgoingMessage = BaseMessage & {
    type: 'outgoing';
    verified?: boolean;
  };

  type Message = IncomingMessage | OutgoingMessage;

  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      type: 'outgoing', 
      sender: 'TheChatFlow', 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
      text: 'Welcome! I\'m your AI assistant. Ask me anything about our services - visa consultancy, solar solutions, business automation, or any other questions!',
      verified: true,
      status: 'read'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-responses for different topics
  const responses = {
    visa: "Great question about visa services!\n\nFor Canada study visa:\n• IELTS score: 6.5+ overall\n• Bank statement: 15+ lakh\n• University acceptance letter\n• Academic transcripts\n\nWould you like me to schedule a free consultation?",
    solar: "Excellent choice considering solar energy!\n\nFor a 25-30K monthly bill:\n• Recommended: 10KW system\n• Investment: 12-14 lakh\n• Monthly savings: 20-25K\n• Payback: 2.5-3 years\n\nShall I arrange a free site survey?",
    business: "Smart thinking about business automation!\n\nOur WhatsApp automation can:\n• Handle 80% of customer queries\n• Generate leads 24/7\n• Increase conversion by 300%\n• Save 15+ hours weekly\n\nWant to see a live demo?",
    pricing: "Our flexible pricing suits every business:\n\n• Starter: PKR 15,000/month\n• Professional: PKR 35,000/month\n• Enterprise: Custom pricing\n\nAll plans include setup, training & support. Ready to transform your business?",
    default: "Thank you for your question!\n\nI can help you with:\n• Visa & immigration services\n• Solar energy solutions\n• Business automation\n• WhatsApp marketing\n\nWhat specific area interests you most?"
  };

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('visa') || lowerMessage.includes('immigration') || lowerMessage.includes('canada') || lowerMessage.includes('study')) {
      return responses.visa;
    } else if (lowerMessage.includes('solar') || lowerMessage.includes('energy') || lowerMessage.includes('electricity') || lowerMessage.includes('bill')) {
      return responses.solar;
    } else if (lowerMessage.includes('business') || lowerMessage.includes('automation') || lowerMessage.includes('whatsapp') || lowerMessage.includes('marketing')) {
      return responses.business;
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('package')) {
      return responses.pricing;
    } else {
      return responses.default;
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: IncomingMessage = {
      id: Date.now(),
      type: 'incoming',
      sender: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: inputValue,
      avatar: 'Y',
      status: 'delivered'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate response time (2-3 seconds)
    setTimeout(() => {
      setIsTyping(false);
      
      const botResponse: OutgoingMessage = {
        id: Date.now() + 1,
        type: 'outgoing',
        sender: 'TheChatFlow',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: getResponse(userMessage.text),
        verified: true,
        status: 'read'
      };

      setTimeout(() => {
        setMessages(prev => [...prev, botResponse]);
      }, 300);
    }, Math.random() * 1000 + 2000); // 2-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
              <div 
                ref={chatContainerRef}
                className="flex-1 p-3 md:p-4 space-y-3 md:space-y-4 h-[420px] md:h-[480px] overflow-y-auto scroll-smooth" 
                id="chat-messages"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="transition-all duration-500 animate-fade-in-up"
                  >
                     {message.type === 'incoming' ? (
                       <div className="flex items-start gap-2 mb-3 md:mb-4">
                         <div className="w-7 h-7 md:w-8 md:h-8 bg-whatsapp-green/20 rounded-full flex items-center justify-center text-xs font-semibold text-whatsapp-dark">
                           {(message as IncomingMessage).avatar}
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
                             {(message as OutgoingMessage).verified && <CheckCircle className="h-3 w-3 text-blue-500" />}
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
                  <div className="flex items-start gap-2 animate-fade-in-up typing-indicator">
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
                
                <div ref={messagesEndRef} />
              </div>

              {/* Interactive Input Section */}
              <div className="bg-[#F0F0F0] p-3 md:p-4 flex items-center gap-2 md:gap-3">
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <Smile className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="bg-white border-none rounded-2xl pl-4 pr-12 py-2 text-sm focus:ring-2 focus:ring-whatsapp-green focus:border-transparent"
                    disabled={isTyping}
                  />
                </div>
                
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-whatsapp-green hover:bg-whatsapp-dark text-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Live Demo Indicator */}
              <div className="absolute top-16 left-3 md:left-4 right-3 md:right-4">
                <div className="bg-whatsapp-green/90 backdrop-blur-sm rounded-xl px-3 md:px-4 py-2 shadow-sm">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                      <p className="text-xs font-semibold text-white">
                        Interactive Demo - Try asking about our services!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;