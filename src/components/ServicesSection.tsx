import { useScrollReveal } from "@/hooks/useScrollReveal";

const ServicesSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="services" className="section-rounded bg-dark h-auto min-h-[400px] sm:min-h-[480px] md:h-[88vh] md:min-h-[520px] flex flex-col items-center justify-center text-center gap-5 sm:gap-6 lg:gap-8 px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-32">
      <h2 className="font-mono text-[clamp(36px,12vw,130px)] font-bold text-primary-foreground tracking-[0.06em] uppercase">
        Services
      </h2>
      <p className="text-[13px] sm:text-[15px] leading-[1.7] text-primary-foreground/50 max-w-[500px] font-light">
        From concept to creation, we offer a full spectrum of creative services designed to elevate your brand and captivate your audience.
      </p>

    </section>
  );
};

export default ServicesSection;
