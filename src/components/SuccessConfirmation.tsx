import React, { useEffect } from "react";
import { CheckCircle, MessageCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessConfirmationProps {
  isVisible: boolean;
  customerName: string;
  referenceId: string;
  onClose: () => void;
}

const SuccessConfirmation: React.FC<SuccessConfirmationProps> = ({
  isVisible,
  customerName,
  referenceId,
  onClose
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 8000); // Auto-close after 8 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-background rounded-3xl p-8 max-w-lg mx-4 shadow-2xl border">
        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Demo Booking Confirmed!
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Thank you, <span className="font-semibold text-foreground">{customerName}</span>!
          </p>
        </div>

        {/* Main Message */}
        <div className="bg-whatsapp-green/5 border border-whatsapp-green/20 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <MessageCircle className="h-5 w-5 text-whatsapp-green mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">What happens next?</h3>
              <p className="text-sm text-muted-foreground">
                Our dedicated team will reach out to you <strong>within 2 hours</strong> to schedule your personalized WhatsApp automation demo.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Your Demo Will Include:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Live WhatsApp automation showcase</li>
                <li>• Customized solutions for your business</li>
                <li>• ROI calculations and pricing options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reference Info */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Reference ID:</span>
            <span className="font-mono font-semibold text-foreground">{referenceId}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={onClose}
            className="flex-1 bg-whatsapp-green hover:bg-whatsapp-dark text-white"
          >
            Continue Browsing
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.open("https://wa.me/923171634191", "_blank")}
            className="border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white"
          >
            WhatsApp Us Now
          </Button>
        </div>

        {/* Auto-close indicator */}
        <p className="text-xs text-muted-foreground text-center mt-4">
          This message will close automatically in a few seconds
        </p>
      </div>
    </div>
  );
};

export default SuccessConfirmation;