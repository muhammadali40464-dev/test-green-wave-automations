import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white'
    } border-b`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Robot */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="relative">
              <img 
                src="/lovable-uploads/f1263ca2-137f-45b8-9360-a8fb1c924f6d.png" 
                alt="TheChatFlow AI Robot" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-foreground">TheChatFlow</span>
              <span className="text-sm text-whatsapp-green font-medium">AI WhatsApp Automation</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-whatsapp-green transition-colors font-medium text-lg"
            >
              Home
            </Link>

            <Link 
              to="/blog" 
              className="text-muted-foreground hover:text-whatsapp-green transition-colors font-medium text-lg"
            >
              Blog
            </Link>

            <Link 
              to="/success-stories" 
              className="text-muted-foreground hover:text-whatsapp-green transition-colors font-medium text-lg"
            >
              Success Stories
            </Link>

            <Link 
              to="/contact-us" 
              className="text-muted-foreground hover:text-whatsapp-green transition-colors font-medium text-lg"
            >
              Contact Us
            </Link>

            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="bg-whatsapp-green hover:bg-whatsapp-dark text-white px-8 py-3 text-lg font-semibold"
            >
              <Link to="/contact-us">Get Started</Link>
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
            <div className="p-6 space-y-6">
              <Link 
                to="/" 
                className="block py-3 text-muted-foreground hover:text-whatsapp-green transition-colors font-medium text-lg"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <Link 
                to="/blog" 
                className="block py-3 text-muted-foreground hover:text-whatsapp-green transition-colors font-medium text-lg"
                onClick={closeMenu}
              >
                Blog
              </Link>

              <Link 
                to="/success-stories" 
                className="block py-3 text-muted-foreground hover:text-whatsapp-green transition-colors font-medium text-lg"
                onClick={closeMenu}
              >
                Success Stories
              </Link>

              <Link 
                to="/contact-us" 
                className="block py-3 text-muted-foreground hover:text-whatsapp-green transition-colors font-medium text-lg"
                onClick={closeMenu}
              >
                Contact Us
              </Link>

              <Button 
                variant="default" 
                size="lg" 
                asChild
                className="w-full bg-whatsapp-green hover:bg-whatsapp-dark text-white text-lg font-semibold"
              >
                <Link to="/contact-us" onClick={closeMenu}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MegaMenu;