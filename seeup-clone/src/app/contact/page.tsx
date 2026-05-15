import Navigation from "@/components/contact_Navigation";
import HeroSection from "@/components/contact_HeroSection";
import FormSection from "@/components/contact_FormSection";
import Footer from "@/components/contact_Footer";

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
