import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import SuccessStories from "./pages/SuccessStories";
import ContactUs from "./pages/ContactUs";
import WhatsAppAPIGuide from "./pages/blog/WhatsAppAPIGuide";
import SolarAutomation from "./pages/blog/SolarAutomation";
import VisaConsultancy from "./pages/blog/VisaConsultancy";
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
          <Route path="/blog/whatsapp-business-api-pakistan-guide-2025" element={<WhatsAppAPIGuide />} />
          <Route path="/blog/solar-companies-whatsapp-automation-pakistan" element={<SolarAutomation />} />
          <Route path="/blog/visa-consultancy-whatsapp-automation-urdu" element={<VisaConsultancy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
