import React, { useState, useEffect } from "react";
import { CheckCircle, MessageCircle, Users } from "lucide-react";

interface FormSubmissionLoaderProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const FormSubmissionLoader: React.FC<FormSubmissionLoaderProps> = ({
  isVisible,
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    "Submitting your demo request...",
    "Processing your information...",
    "Connecting to our team...",
    "Almost done..."
  ];

  useEffect(() => {
    if (!isVisible) {
      setCurrentStep(0);
      setProgress(0);
      return;
    }

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Step animation
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [isVisible, steps.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-8 p-8">
        {/* Brand */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-whatsapp-green rounded-2xl flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">ChatFlow</h1>
        </div>

        {/* Animated Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-whatsapp-green/10 rounded-2xl flex items-center justify-center animate-pulse">
            <MessageCircle className="h-8 w-8 text-whatsapp-green" />
          </div>
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center animate-pulse delay-200">
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center animate-pulse delay-500">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>

        {/* Current Step */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground animate-fade-in">
            {steps[currentStep]}
          </h2>
          
          {/* Progress Bar */}
          <div className="w-80 bg-gray-200 rounded-full h-2 mx-auto">
            <div 
              className="bg-gradient-to-r from-whatsapp-green to-whatsapp-dark h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-sm text-muted-foreground">
            {progress}% Complete
          </p>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-whatsapp-green/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormSubmissionLoader;