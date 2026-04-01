const projects = [
  { name: "Brand Alchemy", cat: "Brand Identity", gradient: "linear-gradient(155deg, #1a1228, #2d1a38)" },
  { name: "Visual Echo", cat: "Motion Design", gradient: "linear-gradient(155deg, #2a1010, #3c1f10)" },
  { name: "Nature Lens", cat: "Photography", gradient: "linear-gradient(155deg, #101a10, #0a1a20)" },
  { name: "Golden Hour", cat: "Cinematography", gradient: "linear-gradient(155deg, #281a08, #382808)" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-4">
      <div className="flex gap-2.5 sm:gap-3.5 overflow-x-auto scrollbar-hide px-1 pb-1" style={{ scrollbarWidth: 'none' }}>
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[360px] md:h-[460px] rounded-[24px] sm:rounded-[32px] overflow-hidden relative cursor-pointer transition-transform hover:-translate-y-1.5"
          >
            <div className="absolute inset-0" style={{ background: p.gradient }} />
            <div className="absolute bottom-5 sm:bottom-[26px] left-4 right-4 sm:left-[22px] sm:right-[22px] bg-[rgba(18,14,10,0.76)] backdrop-blur-[18px] rounded-[14px] sm:rounded-[18px] p-[18px_20px] sm:p-[22px_24px] border border-primary-foreground/[0.07]">
              <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.22em] text-primary-foreground/45 uppercase mb-1.5 sm:mb-2">{p.cat}</div>
              <div className="font-mono text-[18px] sm:text-[22px] font-bold text-primary-foreground uppercase mb-3 sm:mb-4">{p.name}</div>
              <button className="py-1.5 sm:py-2 px-4 sm:px-5 border-[1.5px] border-primary-foreground/30 rounded-full font-mono text-[9px] sm:text-[10px] text-primary-foreground tracking-[0.08em] bg-transparent cursor-pointer uppercase">
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
