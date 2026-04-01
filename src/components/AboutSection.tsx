import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-rounded relative h-[88vh] min-h-[520px] bg-sage">
      <img src={aboutBg} alt="About us" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-[rgba(60,80,70,0.15)]" />
      <div className="relative z-[2] grid grid-cols-1 md:grid-cols-[280px_1fr_320px] items-center p-8 md:p-[52px] gap-4 h-full">
        <div>
          <h2 className="font-mono text-[clamp(48px,6vw,80px)] font-bold text-primary-foreground uppercase leading-[0.95]">
            About<br />Us
          </h2>
        </div>
        <div />
        <div className="glass-card rounded-3xl p-[44px_38px]">
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/55 uppercase block mb-4">Who We Are</span>
          <p className="text-sm leading-[1.72] text-primary-foreground/90 font-light">
            We are a collective of dreamers, designers, and storytellers. Our studio blends creativity with technology to produce work that resonates, inspires, and transforms brands into unforgettable experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
