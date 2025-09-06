import { Helmet } from "react-helmet";
import MegaMenu from "@/components/MegaMenu";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  GraduationCap, 
  TrendingUp, 
  Star, 
  Users, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Building,
  Globe,
  Target
} from "lucide-react";

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      company: "SunPower Pakistan",
      industry: "Solar Energy",
      location: "Lahore, Pakistan",
      result: "300% Lead Increase",
      timeframe: "3 months",
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      description: "Automated lead qualification and site visit booking through WhatsApp Business API",
      details: {
        challenge: "Manual lead handling was causing 70% lead loss and delayed responses",
        solution: "24/7 automated WhatsApp responses with instant quote generation",
        results: [
          "300% increase in qualified leads",
          "90% reduction in response time", 
          "15 lakhs monthly revenue increase",
          "40+ installations per month"
        ]
      },
      testimonial: {
        text: "TheChatFlow ne hamara business completely transform kar diya. Ab hum har lead ko instantly handle karte hain aur customers bohot khush hain.",
        author: "Ahmad Khan",
        position: "CEO, SunPower Pakistan"
      }
    },
    {
      id: 2,
      company: "Global Visa Consultants", 
      industry: "Education/Immigration",
      location: "Islamabad, Pakistan",
      result: "500% Application Increase",
      timeframe: "4 months",
      icon: GraduationCap,
      color: "from-blue-400 to-purple-500",
      description: "24/7 inquiry handling in Urdu and English with automated document collection",
      details: {
        challenge: "Missing international inquiries due to time zone differences",
        solution: "Multilingual AI chatbot with document automation and appointment booking",
        results: [
          "500% increase in visa applications",
          "24/7 multilingual support",
          "60% faster document processing",
          "200+ successful visa approvals"
        ]
      },
      testimonial: {
        text: "International students ab direct hamse connect ho sakte hain. Response time 2 minutes se bhi kam hai. Amazing results!",
        author: "Sarah Ahmed",
        position: "Director, Global Visa"
      }
    },
    {
      id: 3,
      company: "Prime Real Estate",
      industry: "Real Estate",
      location: "Karachi, Pakistan", 
      result: "10x More Property Leads",
      timeframe: "2 months",
      icon: Building,
      color: "from-green-400 to-teal-500",
      description: "Instagram integration with automated property matching and follow-ups",
      details: {
        challenge: "Low conversion from social media property inquiries",
        solution: "Instagram + WhatsApp automation with virtual property tours",
        results: [
          "1000% increase in property leads",
          "50+ properties sold monthly",
          "80% faster client response",
          "25 crore monthly sales volume"
        ]
      },
      testimonial: {
        text: "Social media se jo leads aate hain, ab sab convert ho rahe hain. Automated follow-up system brilliant hai!",
        author: "Imran Sheikh",
        position: "Managing Director, Prime Real Estate"
      }
    },
    {
      id: 4,
      company: "Pak Mart E-commerce",
      industry: "E-commerce",
      location: "Lahore, Pakistan",
      result: "400% Sales Growth",
      timeframe: "3 months",
      icon: Globe,
      color: "from-pink-400 to-red-500",
      description: "Complete order automation from WhatsApp to delivery tracking",
      details: {
        challenge: "Cart abandonment rate was 85% with manual order processing",
        solution: "WhatsApp catalog integration with automated order management",
        results: [
          "400% increase in online sales",
          "60% reduction in cart abandonment",
          "24/7 customer support",
          "2000+ orders processed monthly"
        ]
      },
      testimonial: {
        text: "Ab customers WhatsApp se directly order kar sakte hain. Delivery tracking bhi automatic hai. Game changer!",
        author: "Fatima Khan",
        position: "Founder, Pak Mart"
      }
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Pakistani Businesses" },
    { icon: MessageCircle, value: "10M+", label: "Messages Automated" },
    { icon: Star, value: "95%", label: "Customer Satisfaction" },
    { icon: Target, value: "300%", label: "Average Growth" }
  ];

  return (
    <>
      <Helmet>
        <title>Success Stories - Pakistani Businesses Growing with WhatsApp Automation | TheChatFlow</title>
        <meta name="description" content="Real success stories from Pakistani businesses using TheChatFlow WhatsApp automation. See how solar companies, visa consultants, and e-commerce stores achieved 300%+ growth." />
        <meta name="keywords" content="Pakistan WhatsApp success stories, business automation case studies, Pakistani companies growth, WhatsApp API results" />
        <link rel="canonical" href="https://thechatflow.com/success-stories" />
      </Helmet>

      <MegaMenu />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-background to-whatsapp-green/5">
          <div className="container-width">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="h-4 w-4 text-whatsapp-green" />
                Real Pakistani Business Results
              </div>
              
              <h1 className="font-hero text-foreground mb-6">
                Success Stories
                <span className="block bg-gradient-to-r from-whatsapp-green via-whatsapp-dark to-whatsapp-teal bg-clip-text text-transparent">
                  From Pakistan
                </span>
              </h1>
              
              <p className="font-body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover how Pakistani businesses are achieving extraordinary growth with WhatsApp automation. 
                From solar companies to visa consultants, see real results from real businesses.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 bg-whatsapp-green/10 rounded-2xl">
                        <stat.icon className="h-6 w-6 text-whatsapp-green" />
                      </div>
                    </div>
                    <div className="font-bold text-3xl text-foreground">{stat.value}</div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section-padding">
          <div className="container-width">
            <div className="space-y-16">
              {successStories.map((story, index) => (
                <Card key={story.id} className="overflow-hidden shadow-elevated hover-lift">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      
                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${story.color} flex items-center justify-center`}>
                            <story.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-h2 text-foreground">{story.company}</h3>
                            <p className="text-muted-foreground">{story.industry} • {story.location}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-dark px-4 py-2 rounded-full text-sm font-bold mb-4">
                            <TrendingUp className="h-4 w-4" />
                            {story.result} in {story.timeframe}
                          </div>
                          <p className="font-body-lg text-muted-foreground">{story.description}</p>
                        </div>

                        {/* Results */}
                        <div className="mb-8">
                          <h4 className="font-h3 text-foreground mb-4">Key Results:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {story.details.results.map((result, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-whatsapp-green flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-whatsapp-green/5 rounded-xl p-6">
                          <p className="font-body text-foreground mb-4 italic">"{story.testimonial.text}"</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-whatsapp-green rounded-full flex items-center justify-center text-white font-bold">
                              {story.testimonial.author.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{story.testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{story.testimonial.position}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Visual/Graphic Side */}
                      <div className={`bg-gradient-to-br ${story.color} p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                        <div className="text-center text-white">
                          <story.icon className="h-24 w-24 mx-auto mb-6 opacity-80" />
                          <div className="space-y-4">
                            <div>
                              <div className="text-5xl font-bold mb-2">{story.result.split(' ')[0]}</div>
                              <div className="text-xl opacity-90">{story.result.split(' ').slice(1).join(' ')}</div>
                            </div>
                            <div className="text-lg opacity-80">in just {story.timeframe}</div>
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
        <section className="section-padding bg-gradient-to-br from-whatsapp-green via-whatsapp-dark to-whatsapp-teal">
          <div className="container-width text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-h1 text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="font-body-lg text-white/90 mb-8">
                Join 500+ Pakistani businesses already growing with WhatsApp automation. 
                Start your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-whatsapp-dark hover:bg-white/90">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-whatsapp-dark">
                  Book Demo Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SuccessStories;