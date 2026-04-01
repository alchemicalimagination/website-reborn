import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import TextMarquee from "@/components/TextMarquee";
import CraftSection from "@/components/CraftSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CubeGallery from "@/components/CubeGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div
      className="p-1.5 sm:p-2 md:p-2.5 pb-1.5 sm:pb-2 md:pb-2.5"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 25%, #888888 50%, #000000 70%, #000000 100%)",
      }}
    >
      <FloatingNav />
      <div className="flex flex-col gap-2.5">
        <HeroSection />
        <TextMarquee />
        <CraftSection />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
        <CubeGallery />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
