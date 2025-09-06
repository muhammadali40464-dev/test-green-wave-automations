import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  BookOpen, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  Zap,
  GraduationCap
} from "lucide-react";

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const blogCategories = [
    {
      title: "WhatsApp Automation",
      description: "Complete guides for business automation",
      icon: MessageCircle,
      articles: [
        { title: "WhatsApp Business API Guide Pakistan 2025", link: "/blog/whatsapp-business-api-pakistan-guide-2025" },
        { title: "E-commerce WhatsApp Marketing", link: "/blog" },
        { title: "WhatsApp Templates Best Practices", link: "/blog" }
      ]
    },
    {
      title: "Industry Solutions", 
      description: "Automation guides by industry",
      icon: TrendingUp,
      articles: [
        { title: "Solar Companies: 300% Lead Increase", link: "/blog/solar-companies-whatsapp-automation-pakistan" },
        { title: "Visa Consultancy Automation", link: "/blog/visa-consultancy-whatsapp-automation-urdu" },
        { title: "Real Estate Automation", link: "/blog" }
      ]
    },
    {
      title: "Pakistani Case Studies",
      description: "Real success stories from local businesses", 
      icon: Star,
      articles: [
        { title: "Karachi E-commerce Success", link: "/blog" },
        { title: "Lahore Solar Company Growth", link: "/blog" },
        { title: "Islamabad Consultancy Results", link: "/blog" }
      ]
    }
  ];

  const successStories = [
    {
      company: "SunPower Pakistan",
      industry: "Solar Energy",
      result: "300% Lead Increase",
      icon: Zap,
      description: "Automated lead qualification and site visit booking"
    },
    {
      company: "Global Visa Consultants", 
      industry: "Education/Immigration",
      result: "500% Applications",
      icon: GraduationCap,
      description: "24/7 inquiry handling in Urdu and English"
    },
    {
      company: "Prime Real Estate",
      industry: "Real Estate",
      result: "10x More Leads",
      icon: TrendingUp,
      description: "Instagram integration and automated follow-ups"
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white'
    } border-b`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Robot */}
          <Link to="/" className="flex items-center gap-3" onClick={closeAllDropdowns}>
            <div className="relative">
              <img 
                src="/lovable-uploads/f1263ca2-137f-45b8-9360-a8fb1c924f6d.png" 
                alt="TheChatFlow AI Robot" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">TheChatFlow</span>
              <span className="text-xs text-whatsapp-green font-medium">AI WhatsApp Automation</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-whatsapp-green transition-colors font-medium">
              Home
            </Link>

            {/* Blog Mega Menu */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-muted-foreground hover:text-whatsapp-green transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('blog')}
              >
                Blog <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'blog' && (
                <div 
                  className="absolute top-full left-0 w-[800px] bg-white border shadow-xl rounded-lg mt-2 p-6"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {blogCategories.map((category, index) => (
                      <Card key={index} className="border-0 shadow-none hover:bg-gray-50 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-whatsapp-green/10 rounded-lg flex items-center justify-center">
                              <category.icon className="h-4 w-4 text-whatsapp-green" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{category.title}</h3>
                              <p className="text-xs text-muted-foreground">{category.description}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {category.articles.map((article, idx) => (
                              <Link 
                                key={idx}
                                to={article.link}
                                className="block text-sm text-muted-foreground hover:text-whatsapp-green transition-colors"
                                onClick={closeAllDropdowns}
                              >
                                {article.title}
                              </Link>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="border-t mt-6 pt-4">
                    <Link to="/blog" onClick={closeAllDropdowns}>
                      <Button variant="outline" className="w-full">
                        <BookOpen className="mr-2 h-4 w-4" />
                        View All Articles
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Success Stories Mega Menu */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-muted-foreground hover:text-whatsapp-green transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('success')}
              >
                Success Stories <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'success' && (
                <div 
                  className="absolute top-full left-0 w-[600px] bg-white border shadow-xl rounded-lg mt-2 p-6"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <h3 className="font-h4 text-foreground mb-4">Pakistani Business Success Stories</h3>
                  <div className="space-y-4">
                    {successStories.map((story, index) => (
                      <Card key={index} className="border-0 shadow-none hover:bg-gray-50 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-whatsapp-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <story.icon className="h-5 w-5 text-whatsapp-green" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-foreground">{story.company}</h4>
                                <span className="text-sm font-bold text-whatsapp-green">{story.result}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-1">{story.industry}</p>
                              <p className="text-sm text-muted-foreground">{story.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="border-t mt-4 pt-4">
                    <Button variant="outline" className="w-full" onClick={closeAllDropdowns}>
                      <Users className="mr-2 h-4 w-4" />
                      View More Success Stories
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us Mega Menu */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-muted-foreground hover:text-whatsapp-green transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('contact')}
              >
                Contact Us <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'contact' && (
                <div 
                  className="absolute top-full right-0 w-[400px] bg-white border shadow-xl rounded-lg mt-2 p-6"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="text-center mb-6">
                    <img 
                      src="/lovable-uploads/f1263ca2-137f-45b8-9360-a8fb1c924f6d.png" 
                      alt="TheChatFlow AI Assistant" 
                      className="w-16 h-16 mx-auto mb-3 object-contain"
                    />
                    <h3 className="font-h4 text-foreground mb-2">Ready to Automate Your Business?</h3>
                    <p className="text-sm text-muted-foreground">Get in touch with our Pakistani team for personalized support</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-whatsapp-green/5 rounded-lg">
                      <div className="w-8 h-8 bg-whatsapp-green rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">WhatsApp & Call</p>
                        <a href="tel:+923404634191" className="text-sm text-whatsapp-green hover:text-whatsapp-dark">
                          +92 340 4634191
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email Support</p>
                        <a href="mailto:hello@thechatflow.com" className="text-sm text-blue-600 hover:text-blue-800">
                          hello@thechatflow.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">Lahore, Pakistan</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t mt-6 pt-4 space-y-3">
                    <Button variant="hero" className="w-full" onClick={closeAllDropdowns}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Start Free Consultation
                    </Button>
                    <Button variant="outline" className="w-full" onClick={closeAllDropdowns}>
                      Book Demo Call
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Button variant="hero" size="sm" asChild>
              <Link to="/#pricing">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="p-4 space-y-4">
              <Link 
                to="/" 
                className="block py-2 text-muted-foreground hover:text-whatsapp-green transition-colors"
                onClick={closeAllDropdowns}
              >
                Home
              </Link>
              
              {/* Mobile Blog Section */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-whatsapp-green transition-colors"
                  onClick={() => toggleDropdown('blog-mobile')}
                >
                  Blog <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'blog-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'blog-mobile' && (
                  <div className="mt-2 pl-4 space-y-3">
                    {blogCategories.map((category, index) => (
                      <div key={index} className="pb-3 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-2 mb-2">
                          <category.icon className="h-4 w-4 text-whatsapp-green" />
                          <span className="font-medium text-sm">{category.title}</span>
                        </div>
                        <div className="space-y-1 pl-6">
                          {category.articles.map((article, idx) => (
                            <Link
                              key={idx}
                              to={article.link}
                              className="block text-sm text-muted-foreground hover:text-whatsapp-green"
                              onClick={closeAllDropdowns}
                            >
                              {article.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link to="/blog" onClick={closeAllDropdowns}>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        <BookOpen className="mr-2 h-4 w-4" />
                        View All Articles
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Success Stories */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-whatsapp-green transition-colors"
                  onClick={() => toggleDropdown('success-mobile')}
                >
                  Success Stories <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'success-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'success-mobile' && (
                  <div className="mt-2 pl-4 space-y-3">
                    {successStories.map((story, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <story.icon className="h-4 w-4 text-whatsapp-green" />
                          <span className="font-medium text-sm">{story.company}</span>
                          <span className="text-xs font-bold text-whatsapp-green ml-auto">{story.result}</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-7">{story.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Contact */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-whatsapp-green transition-colors"
                  onClick={() => toggleDropdown('contact-mobile')}
                >
                  Contact Us <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'contact-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'contact-mobile' && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div className="text-center mb-4">
                      <img 
                        src="/lovable-uploads/f1263ca2-137f-45b8-9360-a8fb1c924f6d.png" 
                        alt="TheChatFlow AI Assistant" 
                        className="w-12 h-12 mx-auto mb-2 object-contain"
                      />
                      <p className="text-sm text-muted-foreground">Get in touch with our team</p>
                    </div>
                    
                    <div className="space-y-3">
                      <a href="tel:+923404634191" className="flex items-center gap-3 p-3 bg-whatsapp-green/5 rounded-lg">
                        <Phone className="h-4 w-4 text-whatsapp-green" />
                        <span className="text-sm">+92 340 4634191</span>
                      </a>
                      
                      <a href="mailto:hello@thechatflow.com" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">hello@thechatflow.com</span>
                      </a>
                    </div>
                    
                    <Button variant="hero" size="sm" className="w-full mt-4" onClick={closeAllDropdowns}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Start Free Consultation
                    </Button>
                  </div>
                )}
              </div>

              <Button variant="hero" size="sm" className="w-full" asChild>
                <Link to="/#pricing" onClick={closeAllDropdowns}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MegaMenu;