import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import WebsiteLoader from "@/components/WebsiteLoader";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Keep homepage as regular import for immediate loading
import Index from "./pages/Index";

// Lazy load all other route components
const Blog = lazy(() => import("./pages/Blog"));
const SuccessStories = lazy(() => import("./pages/SuccessStories"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const SolarAutomation = lazy(() => import("./pages/blog/SolarAutomation"));
const VisaConsultancy = lazy(() => import("./pages/blog/VisaConsultancy"));
const ChatbotGuideSmallBusiness = lazy(() => import("./pages/blog/ChatbotGuideSmallBusiness"));
const WhatsAppAPIvsRegular = lazy(() => import("./pages/blog/WhatsAppAPIvsRegular"));
const WhatsAppAPIGuide = lazy(() => import("./pages/blog/WhatsAppAPIGuide"));
const ChatbotAutomationGuide = lazy(() => import("./pages/blog/ChatbotAutomationGuide"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  // Global website loader - shows on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <WebsiteLoader />}
      
      <QueryClientProvider client={queryClient}>
        {/* Removed TooltipProvider to prevent unwanted hover tooltips on CTAs */}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><Blog /></Suspense>} />
            <Route path="/success-stories" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><SuccessStories /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><ContactUs /></Suspense>} />
            <Route path="/privacy-policy" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><PrivacyPolicy /></Suspense>} />
            <Route path="/terms-of-service" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><TermsOfService /></Suspense>} />
            <Route path="/cookie-policy" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><CookiePolicy /></Suspense>} />
            <Route path="/blog/chatbot-automation-guide-pakistan" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><ChatbotAutomationGuide /></Suspense>} />
            <Route path="/blog/solar-companies-whatsapp-automation-pakistan" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><SolarAutomation /></Suspense>} />
            <Route path="/blog/visa-consultancy-whatsapp-automation-urdu" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><VisaConsultancy /></Suspense>} />
            <Route path="/blog/how-chatbots-work-small-businesses-pakistan" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><ChatbotGuideSmallBusiness /></Suspense>} />
            <Route path="/blog/whatsapp-business-api-pakistan-guide-2025" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><WhatsAppAPIGuide /></Suspense>} />
            <Route path="/blog/whatsapp-api-vs-regular-whatsapp-business" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><WhatsAppAPIvsRegular /></Suspense>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><NotFound /></Suspense>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
