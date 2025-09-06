import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
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
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-whatsapp-green transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-whatsapp-green transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-whatsapp-green transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-whatsapp-green transition-colors">
                  <Linkedin className="h-5 w-5" />
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
                  <span>03404634191</span>
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
              
              <div className="bg-white/5 rounded-lg p-4 space-y-2">
                <p className="font-medium text-sm">Need Help?</p>
                <p className="text-sm text-white/80">Our support team replies in minutes</p>
                <Link to="/contact">
                  <button className="bg-whatsapp-green hover:bg-whatsapp-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
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
    </footer>
  );
};

export default Footer;