import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromisesSection from "@/components/PromisesSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

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
