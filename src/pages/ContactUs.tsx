import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Users,
  Zap,
  CheckCircle,
  Send,
  Calendar,
  Globe,
  Star,
  Loader2
} from "lucide-react";

// Form validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  businessName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  whatsappNumber: z.string().min(10, "Please enter a valid WhatsApp number"),
  industry: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  monthlyVolume: z.string().optional(),
  preferredMeetingTime: z.string().optional(),
  // Honeypot field for spam protection
  website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Enhanced data collection interface
interface SubmissionData extends ContactFormData {
  timestamp: string;
  submissionId: string;
  userAgent: string;
  sourceUrl: string;
  referrer: string;
  ipAddress?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

// Type declarations for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      whatsappNumber: "",
      industry: "",
      message: "",
      monthlyVolume: "",
      preferredMeetingTime: "",
      website: "", // Honeypot field
    },
  });

  // Enhanced data collection function
  const collectEnhancedData = async (): Promise<Omit<SubmissionData, keyof ContactFormData>> => {
    const urlParams = new URLSearchParams(window.location.search);
    let ipAddress = "";

    try {
      // Get IP address
      const ipResponse = await fetch("https://ipapi.co/json/");
      const ipData = await ipResponse.json();
      ipAddress = ipData.ip;
    } catch (error) {
      console.log("IP detection failed:", error);
    }

    return {
      timestamp: new Date().toISOString(),
      submissionId: crypto.randomUUID(),
      userAgent: navigator.userAgent,
      sourceUrl: window.location.href,
      referrer: document.referrer || "Direct",
      ipAddress,
      utmSource: urlParams.get("utm_source") || undefined,
      utmMedium: urlParams.get("utm_medium") || undefined,
      utmCampaign: urlParams.get("utm_campaign") || undefined,
    };
  };

  // Rate limiting check
  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const oneMinute = 60 * 1000;
    
    if (now - lastSubmissionTime < oneMinute) {
      toast({
        title: "Please wait",
        description: "You can only submit one form per minute. Please try again later.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  // Form submission with retry logic
  const submitWithRetry = async (data: SubmissionData, maxRetries = 3): Promise<boolean> => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxQy3n0F7-gQtusrMRRalyqI1xlZ4eJNYGAGk9Xh8HucMeB9efcbpE6CJUuvEVaQ4fwFg/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify(data),
          }
        );

        // Track successful submission in analytics
        if (typeof window.gtag !== "undefined") {
          window.gtag("event", "form_submit", {
            event_category: "contact",
            event_label: "contact_form",
            value: 1,
          });
        }

        if (typeof window.clarity !== "undefined") {
          window.clarity("set", "contact_form_submitted", "true");
        }

        return true;
      } catch (error) {
        console.error(`Submission attempt ${attempt} failed:`, error);
        
        if (attempt === maxRetries) {
          throw error;
        }
        
        // Wait before retry (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      }
    }
    return false;
  };

  // Form submission handler
  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot field
    if (data.website) {
      console.log("Spam detected - honeypot filled");
      return;
    }

    // Rate limiting
    if (!checkRateLimit()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Collect enhanced data
      const enhancedData = await collectEnhancedData();
      const submissionData: SubmissionData = {
        ...data,
        ...enhancedData,
      };

      // Submit to Google Sheets
      await submitWithRetry(submissionData);

      // Success handling
      setLastSubmissionTime(Date.now());
      
      toast({
        title: "Message sent successfully!",
        description: `Thank you ${data.fullName}! We'll respond within 2 hours. Reference ID: ${submissionData.submissionId?.slice(-8)}`,
      });

      // Reset form
      form.reset();

    } catch (error) {
      console.error("Form submission error:", error);
      
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly on WhatsApp. We apologize for the inconvenience.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp & Call",
      subtitle: "Direct line to our team",
      value: "+92 340 4634191",
      action: "Call Now",
      color: "bg-whatsapp-green",
      description: "Get instant responses on WhatsApp or schedule a call"
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "24/7 email assistance", 
      value: "hello@thechatflow.com",
      action: "Send Email",
      color: "bg-blue-500",
      description: "Detailed inquiries and technical support"
    },
    {
      icon: MapPin,
      title: "Office Location",
      subtitle: "Visit our Pakistani office",
      value: "Lahore, Pakistan",
      action: "Get Directions",
      color: "bg-purple-500",
      description: "Meet our team in person for consultations"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PKT" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PKT" },
    { day: "Sunday", hours: "Closed (Emergency support available)" }
  ];

  const teamFeatures = [
    {
      icon: Users,
      title: "Pakistani Team",
      description: "Local expertise with cultural understanding"
    },
    {
      icon: MessageCircle,
      title: "Urdu & English Support",
      description: "Communicate in your preferred language"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Reply in minutes"
    },
    {
      icon: Star,
      title: "5-Star Support",
      description: "95% customer satisfaction rating"
    }
  ];

  return (
    <>
      <MegaMenu />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-whatsapp-green/5">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-6 py-3 rounded-full text-lg font-semibold">
              <Phone className="h-5 w-5 text-whatsapp-green" />
              Get in Touch with Our Pakistani Team
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Ready to Transform 
              <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                Your Business?
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect with our expert team for personalized WhatsApp automation solutions. 
              We speak your language and understand your market.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 pt-8">
              {teamFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover-lift">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="flex justify-center mb-3 lg:mb-4">
                      <div className="p-2 lg:p-3 bg-whatsapp-green/10 rounded-2xl">
                        <feature.icon className="h-5 w-5 lg:h-6 lg:w-6 text-whatsapp-green" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">{feature.title}</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container-width">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">Multiple Ways to Connect</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to reach our team. We're here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all hover-lift">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6`}>
                    <method.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm lg:text-base">{method.subtitle}</p>
                  
                  <div className="bg-gray-50 rounded-xl p-3 lg:p-4 mb-4 lg:mb-6">
                    <p className="text-base lg:text-lg font-semibold text-foreground mb-2">{method.value}</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  
                  <Button 
                    className={`w-full ${method.color} hover:opacity-90 text-white font-semibold py-2 lg:py-3`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Hours */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className="p-2 lg:p-3 bg-whatsapp-green/10 rounded-2xl">
                      <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-whatsapp-green" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">Office Hours</h3>
                  </div>
                  
                  <div className="space-y-3 lg:space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center p-3 lg:p-4 bg-gray-50 rounded-xl">
                        <span className="font-medium text-foreground text-sm lg:text-base">{schedule.day}</span>
                        <span className="text-muted-foreground text-xs lg:text-sm">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className="p-2 lg:p-3 bg-blue-500/10 rounded-2xl">
                      <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">Emergency Support</h3>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-4 lg:p-6">
                    <p className="text-muted-foreground mb-4 text-sm lg:text-base">
                      Need urgent assistance outside office hours? We provide 24/7 emergency support for critical issues.
                    </p>
                    
                    <div className="flex items-center gap-2 text-blue-600">
                      <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5" />
                      <span className="font-medium text-sm lg:text-base">WhatsApp emergency line available</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">Send Us a Message</h2>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Tell us about your business needs and we'll create a custom automation solution for you.
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 lg:space-y-8">
                  {/* Honeypot field - hidden from users */}
                  <Input
                    {...form.register("website")}
                    type="text"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm lg:text-base font-semibold text-foreground">Full Name *</Label>
                      <Input 
                        {...form.register("fullName")}
                        placeholder="Your full name" 
                        className="h-12 lg:h-14 text-base lg:text-lg"
                        disabled={isSubmitting}
                      />
                      {form.formState.errors.fullName && (
                        <p className="text-sm text-red-500">{form.formState.errors.fullName.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm lg:text-base font-semibold text-foreground">Business Name</Label>
                      <Input 
                        {...form.register("businessName")}
                        placeholder="Your business/company name" 
                        className="h-12 lg:h-14 text-base lg:text-lg"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm lg:text-base font-semibold text-foreground">Email Address *</Label>
                      <Input 
                        {...form.register("email")}
                        type="email"
                        placeholder="your.email@example.com" 
                        className="h-12 lg:h-14 text-base lg:text-lg"
                        disabled={isSubmitting}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm lg:text-base font-semibold text-foreground">WhatsApp Number *</Label>
                      <Input 
                        {...form.register("whatsappNumber")}
                        placeholder="+92 3XX XXXXXXX" 
                        className="h-12 lg:h-14 text-base lg:text-lg"
                        disabled={isSubmitting}
                      />
                      {form.formState.errors.whatsappNumber && (
                        <p className="text-sm text-red-500">{form.formState.errors.whatsappNumber.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm lg:text-base font-semibold text-foreground">Industry/Business Type</Label>
                    <Input 
                      {...form.register("industry")}
                      placeholder="e.g., E-commerce, Solar, Real Estate, Education" 
                      className="h-12 lg:h-14 text-base lg:text-lg"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm lg:text-base font-semibold text-foreground">How can we help you? *</Label>
                    <Textarea 
                      {...form.register("message")}
                      placeholder="Tell us about your business challenges and automation needs..."
                      rows={4}
                      className="text-base lg:text-lg resize-none min-h-[120px]"
                      disabled={isSubmitting}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm lg:text-base font-semibold text-foreground">Monthly WhatsApp Volume</Label>
                      <Input 
                        {...form.register("monthlyVolume")}
                        placeholder="e.g., 500-1000 messages/month" 
                        className="h-12 lg:h-14 text-base lg:text-lg"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm lg:text-base font-semibold text-foreground">Preferred Meeting Time</Label>
                      <Input 
                        {...form.register("preferredMeetingTime")}
                        placeholder="e.g., Weekdays 2-5 PM" 
                        className="h-12 lg:h-14 text-base lg:text-lg"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4">
                    <Button 
                      type="submit"
                      variant="default" 
                      size="lg" 
                      className="flex-1 bg-whatsapp-green hover:bg-whatsapp-dark text-white px-6 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl font-semibold shadow-xl hover-lift"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 lg:mr-3 h-5 w-5 lg:h-6 lg:w-6 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 lg:mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline" 
                      size="lg"
                      className="flex-1 border-2 border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white px-6 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl font-semibold hover-lift"
                      disabled={isSubmitting}
                    >
                      <Calendar className="mr-2 lg:mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                      Book Demo Call
                    </Button>
                  </div>

                  {/* Form validation summary */}
                  {Object.keys(form.formState.errors).length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm font-medium">
                        Please fix the following errors:
                      </p>
                      <ul className="text-red-600 text-sm mt-2 space-y-1">
                        {Object.entries(form.formState.errors).map(([field, error]) => (
                          <li key={field}>• {error?.message}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-width">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">Common Questions</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to frequently asked questions about our services and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4">How quickly can you respond?</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  We typically respond within 2 hours during business hours. Emergency support is available 24/7 for critical issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4">Do you offer free consultations?</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Yes! We offer free 30-minute consultations to understand your business needs and recommend the best automation solution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4">Can you help with setup and training?</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Absolutely! We provide complete setup, staff training in Urdu/English, and ongoing support to ensure your success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4">What industries do you specialize in?</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  We work with all industries but have deep expertise in Solar, Real Estate, Education, E-commerce, and Visa Consultancy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;