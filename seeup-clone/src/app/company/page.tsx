import Header from "@/components/companyHeader";
import HeroSection from "@/components/companyHeroSection";
import IconsRow from "@/components/companyIconsRow";
import CompanyOverview from "@/components/companyCompanyOverview";
import MissionSection from "@/components/companyMissionSection";
import VisionSection from "@/components/companyVisionSection";
import CoreValues from "@/components/companyCoreValues";
import CallToAction from "@/components/companyCallToAction";
import Footer from "@/components/companyFooter";

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
