import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ScenarioSection } from "@/components/home/ScenarioSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ScenarioSection />
        <AdvantagesSection />
        <ProductsShowcase />
        <HowItWorksSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
