const projects = [
  { name: "Brand Alchemy", cat: "Brand Identity", gradient: "linear-gradient(155deg, #1a1228, #2d1a38)" },
  { name: "Visual Echo", cat: "Motion Design", gradient: "linear-gradient(155deg, #2a1010, #3c1f10)" },
  { name: "Nature Lens", cat: "Photography", gradient: "linear-gradient(155deg, #101a10, #0a1a20)" },
  { name: "Golden Hour", cat: "Cinematography", gradient: "linear-gradient(155deg, #281a08, #382808)" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-4">
      <div className="flex gap-3.5 overflow-x-auto scrollbar-hide px-1 pb-1" style={{ scrollbarWidth: 'none' }}>
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[360px] h-[460px] rounded-[32px] overflow-hidden relative cursor-pointer transition-transform hover:-translate-y-1.5"
          >
            <div className="absolute inset-0" style={{ background: p.gradient }} />
            <div className="absolute bottom-[26px] left-[22px] right-[22px] bg-[rgba(18,14,10,0.76)] backdrop-blur-[18px] rounded-[18px] p-[22px_24px] border border-primary-foreground/[0.07]">
              <div className="font-mono text-[9px] tracking-[0.22em] text-primary-foreground/45 uppercase mb-2">{p.cat}</div>
              <div className="font-mono text-[22px] font-bold text-primary-foreground uppercase mb-4">{p.name}</div>
              <button className="py-2 px-5 border-[1.5px] border-primary-foreground/30 rounded-full font-mono text-[10px] text-primary-foreground tracking-[0.08em] bg-transparent cursor-pointer uppercase">
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
