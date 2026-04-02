import aboutBg from "@/assets/about-bg.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-rounded relative h-auto min-h-[480px] sm:h-[75vh] md:h-[88vh] md:min-h-[520px] bg-sage overflow-hidden">
      <img src={aboutBg} alt="About us" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-[rgba(60,80,70,0.15)]" />
      <div className="relative z-[2] grid grid-cols-1 md:grid-cols-[280px_1fr_320px] items-center h-full p-6 sm:p-8 md:p-[52px] md:h-[88vh] md:min-h-[520px]">
        {/* Left glass card */}
        <div className="glass-card rounded-3xl sm:rounded-[36px] p-8 sm:p-[44px_38px]">
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/55 uppercase block mb-4">
            About Us.25
          </span>
          <h2 className="font-mono text-[clamp(48px,8vw,90px)] font-bold text-primary-foreground uppercase leading-[0.95]">
            ABOUT
          </h2>
        </div>
        {/* Spacer */}
        <div />
        {/* Right text */}
        <div>
          <p className="text-sm sm:text-[14px] leading-[1.72] font-light" style={{ color: 'rgba(255,255,255,0.88)' }}>
            At Alchemical Imagination, we craft designs that don't just look stunning—they create impact. Blending creativity with strategy, we transform ideas into immersive digital experiences that captivate, engage, and convert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
