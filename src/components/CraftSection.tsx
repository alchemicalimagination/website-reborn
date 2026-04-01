import cube1 from "@/assets/cube-1.jpg";
import cube2 from "@/assets/cube-2.jpg";
import cube3 from "@/assets/cube-3.jpg";
import cube4 from "@/assets/cube-4.jpg";

const CraftSection = () => {
  return (
    <section className="section-rounded bg-cream grid grid-cols-1 md:grid-cols-2 h-auto md:h-[88vh] md:min-h-[520px] border border-foreground/5">
      <div className="p-10 md:p-14 flex flex-col justify-center">
        <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/35 uppercase mb-4">
          What We Do
        </span>
        <h2 className="font-mono text-[clamp(30px,4vw,52px)] font-bold leading-[1.05] uppercase mb-4 text-dark">
          We Craft<br />Digital<br />Experiences
        </h2>
        <p className="text-sm leading-[1.72] text-foreground/50 font-light max-w-[380px]">
          At Alchemical Imagination Studio, we transform ideas into captivating visual stories. From brand identity to cinematic content, we bring your vision to life with precision and artistry.
        </p>
      </div>
      <div className="bg-gradient-to-br from-sage-light to-sage flex items-center justify-center p-8" style={{ perspective: '1100px' }}>
        <div
          className="relative preserve-3d animate-cube-float"
          style={{
            width: 'min(38vw, 38vh, 280px)',
            height: 'min(38vw, 38vh, 280px)',
            filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.15))',
          }}
        >
          {[
            { face: 'front', transform: 'translateZ(calc(min(38vw, 38vh, 280px) / 2))', img: cube1 },
            { face: 'back', transform: 'rotateY(180deg) translateZ(calc(min(38vw, 38vh, 280px) / 2))', img: cube2 },
            { face: 'right', transform: 'rotateY(90deg) translateZ(calc(min(38vw, 38vh, 280px) / 2))', img: cube3 },
            { face: 'left', transform: 'rotateY(-90deg) translateZ(calc(min(38vw, 38vh, 280px) / 2))', img: cube4 },
          ].map(({ face, transform, img }) => (
            <div
              key={face}
              className="absolute inset-0 overflow-hidden backface-hidden rounded-xl"
              style={{
                transform,
                background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 48px), #ddd8cf',
              }}
            >
              <img src={img} alt={face} className="absolute inset-0 w-full h-full object-cover rounded-xl" loading="lazy" />
            </div>
          ))}
          <div
            className="absolute inset-0 backface-hidden rounded-xl bg-[#e8e4de]"
            style={{ transform: 'rotateX(-90deg) translateZ(calc(min(38vw, 38vh, 280px) / 2))' }}
          />
          <div
            className="absolute inset-0 backface-hidden rounded-xl bg-[#a0a09a]"
            style={{ transform: 'rotateX(90deg) translateZ(calc(min(38vw, 38vh, 280px) / 2))' }}
          />
        </div>
      </div>
    </section>
  );
};

export default CraftSection;
