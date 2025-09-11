import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import StructuredData from "@/components/SEO/StructuredData";
import { getPageSEO } from "@/data/seoData";
import { 
  Zap, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  ArrowRight, 
  Star,
  CheckCircle,
  Phone,
  BarChart
} from "lucide-react";

const SuccessStories = () => {
  const seoData = getPageSEO("/success-stories");
  
  const successStories = [
    {
      company: "SunPower Pakistan",
      industry: "Solar Energy",
      location: "Lahore, Pakistan",
      result: "300% Lead Increase",
      previousLeads: "20 leads/month",
      currentLeads: "80+ leads/month",
      icon: Zap,
      color: "bg-yellow-500",
      description: "Automated lead qualification and site visit booking system that transformed their sales process.",
      details: [
        "24/7 WhatsApp automation for solar inquiries",
        "Automated quote generation based on electricity bills", 
        "Site visit booking with engineer assignment",
        "Follow-up sequences for warm prospects"
      ],
      testimonial: "TheChatFlow ne hamare solar business ko revolutionize kar diya. Pehle hum manually har inquiry handle karte the, ab automation se 3x zyada leads aa rahe hain.",
      clientName: "Ahmed Hassan",
      clientPosition: "CEO, SunPower Pakistan"
    },
    {
      company: "Global Visa Consultants", 
      industry: "Education/Immigration",
      location: "Karachi, Pakistan",
      result: "500% Application Growth",
      previousLeads: "15 applications/month",
      currentLeads: "90+ applications/month", 
      icon: GraduationCap,
      color: "bg-blue-500",
      description: "24/7 inquiry handling in Urdu and English with instant document verification.",
      details: [
        "Multi-language support (Urdu/English)",
        "Document checklist automation",
        "Appointment booking with counselors",
        "University application tracking system"
      ],
      testimonial: "Humari visa consultancy ab 24/7 operate karti hai. Students ko instant replies milte hain aur humara workload 70% kam ho gaya hai.",
      clientName: "Sarah Khan",
      clientPosition: "Director, Global Visa Consultants"
    },
    {
      company: "Prime Real Estate",
      industry: "Real Estate",
      location: "Islamabad, Pakistan", 
      result: "10x More Property Leads",
      previousLeads: "10 leads/month",
      currentLeads: "100+ leads/month",
      icon: TrendingUp,
      color: "bg-green-500",
      description: "Instagram integration and automated follow-ups that skyrocketed their property sales.",
      details: [
        "Instagram DM automation integration",
        "Property matching based on budget/location",
        "Site visit scheduling automation",
        "Mortgage calculator integration"
      ],
      testimonial: "Real estate mein competition bohat hai. TheChatFlow ki waja se hum competitors se aage hain. Har inquiry ka instant response milta hai.",
      clientName: "Muhammad Ali",
      clientPosition: "Sales Director, Prime Real Estate"
    }
  ];

  const metrics = [
    { label: "Total Businesses Served", value: "500+", icon: Users },
    { label: "Messages Automated Daily", value: "50,000+", icon: MessageCircle },
    { label: "Average ROI Increase", value: "400%", icon: BarChart },
    { label: "Customer Satisfaction", value: "95%", icon: Star }
  ];

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        path="/success-stories"
        keywords={seoData.keywords}
        type="website"
      />
      <StructuredData 
        type="Organization"
        data={{
          name: "TheChatFlow Success Stories",
          description: "Real success stories from Pakistani businesses using WhatsApp automation",
          url: "https://thechatflow.com/success-stories"
        }}
      />
      <MegaMenu />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-whatsapp-green/5">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-6 py-3 rounded-full text-lg font-semibold">
              <Star className="h-5 w-5 text-whatsapp-green" />
              Real Pakistani Business Success Stories
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              From Struggling to 
              <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                Scaling Success
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See how Pakistani businesses transformed their operations with TheChatFlow's AI automation. 
              Real results from real companies across Pakistan.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-whatsapp-green/10 rounded-2xl">
                        <metric.icon className="h-6 w-6 text-whatsapp-green" />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container-width">
          <div className="space-y-20">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all hover-lift">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-6 lg:gap-12 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content Side */}
                    <div className={`p-6 md:p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="space-y-6 lg:space-y-8">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 ${story.color} rounded-2xl flex items-center justify-center`}>
                            <story.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">{story.company}</h3>
                            <p className="text-sm md:text-base lg:text-lg text-muted-foreground">{story.industry} • {story.location}</p>
                          </div>
                        </div>

                        <div className="bg-whatsapp-green/10 rounded-2xl p-6">
                          <div className="text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-whatsapp-green mb-2">{story.result}</div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>Before: {story.previousLeads}</span>
                              <ArrowRight className="h-4 w-4 text-whatsapp-green" />
                              <span>After: {story.currentLeads}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                          {story.description}
                        </p>

                        <div className="space-y-4">
                          <h4 className="text-lg md:text-xl font-semibold text-foreground">Key Implementation Features:</h4>
                          <div className="grid gap-3">
                            {story.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                                <span className="text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-whatsapp-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {story.clientName.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm md:text-base lg:text-lg italic text-muted-foreground leading-relaxed mb-4">
                                "{story.testimonial}"
                              </p>
                              <div>
                                <p className="font-semibold text-foreground">{story.clientName}</p>
                                <p className="text-sm text-muted-foreground">{story.clientPosition}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className={`bg-gradient-to-br from-whatsapp-green/5 to-whatsapp-dark/5 p-6 md:p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center space-y-8">
                        <div className={`w-32 h-32 ${story.color} rounded-3xl flex items-center justify-center mx-auto`}>
                          <story.icon className="h-16 w-16 text-white" />
                        </div>
                        <div className="space-y-4">
                          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-whatsapp-green">{story.result.split(' ')[0]}</div>
                          <p className="text-xl md:text-2xl font-semibold text-foreground">{story.result.split(' ').slice(1).join(' ')}</p>
                          <p className="text-base md:text-lg text-muted-foreground">{story.industry} Success</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Write Your Success Story?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Join 500+ Pakistani businesses that have transformed their operations with TheChatFlow. 
              Start your automation journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-whatsapp-green hover:bg-white/90 hover:text-whatsapp-dark border-2 border-white transition-all duration-300 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105"
                onClick={() => window.location.href = '/contact'}
              >
                <Phone className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5" />
                Book Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-whatsapp-green transition-all duration-300 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold hover:scale-105 backdrop-blur-sm"
                onClick={() => window.open('https://calendly.com/thechatflow', '_blank')}
              >
                Watch Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SuccessStories;