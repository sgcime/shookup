import Navigation from "@/components/contactNavigation";
import HeroSection from "@/components/contactHeroSection";
import FormSection from "@/components/contactFormSection";
import Footer from "@/components/contactFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
}
