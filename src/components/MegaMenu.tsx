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
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        <div className="flex items-center justify-between h-40">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center gap-2" onClick={closeAllDropdowns}>
            <img 
              src="/lovable-uploads/656ca194-7b96-4277-91f8-6e73c293d23f.png" 
              alt="Company Logo" 
              className="w-28 h-28 lg:w-32 lg:h-32 object-contain"
            />
            <span className="text-sm lg:text-base text-whatsapp-green font-bold">All-in-One Automation</span>
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
              window.location.href = '/contact';
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
                window.location.href = '/contact';
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