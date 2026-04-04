import { useScrollReveal } from "@/hooks/useScrollReveal";

const ServicesSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-rounded bg-dark h-auto min-h-[400px] sm:min-h-[480px] md:h-[88vh] md:min-h-[520px] flex flex-col items-center justify-center text-center gap-5 sm:gap-6 px-6 sm:px-10 py-16 sm:py-20">
      <h2 className="font-mono text-[clamp(36px,12vw,130px)] font-bold text-primary-foreground tracking-[0.06em] uppercase">
        Services
      </h2>
      <p className="text-[13px] sm:text-[15px] leading-[1.7] text-primary-foreground/50 max-w-[500px] font-light">
        From concept to creation, we offer a full spectrum of creative services designed to elevate your brand and captivate your audience.
      </p>
      <div className="flex gap-2.5 sm:gap-3 flex-wrap justify-center">
        <span className="inline-block py-2.5 sm:py-3 px-5 sm:px-7 border-[1.5px] border-primary-foreground/35 rounded-full font-mono text-[10px] sm:text-[11px] text-primary-foreground tracking-[0.1em] uppercase transition-all duration-300 hover:border-primary-foreground/70 hover:scale-105 cursor-pointer">
          Our Work
        </span>
        <span className="inline-block py-2.5 sm:py-3 px-5 sm:px-7 bg-primary-foreground text-dark rounded-full font-mono text-[10px] sm:text-[11px] tracking-[0.1em] border-[1.5px] border-primary-foreground uppercase transition-all duration-300 hover:scale-105 cursor-pointer">
          Get Started
        </span>
      </div>
    </section>
  );
};

export default ServicesSection;
