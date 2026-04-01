const ContactSection = () => {
  return (
    <section id="contact" className="section-rounded relative h-[88vh] min-h-[520px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c03040] via-[#281030_35%,#102840_65%] to-[#3040c0]" />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-[2] text-center max-w-[680px] w-full px-10 py-20">
        <h2 className="font-mono text-[clamp(48px,8vw,90px)] font-bold text-primary-foreground uppercase mb-4 tracking-[0.02em]">
          Get In Touch
        </h2>
        <p className="text-sm text-primary-foreground/60 mb-8 font-light leading-relaxed">
          Have a project in mind? We're here to bring your vision to life.
        </p>
        <div className="glass-form rounded-[22px] p-11 text-left">
          <span className="font-mono text-[9px] tracking-[0.2em] text-primary-foreground/40 uppercase block mb-4">
            Contact Us
          </span>
          <input
            className="glass-input w-full rounded-[14px] py-[18px] px-5 text-sm text-primary-foreground outline-none mb-4 placeholder:text-primary-foreground/30"
            placeholder="Name"
          />
          <input
            className="glass-input w-full rounded-[14px] py-[18px] px-5 text-sm text-primary-foreground outline-none mb-6 placeholder:text-primary-foreground/30"
            placeholder="Email"
          />
          <button className="mt-2 bg-primary-foreground/15 border-[1.5px] border-primary-foreground/30 rounded-full py-4 px-10 font-mono text-xs text-primary-foreground tracking-[0.12em] cursor-pointer uppercase">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
