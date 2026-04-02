import heroBg from "@/assets/hero-bg-new.png";
import cube1 from "@/assets/cube-1.jpg";
import cube2 from "@/assets/cube-2.jpg";
import cube3 from "@/assets/cube-3.jpg";
import cube4 from "@/assets/cube-4.jpg";
import aboutBg from "@/assets/about-bg.png";

const heroThumbs = [cube1, cube2, cube3, cube4, aboutBg];

const HeroSection = () => {
  return (
    <section className="section-rounded relative h-[65vh] sm:h-[80vh] md:h-[92vh] min-h-[440px] md:min-h-[560px] bg-sage overflow-hidden">
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
      <div className="hidden md:block absolute right-[12px] bottom-[12px] z-[5] h-[430px] overflow-hidden pointer-events-none hero-vmarquee-mask">
        <div className="hero-vmarquee">
          {[...heroThumbs, ...heroThumbs].map((img, i) => (
            <div key={i} className="hm-thumb-v">
              <img src={img} alt="" loading="lazy" />
              <div className="hm-play hm-play-v">
                <div className="hm-tri" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
