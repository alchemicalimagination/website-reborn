import { useState } from "react";
import card1 from "@/assets/card-1.png";
import card2 from "@/assets/card-2.png";
import card3 from "@/assets/card-3.png";
import card4 from "@/assets/card-4.png";
import ProjectModal from "./ProjectModal";

const projects = [
  { name: "UGC", cat: "Content", img: card1 },
  { name: "CGI", cat: "Visual", img: card2 },
  { name: "Cinematic Ads", cat: "Campaign", img: card3 },
  { name: "ASMR", cat: "Sensory", img: card4 },
  { name: "FOOH", cat: "Fake Out Of Home", img: card1 },
  { name: "Real Estate", cat: "Timelapse", img: card2 },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section ref={ref} id="projects" className="py-4">
      <div className="flex gap-2.5 sm:gap-3.5 overflow-x-auto scrollbar-hide px-1 pb-1" style={{ scrollbarWidth: 'none' }}>
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[360px] md:h-[460px] rounded-[32px] sm:rounded-[40px] overflow-hidden relative cursor-pointer transition-transform hover:-translate-y-1.5"
          >
            <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-5 sm:bottom-[26px] left-4 right-4 sm:left-[22px] sm:right-[22px] bg-[rgba(18,14,10,0.76)] backdrop-blur-[18px] rounded-[14px] sm:rounded-[18px] p-[18px_20px] sm:p-[22px_24px] border border-primary-foreground/[0.07]">
              <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.22em] text-primary-foreground/45 uppercase mb-1.5 sm:mb-2">{p.cat}</div>
              <div className="font-mono text-[18px] sm:text-[22px] font-bold text-primary-foreground uppercase mb-3 sm:mb-4">{p.name}</div>
              <button
                onClick={() => setSelectedProject(p)}
                className="py-1.5 sm:py-2 px-4 sm:px-5 border-[1.5px] border-primary-foreground/30 rounded-full font-mono text-[9px] sm:text-[10px] text-primary-foreground tracking-[0.08em] bg-transparent cursor-pointer uppercase hover:border-primary-foreground/60 transition-colors"
              >
                Explore More +
              </button>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default ProjectsSection;
