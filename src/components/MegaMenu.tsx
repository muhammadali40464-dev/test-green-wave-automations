import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  MessageCircle
} from "lucide-react";

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllDropdowns = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white'
    } border-b`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo without Robot */}
          <Link to="/" className="flex items-center gap-3" onClick={closeAllDropdowns}>
            <div className="w-12 h-12 bg-whatsapp-green rounded-xl flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-foreground">TheChatFlow</span>
              <span className="text-sm text-whatsapp-green font-medium">All-in-One Chat Automation</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link to="/" className="text-lg text-muted-foreground hover:text-whatsapp-green transition-colors font-semibold">
              Home
            </Link>

            <Link to="/blog" className="text-lg text-muted-foreground hover:text-whatsapp-green transition-colors font-semibold">
              Blog
            </Link>

            <Link to="/success-stories" className="text-lg text-muted-foreground hover:text-whatsapp-green transition-colors font-semibold">
              Success Stories
            </Link>

            <Link to="/contact" className="text-lg text-muted-foreground hover:text-whatsapp-green transition-colors font-semibold">
              Contact Us
            </Link>

            <Button variant="hero" size="sm" onClick={() => {
              window.location.href = '/#pricing';
              setTimeout(() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}>
              Get Started
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
                className="block py-3 text-lg text-muted-foreground hover:text-whatsapp-green transition-colors font-semibold"
                onClick={closeAllDropdowns}
              >
                Home
              </Link>
              
              <Link 
                to="/blog" 
                className="block py-3 text-lg text-muted-foreground hover:text-whatsapp-green transition-colors font-semibold"
                onClick={closeAllDropdowns}
              >
                Blog
              </Link>

              <Link 
                to="/success-stories" 
                className="block py-3 text-lg text-muted-foreground hover:text-whatsapp-green transition-colors font-semibold"
                onClick={closeAllDropdowns}
              >
                Success Stories
              </Link>

              <Link 
                to="/contact" 
                className="block py-3 text-lg text-muted-foreground hover:text-whatsapp-green transition-colors font-semibold"
                onClick={closeAllDropdowns}
              >
                Contact Us
              </Link>

              <Button variant="hero" size="sm" className="w-full mt-4" onClick={() => {
                closeAllDropdowns();
                window.location.href = '/#pricing';
                setTimeout(() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MegaMenu;