const Footer = () => {
  return (
    <footer className="bg-dark section-rounded p-[80px_64px_60px] text-primary-foreground h-auto min-h-[520px] flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_0.8fr] gap-12 mb-12">
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/35 uppercase mb-2">Stay Connected.</div>
          <a href="mailto:hello@alchemicalimagination.com" className="font-mono text-[11px] text-primary-foreground uppercase no-underline block mb-3.5">
            hello@alchemicalimagination.com
          </a>
          <p className="text-[13px] leading-[1.7] text-primary-foreground/40 font-light mb-3.5">
            At Alchemical Imagination Studio, we break boundaries to craft designs that stand out and deliver results.
          </p>
          <div className="font-mono text-[10px] text-primary-foreground/25">
            Made with Love by Alchemical Imagination Studio.
          </div>
        </div>
        <ul className="list-none flex flex-col gap-0.5">
          {["Home", "About", "Projects (06)", "Journal (05)", "Contact us"].map((item) => (
            <li key={item}>
              <a href="#" className="text-[22px] text-primary-foreground no-underline py-1 block font-normal">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/35 uppercase mb-3">Social Media</div>
          <div className="flex gap-2">
            {["X", "IG", "IN", "YT"].map((s) => (
              <a key={s} href="#" className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center font-mono text-[10px] text-primary-foreground/50 no-underline">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="font-mono text-[clamp(24px,4.5vw,64px)] font-bold text-primary-foreground uppercase border-t border-primary-foreground/10 pt-9 mb-3 tracking-[0.03em]">
          Alchemical Imagination Studio
        </div>
        <p className="font-mono text-[10px] text-primary-foreground/25 text-center">
          © 2025 Alchemical Imagination Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
