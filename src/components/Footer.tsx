import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-foreground text-white relative">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl">TheChatFlow.com</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                WhatsApp automation made simple. Transform your customer communication with AI-powered chat solutions for Pakistani businesses.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://wa.me/923171634191" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-whatsapp-green transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/thechatflowai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-whatsapp-green transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/thechatflowai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-whatsapp-green transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Navigation</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/" className="hover:text-whatsapp-green transition-colors">Home</Link></li>
                <li><Link to="/blog" className="hover:text-whatsapp-green transition-colors">Blog</Link></li>
                <li><Link to="/success-stories" className="hover:text-whatsapp-green transition-colors">Success Stories</Link></li>
                <li><Link to="/contact" className="hover:text-whatsapp-green transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-whatsapp-green" />
                  <span>03171634191</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-whatsapp-green" />
                  <span>hello@thechatflow.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-whatsapp-green" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
              
              <div className="bg-white/15 border border-white/20 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-xl text-white">Need Help?</h4>
                <p className="text-lg text-white/90 font-medium">Our support team replies in minutes</p>
                <Link to="/contact">
                  <button className="bg-whatsapp-green hover:bg-whatsapp-dark text-white px-6 py-3 rounded-xl text-base font-bold transition-colors w-full shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-width py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
              <span>© 2025 TheChatFlow Pakistan. All rights reserved.</span>
              <Link to="/privacy-policy" className="hover:text-whatsapp-green transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-whatsapp-green transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-whatsapp-green transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Made with ❤️ in Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-8 right-6 w-16 h-16 bg-whatsapp-green hover:bg-whatsapp-dark text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 hover:scale-110 border-4 border-white"
        aria-label="Back to top"
      >
        <ArrowUp className="h-7 w-7" />
      </button>
    </footer>
  );
};

export default Footer;