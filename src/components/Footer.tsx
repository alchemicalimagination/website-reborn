const Footer = () => {
  return (
    <footer className="bg-dark section-rounded text-primary-foreground min-h-[calc(100vh-1rem)] flex flex-col justify-between p-8 sm:p-12 md:p-[60px_64px_20px]">
      {/* Top content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_0.8fr] gap-10 md:gap-12 pt-8 sm:pt-12">
        {/* Left column */}
        <div>
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] text-primary-foreground font-bold uppercase mb-6">
            Stay Connected.
          </div>
          <a href="mailto:info@alchemicalimagination.com" className="font-mono text-[12px] sm:text-[13px] text-primary-foreground uppercase no-underline block mb-8 tracking-[0.06em]">
            INFO@ALCHEMICALIMAGINATION.COM
          </a>
          <p className="text-[13px] sm:text-[14px] leading-[1.75] text-primary-foreground/45 font-light mb-10 max-w-[380px]">
            At Alchemical Imagination Studio, we break boundaries to craft designs that stand out and deliver results. We blend creativity with strategy, turning bold ideas into digital experiences that captivate and inspire.
          </p>
          <div className="font-mono text-[11px] sm:text-[12px] text-primary-foreground/30">
            Made with Love by Alchemical Imagination Studio.
          </div>
        </div>

        {/* Center column - Navigation */}
        <ul className="list-none flex flex-col gap-1">
          {[
            { label: "Home", sup: "" },
            { label: "About", sup: "" },
            { label: "Services", sup: "" },
            { label: "Contact us", sup: "" },
          ].map((item) => (
            <li key={item.label}>
              <a href="#" className="font-mono text-[22px] sm:text-[26px] md:text-[28px] text-primary-foreground no-underline py-1.5 block font-normal tracking-[0.01em]">
                {item.label}
                {item.sup && <sup className="text-[10px] text-primary-foreground/40 ml-0.5">{item.sup}</sup>}
              </a>
            </li>
          ))}
        </ul>

        {/* Right column - Social */}
        <div>
          <div className="font-mono text-[12px] sm:text-[13px] tracking-[0.08em] text-primary-foreground mb-5">
            Social Media
          </div>
          <div className="flex gap-2.5">
            {["X", "IG", "IN", "YT"].map((s) => (
              <a key={s} href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center font-mono text-[11px] text-primary-foreground/55 no-underline hover:border-primary-foreground/40 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom - Large text + copyright */}
      <div className="mt-auto pb-4">
        <div className="font-mono text-[clamp(24px,4.8vw,80px)] font-medium text-primary-foreground uppercase mb-6 tracking-[0.04em] leading-[1.1] whitespace-nowrap" style={{ paddingBottom: '40px' }}>
          Alchemical Imagination Studio
        </div>
        <p className="font-mono text-[10px] sm:text-[11px] text-primary-foreground/25 text-left mb-2">
          © 2026 Alchemical Imagination Studio. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
