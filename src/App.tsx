import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransitionLoader from "@/components/PageTransitionLoader";

declare global {
  interface Window {
    fbq: any;
  }
}

// Direct imports - no lazy loading to prevent blank screens
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import SuccessStories from "./pages/SuccessStories";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import SolarAutomation from "./pages/blog/SolarAutomation";
import VisaConsultancy from "./pages/blog/VisaConsultancy";
import ChatbotGuideSmallBusiness from "./pages/blog/ChatbotGuideSmallBusiness";
import WhatsAppAPIvsRegular from "./pages/blog/WhatsAppAPIvsRegular";
import WhatsAppAPIGuide from "./pages/blog/WhatsAppAPIGuide";
import ChatbotAutomationGuide from "./pages/blog/ChatbotAutomationGuide";
import AiAgentVsChatbot from "./pages/blog/AiAgentVsChatbot";
import ChatbotPricePakistan from "./pages/blog/ChatbotPricePakistan";
import WhatsAppPricingPakistan from "./pages/blog/WhatsAppPricingPakistan";
import CustomChatbotDevelopment from "./pages/services/CustomChatbotDevelopment";
import AiAgentDevelopment from "./pages/services/AiAgentDevelopment";
import EcommerceChatbotDevelopment from "./pages/services/EcommerceChatbotDevelopment";
import InstagramMessengerAutomation from "./pages/services/InstagramMessengerAutomation";
import WhatsAppChatbotDevelopment from "./pages/services/WhatsAppChatbotDevelopment";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

// Route transition management component
const RouteTransitionManager = () => {
  const location = useLocation();
  const { pathname, search, hash } = location;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousPath, setPreviousPath] = useState(pathname + search + hash);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Enhanced Meta Pixel tracking for SPA route changes - tracks pathname, search, and hash changes
  useEffect(() => {
    const currentPath = pathname + search + hash;
    const pageTitle = document.title;
    const referrer = document.referrer;
    
    if (typeof window.fbq === 'function') {
      // Standard PageView event
      window.fbq('track', 'PageView');
      
      // Custom SPA tracking event with additional context
      window.fbq('trackCustom', 'VirtualPageViewSPA', {
        path: currentPath,
        title: pageTitle,
        referrer: referrer || 'direct'
      });
      
      console.log('📊 Meta Pixel SPA PageView sent:', { 
        path: currentPath, 
        title: pageTitle, 
        referrer: referrer || 'direct' 
      });
    } else if (window.fbq && window.fbq.queue) {
      window.fbq('track', 'PageView');
      window.fbq('trackCustom', 'VirtualPageViewSPA', {
        path: currentPath,
        title: pageTitle,
        referrer: referrer || 'direct'
      });
    }
  }, [pathname, search, hash]);

  useEffect(() => {
    const currentPath = pathname + search + hash;
    if (currentPath !== previousPath) {
      setIsTransitioning(true);
      setPreviousPath(currentPath);
      
      // Show transition loader for smooth experience
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600); // Short, realistic transition time

      return () => clearTimeout(timer);
    }
  }, [pathname, search, hash, previousPath]);

  return isTransitioning ? <PageTransitionLoader route={pathname} duration={500} /> : null;
};

const queryClient = new QueryClient();

// Route tree shared by the browser entry and the build-time prerender.
// Router is supplied by the caller: BrowserRouter in the browser, StaticRouter at build.
export const AppRoutes = () => {
  return (
    <>
      {/* Rendered inside the shared tree so the server HTML and the first
          client render match exactly, otherwise hydration mismatches. */}
      <Toaster />
      <Sonner />
      <RouteTransitionManager />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/blog/chatbot-automation-guide-pakistan" element={<ChatbotAutomationGuide />} />
        <Route path="/blog/ai-agent-vs-chatbot" element={<AiAgentVsChatbot />} />
        <Route path="/blog/chatbot-price-pakistan" element={<ChatbotPricePakistan />} />
        <Route path="/blog/whatsapp-api-pricing-pakistan" element={<WhatsAppPricingPakistan />} />
        <Route path="/blog/solar-companies-whatsapp-automation-pakistan" element={<SolarAutomation />} />
        <Route path="/blog/visa-consultancy-whatsapp-automation-urdu" element={<VisaConsultancy />} />
        <Route path="/blog/how-chatbots-work-small-businesses-pakistan" element={<ChatbotGuideSmallBusiness />} />
        <Route path="/blog/whatsapp-business-api-pakistan-guide-2025" element={<WhatsAppAPIGuide />} />
        <Route path="/blog/whatsapp-api-vs-regular-whatsapp-business" element={<WhatsAppAPIvsRegular />} />
        <Route path="/services/custom-chatbot-development" element={<CustomChatbotDevelopment />} />
        <Route path="/services/whatsapp-chatbot-development" element={<WhatsAppChatbotDevelopment />} />
        <Route path="/services/ai-agent-development" element={<AiAgentDevelopment />} />
        <Route path="/services/ecommerce-chatbot-development" element={<EcommerceChatbotDevelopment />} />
        <Route path="/services/instagram-messenger-automation" element={<InstagramMessengerAutomation />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
