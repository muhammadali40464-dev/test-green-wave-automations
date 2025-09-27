import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import WebsiteLoader from "@/components/WebsiteLoader";
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
import NotFound from "./pages/NotFound";

// Route transition management component
const RouteTransitionManager = () => {
  const { pathname } = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Meta Pixel tracking for SPA route changes
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
      console.log('📊 Meta Pixel PageView tracked:', pathname);
    } else if (window.fbq && window.fbq.queue) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== previousPath) {
      setIsTransitioning(true);
      setPreviousPath(pathname);
      
      // Show transition loader for smooth experience
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600); // Short, realistic transition time

      return () => clearTimeout(timer);
    }
  }, [pathname, previousPath]);

  return isTransitioning ? <PageTransitionLoader route={pathname} duration={500} /> : null;
};

const queryClient = new QueryClient();

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  // Global website loader - shows on initial load only
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // Reduced from 2500ms to 2000ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <WebsiteLoader />}
      
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            <Route path="/blog/solar-companies-whatsapp-automation-pakistan" element={<SolarAutomation />} />
            <Route path="/blog/visa-consultancy-whatsapp-automation-urdu" element={<VisaConsultancy />} />
            <Route path="/blog/how-chatbots-work-small-businesses-pakistan" element={<ChatbotGuideSmallBusiness />} />
            <Route path="/blog/whatsapp-business-api-pakistan-guide-2025" element={<WhatsAppAPIGuide />} />
            <Route path="/blog/whatsapp-api-vs-regular-whatsapp-business" element={<WhatsAppAPIvsRegular />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
