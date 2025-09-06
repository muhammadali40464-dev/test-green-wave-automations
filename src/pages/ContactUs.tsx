import { Helmet } from "react-helmet";
import { useState } from "react";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CheckCircle,
  Send,
  Calendar,
  Users,
  Zap,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you within 2 hours during business hours.",
      });
      setFormData({ name: "", email: "", phone: "", business: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp & Phone",
      description: "Instant support in Urdu & English",
      value: "+92 340 4634191",
      link: "tel:+923404634191",
      color: "bg-whatsapp-green",
      available: "24/7 WhatsApp Support"
    },
    {
      icon: Mail,
      title: "Email Support", 
      description: "Detailed inquiries and documentation",
      value: "hello@thechatflow.com",
      link: "mailto:hello@thechatflow.com",
      color: "bg-blue-500",
      available: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit us for in-person consultation",
      value: "Lahore, Pakistan",
      link: "#",
      color: "bg-purple-500",
      available: "Mon-Fri, 9 AM - 6 PM"
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "30-minute strategy call to understand your business needs"
    },
    {
      icon: Users,
      title: "Pakistani Team", 
      description: "Local experts who understand Pakistani market dynamics"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get your WhatsApp automation running within 24 hours"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Support in Urdu, English, and regional languages"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Get WhatsApp Automation Support in Pakistan | TheChatFlow</title>
        <meta name="description" content="Contact TheChatFlow for WhatsApp Business API automation in Pakistan. Call +92 340 4634191 or email hello@thechatflow.com. Free consultation available." />
        <meta name="keywords" content="contact TheChatFlow Pakistan, WhatsApp automation support, Pakistani WhatsApp API company, Lahore automation services" />
        <link rel="canonical" href="https://thechatflow.com/contact-us" />
      </Helmet>

      <MegaMenu />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-background to-whatsapp-green/5">
          <div className="container-width">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/f1263ca2-137f-45b8-9360-a8fb1c924f6d.png" 
                  alt="TheChatFlow AI Assistant" 
                  className="w-24 h-24 object-contain animate-float"
                />
              </div>
              
              <h1 className="font-hero text-foreground mb-6">
                Ready to Automate 
                <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h1>
              
              <p className="font-body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Get personalized WhatsApp automation solutions for your Pakistani business. 
                Our local team provides expert support in Urdu and English.
              </p>

              <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-6 py-3 rounded-full text-lg font-medium">
                <CheckCircle className="h-5 w-5 text-whatsapp-green" />
                Free 30-Minute Consultation Available
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding">
          <div className="container-width">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover-lift shadow-card">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-h3 text-foreground mb-3">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <div className="space-y-2">
                      <a 
                        href={method.link}
                        className="block font-bold text-xl text-whatsapp-green hover:text-whatsapp-dark transition-colors"
                      >
                        {method.value}
                      </a>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {method.available}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form & Features */}
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <Card className="shadow-elevated">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="font-h1 text-foreground mb-4">Send Us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 2 hours during business hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-base font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-base font-medium">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 XXX XXXXXXX"
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="business" className="text-base font-medium">Business Type</Label>
                        <Input
                          id="business"
                          name="business"
                          type="text"
                          value={formData.business}
                          onChange={handleInputChange}
                          placeholder="e.g., Solar, E-commerce, Real Estate"
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your business and automation needs..."
                        className="mt-2 min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-whatsapp-green hover:bg-whatsapp-dark text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Features & Why Choose Us */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-h1 text-foreground mb-8">Why Choose TheChatFlow?</h2>
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-whatsapp-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-6 w-6 text-whatsapp-green" />
                        </div>
                        <div>
                          <h3 className="font-h3 text-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <Card className="bg-whatsapp-green/5 border-whatsapp-green/20">
                  <CardContent className="p-6">
                    <h3 className="font-h3 text-foreground mb-4">Need Immediate Help?</h3>
                    <div className="space-y-3">
                      <Button 
                        asChild
                        className="w-full bg-whatsapp-green hover:bg-whatsapp-dark text-white"
                      >
                        <a href="https://wa.me/923404634191" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Chat on WhatsApp Now
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        asChild
                        className="w-full border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white"
                      >
                        <a href="tel:+923404634191">
                          <Phone className="mr-2 h-5 w-5" />
                          Call +92 340 4634191
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="section-padding bg-muted/30">
          <div className="container-width">
            <Card className="shadow-elevated">
              <CardContent className="p-8 text-center">
                <div className="max-w-2xl mx-auto">
                  <h2 className="font-h2 text-foreground mb-6">Business Hours & Response Times</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="w-12 h-12 bg-whatsapp-green rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-h3 text-foreground mb-2">Office Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm font-medium text-whatsapp-green mt-2">Pakistan Standard Time (PST)</p>
                      </div>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-h3 text-foreground mb-2">Response Times</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>WhatsApp: Instant (24/7)</p>
                        <p>Email: Within 2 hours</p>
                        <p>Phone Calls: Within 30 minutes</p>
                        <p className="text-sm font-medium text-blue-600 mt-2">During business hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;