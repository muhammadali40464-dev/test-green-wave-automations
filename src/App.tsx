import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import SuccessStories from "./pages/SuccessStories";
import ContactUs from "./pages/ContactUs";
import ChatbotAutomationGuide from "./pages/blog/ChatbotAutomationGuide";
import SolarAutomation from "./pages/blog/SolarAutomation";
import VisaConsultancy from "./pages/blog/VisaConsultancy";
import ChatbotGuideSmallBusiness from "./pages/blog/ChatbotGuideSmallBusiness";
import WhatsAppAPIvsRegular from "./pages/blog/WhatsAppAPIvsRegular";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/chatbot-automation-guide-pakistan" element={<ChatbotAutomationGuide />} />
          <Route path="/blog/solar-companies-whatsapp-automation-pakistan" element={<SolarAutomation />} />
          <Route path="/blog/visa-consultancy-whatsapp-automation-urdu" element={<VisaConsultancy />} />
          <Route path="/blog/how-chatbots-work-small-businesses-pakistan" element={<ChatbotGuideSmallBusiness />} />
          <Route path="/blog/whatsapp-business-api-vs-regular-whatsapp" element={<WhatsAppAPIvsRegular />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
