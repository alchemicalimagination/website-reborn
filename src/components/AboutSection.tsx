import aboutBg from "@/assets/about-bg.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  const textRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" className="section-rounded bg-sage overflow-hidden">
      <style>{`
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-animate-0 { animation: aboutFadeUp 0.8s ease 0s both; }
        .about-animate-1 { animation: aboutFadeUp 0.8s ease 0.25s both; }
      `}</style>

      {/* ── MOBILE layout (hidden on md+) ── */}
      <div className="md:hidden relative min-h-[500px] flex flex-col py-16 px-5 justify-center">
        <img src={aboutBg} alt="About us" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col gap-6 items-center w-full">
          <div className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-square w-[200px]">
            <h2 className="font-mono text-[clamp(28px,7vw,48px)] font-medium text-primary-foreground uppercase leading-[0.95]">
              ABOUT US
            </h2>
          </div>
          <div className="glass-card rounded-3xl p-6 w-full">
            <h3 className="font-mono text-[clamp(18px,5vw,24px)] font-medium text-primary-foreground uppercase leading-[1.2] mb-3" style={{ color: 'rgba(255,255,255,0.95)' }}>
              We turn impossible<br />into possible
            </h3>
            <p className="text-[13px] leading-[1.65] font-light" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Alchemical Imagination Studio is a London-based AI creative agency specialising in AI craft. We combine generative AI with deep creative direction to produce imagery and video that feels human, considered, and brand-true at a fraction of the time and cost of traditional production.
            </p>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (hidden on mobile) ── */}
      <div className="hidden md:block relative h-[88vh] min-h-[520px]">
        <img src={aboutBg} alt="About us" className="absolute inset-0 w-full h-full object-cover object-left" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-[rgba(60,80,70,0.15)]" />

        {/* Glass card — left, ABOUT US only */}
        <div className="relative z-[2] grid grid-cols-[340px_1fr_400px] lg:grid-cols-[380px_1fr_460px] xl:grid-cols-[420px_1fr_520px] items-center h-full p-[52px] lg:p-[72px]">
          <div className="glass-card rounded-[36px] p-[44px_38px] flex flex-col items-center justify-center text-center aspect-square w-[340px] lg:w-[400px]">
            <h2 className="font-mono text-[clamp(32px,5vw,60px)] font-medium text-primary-foreground uppercase leading-[0.95]">
              ABOUT US
            </h2>
          </div>
        </div>

        {/* Text — pinned right with scroll-triggered animation */}
        <div
          ref={textRef}
          className="absolute text-left z-[3]"
          style={{ right: '1cm', width: '8cm', top: '50%', transform: 'translateY(-50%)' }}
        >
          <h3
            className={`font-mono text-[clamp(14px,1.6vw,22px)] font-medium text-primary-foreground uppercase leading-[1.1] mb-4 ${visible ? 'about-animate-0' : ''}`}
            style={{ color: 'rgba(255,255,255,0.95)', opacity: visible ? undefined : 0 }}
          >
            We turn impossible<br />into possible
          </h3>
          <p
            className={`text-[12px] leading-[1.75] font-light ${visible ? 'about-animate-1' : ''}`}
            style={{ color: 'rgba(255,255,255,0.88)', opacity: visible ? undefined : 0 }}
          >
            Alchemical Imagination Studio is a London-based AI creative agency specialising in AI craft. We combine generative AI with deep creative direction to produce imagery and video that feels human, considered, and brand-true at a fraction of the time and cost of traditional production.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
