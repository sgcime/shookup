import Header from "@/components/contactHeader";
import HeroSection from "@/components/contactHeroSection";
import PromisesSection from "@/components/contactPromisesSection";
import ServicesSection from "@/components/contactServicesSection";
import Footer from "@/components/contactFooter";

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
