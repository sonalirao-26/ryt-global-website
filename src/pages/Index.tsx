import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyRYTSection from "@/components/home/WhyRYTSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import TrainerExpertiseSection from "@/components/home/TrainerExpertiseSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyRYTSection />
      <IndustriesSection />
      <TrainerExpertiseSection />
      <TechnologiesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
