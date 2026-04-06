import aboutBg from "@/assets/about-bg.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="section-rounded relative h-auto min-h-[480px] sm:h-[75vh] md:h-[88vh] md:min-h-[520px] bg-sage overflow-hidden">
      <img src={aboutBg} alt="About us" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-[rgba(60,80,70,0.15)]" />
      <div className="relative z-[2] flex flex-col md:grid md:grid-cols-[280px_1fr_320px] lg:grid-cols-[340px_1fr_400px] xl:grid-cols-[400px_1fr_500px] items-center justify-center gap-10 md:gap-0 h-full p-6 sm:p-8 md:p-[52px] lg:p-[72px] md:h-[88vh] md:min-h-[520px] pt-24 md:pt-[52px]">
        <div className="glass-card rounded-3xl sm:rounded-[36px] p-8 sm:p-[44px_38px] flex flex-col items-center justify-center text-center aspect-square w-full max-w-[260px] sm:max-w-[300px] md:max-w-none md:w-[340px] lg:w-[400px] mx-auto md:mx-0">
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/55 uppercase block mb-4">
            About Us.25
          </span>
          <h2 className="font-mono text-[clamp(40px,6vw,72px)] font-medium text-primary-foreground uppercase leading-[0.95]">
            ABOUT
          </h2>
        </div>
        <div className="hidden md:block" />
        <div className="text-center md:text-left bg-dark/20 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-5 sm:p-6 md:p-0 rounded-2xl md:rounded-none w-full max-w-[400px] mx-auto md:max-w-none md:mx-0">
          <p className="text-sm sm:text-[14px] leading-[1.72] font-light" style={{ color: 'rgba(255,255,255,0.88)' }}>
            At Alchemical Imagination, we craft designs that don't just look stunning—they create impact. Blending creativity with strategy, we transform ideas into immersive digital experiences that captivate, engage, and convert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
