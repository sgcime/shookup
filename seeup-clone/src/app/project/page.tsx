import Header from "@/components/projectHeader";
import HeroSection from "@/components/projectHeroSection";
import PromisesSection from "@/components/projectPromisesSection";
import ServicesSection from "@/components/projectServicesSection";
import Footer from "@/components/projectFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PromisesSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
