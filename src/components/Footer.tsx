import { useScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <footer ref={ref} className="bg-dark section-rounded text-primary-foreground min-h-[calc(100vh-2rem)] flex flex-col justify-between p-8 sm:p-12 md:p-[60px_64px_20px]">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 md:gap-12 pt-8 sm:pt-12">
        <div>
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] text-primary-foreground font-bold uppercase mb-6">
            Stay Connected.
          </div>
          <a href="mailto:info@alchemicalimagination.com" className="font-mono text-[12px] sm:text-[13px] text-primary-foreground uppercase no-underline block mb-8 tracking-[0.06em] transition-colors duration-300 hover:text-accent">
            INFO@ALCHEMICALIMAGINATION.COM
          </a>
          <p className="text-[13px] sm:text-[14px] leading-[1.75] text-primary-foreground/45 font-light mb-10 max-w-[420px]">
            At Alchemical Imagination Studio, we break boundaries to craft designs that stand out and deliver results. We blend creativity with strategy, turning bold ideas into digital experiences that captivate and inspire.
          </p>
          <div className="font-mono text-[11px] sm:text-[12px] text-primary-foreground/30">
            Made with Love by Alchemical Imagination Studio.
          </div>
        </div>

        <div className="flex justify-between md:justify-around w-full max-w-[320px] md:max-w-none mt-6 md:mt-0">
          <ul className="list-none flex flex-col gap-2">
            {[
              { label: "Home", sup: "" },
              { label: "About", sup: "" },
              { label: "Services", sup: "" },
              { label: "Contact us", sup: "" },
            ].map((item) => (
              <li key={item.label}>
                <a href="#" className="font-mono text-[22px] sm:text-[26px] md:text-[28px] text-primary-foreground no-underline py-1 block font-normal tracking-[0.01em] transition-all duration-300 hover:translate-x-2 hover:text-accent">
                  {item.label}
                  {item.sup && <sup className="text-[10px] text-primary-foreground/40 ml-0.5">{item.sup}</sup>}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 items-end md:items-start pt-1.5">
            {["X", "IG", "IN", "YT"].map((s) => (
              <a key={s} href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center font-mono text-[11px] text-primary-foreground/55 no-underline transition-all duration-300 hover:border-primary-foreground/60 hover:text-primary-foreground hover:scale-110">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-12 pb-24 sm:pb-28 md:pb-10">
        <div className="font-mono text-[clamp(18px,6.5vw,80px)] font-medium text-primary-foreground uppercase mb-6 tracking-[0.04em] leading-[1.2] text-center w-full">
          <span>ALCHEMICAL IMAGINATION</span><br />
          <span>STUDIO</span>
        </div>
        <p className="font-mono text-[10px] sm:text-[11px] text-primary-foreground/25 text-center mb-2">
          © 2026 Alchemical Imagination Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
