import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import IndustrySolutionsSection from "@/components/IndustrySolutionsSection";
import PricingSection from "@/components/PricingSection";
import ROICalculatorSection from "@/components/ROICalculatorSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import MegaMenu from "@/components/MegaMenu";

const Index = () => {
  return (
    <>
      <MegaMenu />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <IndustrySolutionsSection />
        <ROICalculatorSection />
        <PricingSection />
        <TestimonialSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
