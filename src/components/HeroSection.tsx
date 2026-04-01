import heroBg from "@/assets/hero-bg-new.png";
import cube1 from "@/assets/cube-1.jpg";
import cube2 from "@/assets/cube-2.jpg";
import cube3 from "@/assets/cube-3.jpg";
import cube4 from "@/assets/cube-4.jpg";
import aboutBg from "@/assets/about-bg.png";

const heroThumbs = [cube1, cube2, cube3, cube4, aboutBg, cube1, cube2, cube3, cube4, aboutBg];

const HeroSection = () => {
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
      <div className="absolute bottom-8 left-6 sm:bottom-[40px] sm:left-[36px] md:bottom-[60px] md:left-[52px] z-[5]">
        <h1 className="font-mono text-[clamp(28px,8vw,80px)] font-bold text-primary-foreground uppercase leading-none mb-2 md:mb-3.5 drop-shadow-lg">
          Alchemical<br />Imagination<br />Studio
        </h1>
        <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.28em] text-primary-foreground/70 uppercase">
          Design Studio · London
        </p>
      </div>
      {/* Vertical scrolling thumbnail strip — bottom right */}
      <div className="hidden md:flex absolute bottom-0 right-[36px] z-[5] h-[320px] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-[rgba(50,80,65,0.8)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-[rgba(50,80,65,0.8)] to-transparent pointer-events-none" />
        <div className="flex flex-col gap-3 animate-scroll-vertical">
          {heroThumbs.map((img, i) => (
            <div key={i} className="w-[120px] h-[80px] rounded-2xl overflow-hidden relative cursor-pointer flex-shrink-0">
              <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-primary-foreground/30 backdrop-blur-sm flex items-center justify-center">
                  <svg width="8" height="10" viewBox="0 0 10 12" fill="none" className="ml-0.5">
                    <path d="M1 1L9 6L1 11V1Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
