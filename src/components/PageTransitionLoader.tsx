import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, CheckCircle, FileText, Users, Phone, BookOpen } from 'lucide-react';

interface PageTransitionLoaderProps {
  route?: string;
  duration?: number;
}

const getRouteConfig = (route: string = '') => {
  if (route.includes('/contact')) {
    return {
      icon: Phone,
      messages: [
        "Loading Demo Booking...",
        "Preparing Contact Form..."
      ],
      title: "ChatFlow Demo"
    };
  }
  
  if (route.includes('/success-stories')) {
    return {
      icon: Users,
      messages: [
        "Loading Success Stories...",
        "Fetching Client Results..."
      ],
      title: "Success Stories"
    };
  }
  
  if (route.includes('/blog')) {
    return {
      icon: BookOpen,
      messages: [
        "Loading Articles...",
        "Preparing Content..."
      ],
      title: "ChatFlow Blog"
    };
  }
  
  if (route.includes('/privacy-policy') || route.includes('/terms-of-service') || route.includes('/cookie-policy')) {
    return {
      icon: FileText,
      messages: [
        "Loading Documentation...",
        "Preparing Legal Content..."
      ],
      title: "Legal Documents"
    };
  }
  
  // Default fallback
  return {
    icon: MessageCircle,
    messages: [
      "Loading Page...",
      "Almost Ready..."
    ],
    title: "ChatFlow"
  };
};

const PageTransitionLoader: React.FC<PageTransitionLoaderProps> = ({ 
  route = '', 
  duration = 1200 
}) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const config = getRouteConfig(route);
  const { icon: IconComponent, messages, title } = config;

  useEffect(() => {
    const progressInterval = duration / 100; // Divide duration by 100 for smooth progress
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 3; // Faster progress increment
      });
    }, progressInterval);

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, duration / 2); // Switch message halfway through

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, [duration, messages.length]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-whatsapp-green via-whatsapp-dark to-whatsapp-teal z-50 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        {/* Logo/Brand */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
            <IconComponent className="w-8 h-8 text-white animate-pulse" />
          </div>
          <div className="absolute -inset-1 bg-white/10 rounded-2xl animate-ping opacity-75"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <div className="flex items-center justify-center space-x-3 text-white/90">
            <Zap className="w-4 h-4 animate-spin" />
            <span className="text-base font-medium">
              {messages[currentStep]}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
            </div>
          </div>
          <p className="text-white/70 text-sm font-medium">{progress}% Complete</p>
        </div>

        {/* Floating Dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-white/40 rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '0.8s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-float"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 1.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PageTransitionLoader;