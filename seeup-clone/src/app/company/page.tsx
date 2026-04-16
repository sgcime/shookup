import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IconsRow from "@/components/IconsRow";
import CompanyOverview from "@/components/CompanyOverview";
import MissionSection from "@/components/MissionSection";
import VisionSection from "@/components/VisionSection";
import CoreValues from "@/components/CoreValues";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <IconsRow />
      <CompanyOverview />
      <MissionSection />
      <VisionSection />
      <CoreValues />
      <CallToAction />
      <Footer />
    </main>
  );
}
