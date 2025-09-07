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
      <main className="min-h-screen pt-16 space-y-8">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <div className="space-y-10">
          <IndustrySolutionsSection />
          <AutomationPlatformsSection />
          <ComparisonSection />
          <PricingSection />
          <TestimonialSection />
        </div>
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
