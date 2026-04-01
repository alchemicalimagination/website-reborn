import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="section-rounded relative h-[88vh] min-h-[520px] bg-sage">
      <img
        src={heroBg}
        alt="Alchemical Imagination Studio"
        className="absolute inset-0 w-full h-full object-cover object-top"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(50,80,65,0.5)] to-transparent z-[1]" />
      <div className="absolute bottom-[60px] left-[52px] z-[5]">
        <h1 className="font-mono text-[clamp(38px,6vw,80px)] font-bold text-primary-foreground uppercase leading-none mb-3.5 drop-shadow-lg">
          Alchemical<br />Imagination<br />Studio
        </h1>
        <p className="font-mono text-[11px] tracking-[0.28em] text-primary-foreground/70 uppercase">
          Where Vision Becomes Reality
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
