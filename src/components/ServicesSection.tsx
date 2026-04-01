const ServicesSection = () => {
  return (
    <section className="section-rounded bg-dark h-[88vh] min-h-[520px] flex flex-col items-center justify-center text-center gap-6 px-10 py-16">
      <h2 className="font-mono text-[clamp(52px,10vw,130px)] font-bold text-primary-foreground tracking-[0.06em] uppercase">
        Services
      </h2>
      <p className="text-[15px] leading-[1.7] text-primary-foreground/50 max-w-[500px] font-light">
        From concept to creation, we offer a full spectrum of creative services designed to elevate your brand and captivate your audience.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <span className="inline-block py-3 px-7 border-[1.5px] border-primary-foreground/35 rounded-full font-mono text-[11px] text-primary-foreground tracking-[0.1em] uppercase">
          Our Work
        </span>
        <span className="inline-block py-3 px-7 bg-primary-foreground text-dark rounded-full font-mono text-[11px] tracking-[0.1em] border-[1.5px] border-primary-foreground uppercase">
          Get Started
        </span>
      </div>
    </section>
  );
};

export default ServicesSection;
