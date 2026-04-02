import contactBg from "@/assets/contact-bg.png";

const ContactSection = () => {
  return (
    <section id="contact" className="section-rounded relative h-auto min-h-[480px] sm:min-h-[520px] md:h-[88vh] flex items-center justify-center overflow-hidden">
      <img src={contactBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-[2] text-center max-w-[680px] w-full px-5 sm:px-10 py-12 sm:py-20">
        <h2 className="font-mono text-[clamp(32px,10vw,90px)] font-medium text-primary-foreground uppercase mb-3 sm:mb-4 tracking-[0.02em] whitespace-nowrap">
          Get In Touch
        </h2>
        <p className="text-xs sm:text-sm text-primary-foreground/60 mb-6 sm:mb-8 font-light leading-relaxed">
          Have a project in mind? We're here to bring your vision to life.
        </p>
        <div className="glass-form rounded-[28px] sm:rounded-[36px] p-6 sm:p-11 text-left">
          <span className="font-mono text-[9px] tracking-[0.2em] text-primary-foreground/40 uppercase block mb-3 sm:mb-4">
            Contact Us
          </span>
          <input
            className="glass-input w-full rounded-[12px] sm:rounded-[14px] py-3.5 sm:py-[18px] px-4 sm:px-5 text-xs sm:text-sm text-primary-foreground outline-none mb-3 sm:mb-4 placeholder:text-primary-foreground/30"
            placeholder="Name"
          />
          <input
            className="glass-input w-full rounded-[12px] sm:rounded-[14px] py-3.5 sm:py-[18px] px-4 sm:px-5 text-xs sm:text-sm text-primary-foreground outline-none mb-4 sm:mb-6 placeholder:text-primary-foreground/30"
            placeholder="Email"
          />
          <button className="mt-1 sm:mt-2 bg-primary-foreground/15 border-[1.5px] border-primary-foreground/30 rounded-full py-3 sm:py-4 px-7 sm:px-10 font-mono text-[10px] sm:text-xs text-primary-foreground tracking-[0.12em] cursor-pointer uppercase">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
