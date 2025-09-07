import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, CheckCircle } from 'lucide-react';

const WebsiteLoader = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { icon: MessageCircle, text: "Loading WhatsApp Solutions..." },
    { icon: Zap, text: "Preparing Automation Tools..." },
    { icon: CheckCircle, text: "Ready to Transform Your Business!" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-whatsapp-green via-whatsapp-dark to-whatsapp-teal z-50 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo/Brand */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/30">
            <MessageCircle className="w-10 h-10 text-white animate-pulse" />
          </div>
          <div className="absolute -inset-2 bg-white/10 rounded-3xl animate-ping"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">ChatFlow</h1>
          <div className="flex items-center justify-center space-x-3 text-white/90">
            {React.createElement(steps[currentStep].icon, { 
              className: "w-5 h-5 animate-spin" 
            })}
            <span className="text-lg font-medium">
              {steps[currentStep].text}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
            </div>
          </div>
          <p className="text-white/70 text-sm font-medium">{progress}% Complete</p>
        </div>

        {/* Floating Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-white/40 rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WebsiteLoader;