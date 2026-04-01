import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-rounded relative h-auto min-h-[480px] sm:h-[75vh] md:h-[88vh] md:min-h-[520px] bg-sage">
      <img src={aboutBg} alt="About us" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-[rgba(60,80,70,0.15)]" />
      <div className="relative z-[2] flex flex-col md:grid md:grid-cols-[280px_1fr_320px] items-start md:items-center p-6 sm:p-8 md:p-[52px] gap-6 md:gap-4 h-full">
        <div>
          <h2 className="font-mono text-[clamp(36px,8vw,80px)] font-bold text-primary-foreground uppercase leading-[0.95]">
            About<br />Us
          </h2>
        </div>
        <div className="hidden md:block" />
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-[44px_38px] w-full md:w-auto">
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
