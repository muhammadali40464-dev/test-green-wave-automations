import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustrySolutionsSection from "@/components/IndustrySolutionsSection";
import AutomationPlatformsSection from "@/components/AutomationPlatformsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import ROICalculatorSection from "@/components/ROICalculatorSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MegaMenu from "@/components/MegaMenu";
import SEOHead from "@/components/SEO/SEOHead";
import StructuredData from "@/components/SEO/StructuredData";
import { getPageSEO } from "@/data/seoData";

const Index = () => {
  const seoData = getPageSEO("/");
  
  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        path="/"
        keywords={seoData.keywords}
        type="website"
      />
      <StructuredData 
        type="Organization"
        data={{
          name: "TheChatFlow",
          description: "Leading WhatsApp Business API and chatbot automation services in Pakistan",
          url: "https://thechatflow.com",
          logo: "https://thechatflow.com/lovable-uploads/c2120760-061b-4488-8c9f-b2c1416e1a7e.png",
          address: {
            "@type": "PostalAddress",
            addressCountry: "Pakistan"
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            availableLanguage: ["English", "Urdu"]
          }
        }}
      />
      <StructuredData 
        type="WebSite"
        data={{
          name: "TheChatFlow",
          url: "https://thechatflow.com"
        }}
      />
      <MegaMenu />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <IndustrySolutionsSection />
        <AutomationPlatformsSection />
        <ComparisonSection />
        <ROICalculatorSection />
        <PricingSection />
        <TestimonialSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
