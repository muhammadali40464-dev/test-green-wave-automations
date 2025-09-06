import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight, Users, Zap, GraduationCap, Mail } from "lucide-react";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>TheChatFlow Blog - Master WhatsApp Automation for Pakistani Businesses</title>
        <meta name="description" content="Learn WhatsApp automation strategies, Pakistani business case studies, and AI integration tips. Master business automation with TheChatFlow expert guides." />
        <meta name="keywords" content="WhatsApp automation Pakistan, business automation blog, Pakistani case studies, AI integration, WhatsApp marketing" />
        <link rel="canonical" href="https://thechatflow.com/blog" />
        
        <meta property="og:title" content="TheChatFlow Blog - WhatsApp Automation for Pakistani Businesses" />
        <meta property="og:description" content="Master WhatsApp automation with expert guides, case studies, and strategies for Pakistani businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thechatflow.com/blog" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "TheChatFlow Blog",
            "description": "Master WhatsApp automation for Pakistani businesses",
            "url": "https://thechatflow.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "TheChatFlow"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
          <div className="container-width">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">TC</span>
                </div>
                TheChatFlow
              </Link>
              
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                <Link to="/blog" className="text-foreground font-medium">Blog</Link>
                <Button variant="hero" size="sm" asChild>
                  <Link to="/#pricing">Get Started</Link>
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="section-padding gradient-background">
          <div className="container-width text-center">
            <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-2 rounded-full font-medium text-sm mb-6">
              <BookOpen className="h-4 w-4" />
              TheChatFlow Blog
            </div>
            
            <h1 className="font-h1 text-foreground mb-4">
              Master WhatsApp Automation
              <span className="block bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">
                for Pakistani Businesses
              </span>
            </h1>
            
            <p className="font-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Learn proven strategies, real case studies, and expert tips to grow your Pakistani business with WhatsApp automation
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="section-padding">
          <div className="container-width">
            <h2 className="font-h2 text-center mb-12">Featured Article</h2>
            
            <Card className="max-w-4xl mx-auto overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      January 15, 2025
                    </div>
                    <CardTitle className="font-h3 mb-2">
                      Complete Guide to WhatsApp Business API in Pakistan 2025
                    </CardTitle>
                    <CardDescription className="font-body-base">
                      Master WhatsApp Business API setup, pricing, and implementation for Pakistani businesses. 
                      Complete step-by-step guide with real examples and cost comparisons.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0 mb-6">
                    <p className="text-muted-foreground">
                      With 180M+ WhatsApp users in Pakistan, businesses are transforming customer communication 
                      through official Business API. Learn requirements, verification process, pricing structures, 
                      and how TheChatFlow makes implementation seamless...
                    </p>
                  </CardContent>
                  
                  <CardFooter className="p-0">
                    <Button variant="hero" asChild>
                      <Link to="/blog/whatsapp-business-api-pakistan-guide-2025">
                        Read Complete Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
                
                <div className="md:w-1/3 bg-gradient-to-br from-whatsapp-green/10 to-whatsapp-dark/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-whatsapp-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    <p className="font-medium text-whatsapp-green">Complete Guide</p>
                    <p className="text-sm text-muted-foreground">15 min read</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent Articles Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <h2 className="font-h2 text-center mb-12">Recent Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Solar Article */}
              <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    January 12, 2025
                  </div>
                  <CardTitle className="font-h4 group-hover:text-whatsapp-green transition-colors">
                    How Solar Companies in Pakistan Can 10X Leads with WhatsApp Automation
                  </CardTitle>
                  <CardDescription>
                    Real case study showing 300% lead increase for Pakistani solar companies using automated WhatsApp flows.
                  </CardDescription>
                </CardHeader>
                
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/blog/solar-companies-whatsapp-automation-pakistan">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Visa Article */}
              <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    January 10, 2025
                  </div>
                  <CardTitle className="font-h4 group-hover:text-whatsapp-green transition-colors">
                    Visa Consultancy Success: Automating Customer Support in Urdu
                  </CardTitle>
                  <CardDescription>
                    How visa consultants handle 500+ daily inquiries with WhatsApp automation in Urdu and English.
                  </CardDescription>
                </CardHeader>
                
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/blog/visa-consultancy-whatsapp-automation-urdu">
                      Read Success Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* E-commerce Article */}
              <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6">
                  <div className="w-16 h-16 bg-whatsapp-green rounded-2xl flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    January 8, 2025
                  </div>
                  <CardTitle className="font-h4 group-hover:text-whatsapp-green transition-colors">
                    E-commerce WhatsApp Marketing: Pakistani Business Case Studies
                  </CardTitle>
                  <CardDescription>
                    How Pakistani e-commerce brands increased sales by 400% using WhatsApp automation strategies.
                  </CardDescription>
                </CardHeader>
                
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/blog/ecommerce-whatsapp-marketing-pakistan">
                      Read Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories & Newsletter */}
        <section className="section-padding">
          <div className="container-width">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Categories */}
              <div className="lg:col-span-1">
                <h3 className="font-h3 mb-6">Categories</h3>
                <div className="space-y-3">
                  {[
                    "WhatsApp Marketing",
                    "Business Automation", 
                    "Pakistani Case Studies",
                    "AI Integration",
                    "Industry Solutions"
                  ].map((category) => (
                    <div key={category} className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer">
                      <span className="font-medium">{category}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-2">
                <Card className="p-8 gradient-cta text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="font-h3 mb-2">Get Weekly Automation Tips</h3>
                    <p className="text-white/80 mb-6">
                      Join 5,000+ Pakistani business owners getting weekly WhatsApp automation strategies, 
                      case studies, and exclusive implementation guides.
                    </p>
                    
                    <div className="flex gap-3 max-w-md mx-auto">
                      <Input 
                        type="email" 
                        placeholder="Enter your email"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                      <Button variant="secondary" className="bg-white text-whatsapp-green hover:bg-white/90">
                        Subscribe
                      </Button>
                    </div>
                    
                    <p className="text-xs text-white/60 mt-3">
                      No spam. Unsubscribe anytime. Used by 500+ Pakistani businesses.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;