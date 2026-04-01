import heroBg from "@/assets/hero-bg-new.png";

const heroMarqueeItems = [
  "Creative Direction", "Brand Strategy", "Visual Design", "Motion Graphics",
  "UGC Content", "CGI Production", "ASMR Videos", "Cinematic Films",
];

const HeroSection = () => {
  const marqueeText = heroMarqueeItems.join(" ✦ ") + " ✦ ";

  return (
    <section className="section-rounded relative h-[60vh] sm:h-[75vh] md:h-[88vh] min-h-[400px] md:min-h-[520px] bg-sage overflow-hidden">
      <img
        src={heroBg}
        alt="Alchemical Imagination Studio"
        className="absolute inset-0 w-full h-full object-cover object-top"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(50,80,65,0.5)] to-transparent z-[1]" />
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-6 sm:left-[36px] md:left-[52px] z-[5]">
        <h1 className="font-mono text-[clamp(28px,8vw,80px)] font-bold text-primary-foreground uppercase leading-none mb-2 md:mb-3.5 drop-shadow-lg">
          Alchemical<br />Imagination<br />Studio
        </h1>
        <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.28em] text-primary-foreground/70 uppercase">
          Where Vision Becomes Reality
        </p>
      </div>
      {/* Marquee on hero section */}
      <div className="absolute bottom-0 left-0 right-0 z-[4] overflow-hidden py-3 bg-black/20 backdrop-blur-sm">
        <div className="flex">
          <span className="font-mono text-[11px] sm:text-[13px] tracking-[0.18em] text-primary-foreground/80 uppercase whitespace-nowrap flex-shrink-0 animate-scroll-left">
            {marqueeText}{marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
