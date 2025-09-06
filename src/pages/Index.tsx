import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import IndustrySolutionsSection from "@/components/IndustrySolutionsSection";
import AutomationPlatformsSection from "@/components/AutomationPlatformsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MegaMenu from "@/components/MegaMenu";

const Index = () => {
  return (
    <>
      <MegaMenu />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <div className="py-6"></div>
        <ProblemSection />
        <div className="py-6"></div>
        <SolutionSection />
        <div className="py-8"></div>
        <IndustrySolutionsSection />
        <div className="py-8"></div>
        <AutomationPlatformsSection />
        <div className="py-8"></div>
        <ComparisonSection />
        <div className="py-8"></div>
        <PricingSection />
        <div className="py-8"></div>
        <TestimonialSection />
        <div className="py-6"></div>
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
