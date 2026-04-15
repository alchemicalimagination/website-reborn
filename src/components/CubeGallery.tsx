import { useEffect, useRef, useState, useCallback } from "react";


const NAMES = ["BRAND", "AI UGC", "CGI", "CINEMATIC", "ASMR", "LET'S GO"];
const STOPS = [
  { rx: 90, ry: 0 },
  { rx: 0, ry: 0 },
  { rx: 0, ry: -90 },
  { rx: 0, ry: -180 },
  { rx: 0, ry: -270 },
  { rx: -90, ry: -360 },
];
const CARDS = [
  { tag: "Brand", title: "Product\nDemo", body: "A space where imagination meets execution.", side: "left" },
  { tag: "Synthetic", title: "AI\nGenerated", body: "Authentic synthetic content that resonates with audiences.", side: "right" },
  { tag: "CGI", title: "Digital\nCraft", body: "Pushing boundaries with 3D and visual effects.", side: "left" },
  { tag: "Cinematic", title: "Film\nMaking", body: "Cinematic storytelling that captivates.", side: "right" },
  { tag: "ASMR", title: "Sensory\nContent", body: "Immersive audio-visual experiences.", side: "left" },
  { tag: "Let's Go", title: "Start\nYour Project", body: "Ready to create something extraordinary?", side: "right" },
];
const videos = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
  "/videos/video-4.mp4",
  "/videos/202604101911.mp4",
  "/videos/video-6.mp4",
];

const easeIO = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const CubeGallery = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [cubeTransform, setCubeTransform] = useState("rotateX(90deg) rotateY(0deg)");
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const smoothRef = useRef(0);
  const tgtRef = useRef(0);
  const lastIdxRef = useRef(-1);

  const onScroll = useCallback(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const rect = outer.getBoundingClientRect();
    const scrollable = outer.offsetHeight - window.innerHeight;
    tgtRef.current = Math.max(0, Math.min(1, -rect.top / scrollable));
  }, []);

  useEffect(() => {
    let raf: number;
    const N = 6;

    const frame = () => {
      raf = requestAnimationFrame(frame);
      smoothRef.current += (tgtRef.current - smoothRef.current) * 0.1;
      smoothRef.current = Math.max(0, Math.min(1, smoothRef.current));

      const pct = Math.round(smoothRef.current * 100);
      setProgress(pct);

      const t = smoothRef.current * (N - 1);
      const i = Math.min(Math.floor(t), N - 2);
      const f = easeIO(t - i);
      const a = STOPS[i], b = STOPS[i + 1];
      const rx = a.rx + (b.rx - a.rx) * f;
      const ry = a.ry + (b.ry - a.ry) * f;
      setCubeTransform(`rotateX(${rx}deg) rotateY(${ry}deg)`);

      const newIdx = Math.min(N - 1, Math.round(smoothRef.current * (N - 1)));
      if (newIdx !== lastIdxRef.current) {
        lastIdxRef.current = newIdx;
        setActiveIdx(newIdx);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const scrollToIdx = (idx: number) => {
    const outer = outerRef.current;
    if (!outer) return;
    const sH = outer.offsetHeight - window.innerHeight;
    const sT = outer.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: sT + (idx / 5) * sH, behavior: "smooth" });
  };

  const cubeSize = "min(50vw, 50vh, 460px)";

  return (
    <div ref={outerRef} className="relative" style={{ height: "600vh" }}>
      <div className="sticky top-[40px] md:top-[19px] w-full overflow-hidden bg-cream flex items-center justify-center mx-auto h-[calc(100vh-80px)] md:h-[calc(100vh-38px)] rounded-[40px] md:rounded-[60px]" style={{ perspective: "1100px", maxWidth: "calc(100vw - 20px)" }}>
        {/* HUD */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 text-right font-mono text-[0.6rem] sm:text-[0.65rem] tracking-[0.15em] text-foreground/35 uppercase">
          <div>{String(progress).padStart(3, "0")}%</div>
          <div className="w-16 sm:w-[7.5rem] h-px bg-foreground/15 my-2 ml-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gold transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-[0.55rem] sm:text-[0.6rem] text-gold">{NAMES[activeIdx]}</div>
        </div>

        {/* Dots */}
        <div className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2.5 sm:gap-3">
          {NAMES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIdx(i)}
              className={`w-1 h-1 rounded-full border-none p-0 transition-all cursor-pointer ${
                i === activeIdx ? "bg-gold scale-[1.8]" : "bg-foreground/25"
              }`}
            />
          ))}
        </div>

        {/* Caption */}
        <div className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
          <div className="text-[0.5rem] sm:text-[0.58rem] tracking-[0.28em] text-gold uppercase mb-0.5">
            {String(activeIdx + 1).padStart(2, "0")}
          </div>
          <div className="font-mono text-[clamp(1.4rem,5vw,3.5rem)] tracking-[0.08em] text-foreground/20 leading-none">
            {NAMES[activeIdx]}
          </div>
        </div>

        {/* Cube */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: "1100px" }}>
          <div
            className="relative preserve-3d"
            style={{
              width: cubeSize,
              height: cubeSize,
              transform: cubeTransform,
              willChange: "transform",
            }}
          >
            {["front", "back", "right", "left", "top", "bottom"].map((face, i) => {
              const transforms: Record<string, string> = {
                front: `translateZ(calc(${cubeSize} / 2))`,
                back: `rotateY(180deg) translateZ(calc(${cubeSize} / 2))`,
                right: `rotateY(90deg) translateZ(calc(${cubeSize} / 2))`,
                left: `rotateY(-90deg) translateZ(calc(${cubeSize} / 2))`,
                top: `rotateX(-90deg) translateZ(calc(${cubeSize} / 2))`,
                bottom: `rotateX(90deg) translateZ(calc(${cubeSize} / 2))`,
              };
              return (
                <div
                  key={face}
                  className="absolute inset-0 overflow-hidden backface-hidden"
                  style={{
                    transform: transforms[face],
                    background: "linear-gradient(to right, #d0cbc3, #eae6df 40%, #ece8e2)",
                  }}
                >
                  {videos[i] && (
                    <video
                      src={videos[i]}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className={`absolute rounded-[10px] sm:rounded-[14px] ${i === 2 || i === 4 ? "object-contain" : "object-cover"}`}
                      style={{
                        ...(i === 2 || i === 4
                          ? { top: "16px", bottom: "16px", left: "50%", transform: "translateX(-50%)", height: "calc(100% - 32px)", width: "auto" }
                          : { inset: "16px", width: "calc(100% - 32px)", height: "calc(100% - 32px)" }),
                        boxShadow: "-18px 14px 40px rgba(0,0,0,0.35), -6px 6px 16px rgba(0,0,0,0.15)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Cards - hidden on small mobile, shown from sm up */}
        {CARDS.map((card, i) => (
          <div
            key={i}
            className={`absolute max-w-[16rem] sm:max-w-[22rem] p-4 sm:p-[2rem_1.75rem] cg-card-glass rounded-3xl sm:rounded-[36px] z-[5] transition-all duration-500 hidden sm:block ${
              card.side === "right" ? "right-4 sm:right-12 left-auto text-right" : "left-4 sm:left-12"
            } ${activeIdx === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
            style={{ top: "50%", transform: activeIdx === i ? "translateY(-50%)" : "translateY(calc(-50% + 16px))" }}
          >
            <div className={`w-10 sm:w-12 h-px bg-gold mb-3 sm:mb-4 ${card.side === "right" ? "ml-auto" : ""}`} />
            <div className="font-mono text-[0.55rem] sm:text-[0.6rem] tracking-[0.25em] uppercase text-gold mb-3 sm:mb-4">{card.tag}</div>
            <div className="font-mono text-[clamp(1.4rem,3vw,3rem)] font-medium leading-[0.9] text-dark mb-3 sm:mb-4 whitespace-pre-line">{card.title}</div>
            <p className="text-[0.7rem] sm:text-[0.78rem] leading-[1.75] text-foreground/60">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CubeGallery;
