import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import card1 from "@/assets/card-1.png";
import card2 from "@/assets/card-2.png";
import card3 from "@/assets/card-3.png";
import card4 from "@/assets/card-4.png";
import ugc1 from "@/assets/ugc1.mp4";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    cat: string;
    img: string;
    video?: string;
    description?: string;
  } | null;
}

const projectDetails: Record<string, { description: string; works: { img: string; title: string, video?: string, explanation?: string }[] }> = {
  "AI UGC": {
    description:
      "Synthetic Content is one of the most powerful tools in modern marketing. We craft authentic, relatable high-fidelity AI-generated content that speaks directly to your audience. Our AI UGC campaigns blend real voices with strategic storytelling to drive engagement and trust.",
    works: [
      { img: card1, title: "Brand Campaign", video: "/videos/hf_20260405_194312_dc83932d-a100-4fed-ba5b-a7f1933d1107.mp4" },
      { img: card2, title: "Product Review", video: "/videos/202604100949.mp4" },
      { img: card3, title: "Lifestyle Content" },
      { img: card4, title: "Testimonial", video: ugc1 },
      { img: card1, title: "AI Persona", video: "/videos/hf_20260408_195451_92c4f893-a256-428c-98b3-3ddc06dbb2fe.mp4", explanation: "We build bespoke, hyper-realistic digital avatars tailored to your brand identity." },
    ],
  },
  CGI: {
    description:
      "Computer-Generated Imagery pushes the boundaries of visual storytelling. We create hyper-realistic 3D renders, product visualizations, and impossible scenarios that captivate audiences and elevate your brand beyond the ordinary.",
    works: [
      { img: card2, title: "Product Render" },
      { img: card3, title: "Environment Design" },
      { img: card1, title: "Character Animation", video: "/videos/iacomet_Animal_full_body_front_view_high_definition_cute_fair_72131a06-9954-426c-b674-447b54d58e11_1.mp4" },
      { img: card4, title: "Motion Graphics" },
    ],
  },
  "Cinematic Ads": {
    description:
      "Our cinematic advertising combines film-grade production with strategic messaging. Every frame is crafted to evoke emotion, build narrative, and drive action — transforming your brand story into an unforgettable visual experience.",
    works: [
      { img: card3, title: "Brand Film" },
      { img: card4, title: "Commercial Spot" },
      { img: card1, title: "Documentary Style" },
      { img: card2, title: "Social Campaign" },
    ],
  },
  ASMR: {
    description:
      "ASMR content creates an intimate, sensory connection with your audience. We produce carefully designed audio-visual experiences that trigger relaxation and engagement — a unique way to make your brand memorable through sound and texture.",
    works: [
      { img: card4, title: "Product Unboxing" },
      { img: card1, title: "Texture Close-ups" },
      { img: card2, title: "Sound Design" },
      { img: card3, title: "Whisper Campaign" },
    ],
  },
  FOOH: {
    description:
      "Fake Out Of Home advertising blends CGI with real-world footage to create viral, jaw-dropping content. These impossible billboards and installations generate massive organic reach and position your brand at the forefront of creative innovation.",
    works: [
      { img: card1, title: "Giant Installation" },
      { img: card3, title: "Street Takeover" },
      { img: card2, title: "Building Wrap" },
      { img: card4, title: "Transport Media" },
    ],
  },
  "Real Estate": {
    description:
      "Our real estate timelapse and visual content transforms property marketing. From construction progress documentation to stunning architectural showcases, we help developers and agents present properties in their most compelling light.",
    works: [
      { img: card2, title: "Construction Timelapse" },
      { img: card4, title: "Aerial Showcase" },
      { img: card1, title: "Interior Tour" },
      { img: card3, title: "Neighbourhood Guide" },
    ],
  },
};

const WorkCard = ({ work }: { work: { img: string; title: string; video?: string; explanation?: string } }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[200px] sm:w-[240px] rounded-[16px] sm:rounded-[20px] overflow-visible perspective-[1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div 
        className="relative w-full aspect-[3/4] transition-all duration-700 rounded-[16px] sm:rounded-[20px]"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT */}
        <div 
          className="absolute inset-0 rounded-[16px] sm:rounded-[20px] overflow-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {work.video ? (
            <video
              src={work.video}
              poster={work.img}
              className="absolute inset-0 w-full h-full object-cover object-center z-0"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={work.img}
              alt={work.title}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent opacity-80 z-10" style={{ transform: "translateZ(1px)" }} />
          <div className="absolute top-4 left-4 right-4 z-20" style={{ transform: "translateZ(2px)" }}>
            <div className="font-mono text-[10px] sm:text-[11px] text-primary-foreground/90 uppercase font-medium tracking-wide shadow-sm">
              {work.title}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div 
          className="absolute inset-0 rounded-[16px] sm:rounded-[20px] overflow-hidden bg-dark flex flex-col p-5 sm:p-6 items-center justify-center text-center border border-primary-foreground/[0.08]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(135deg, rgba(30,27,24,0.97) 0%, rgba(18,14,10,0.99) 100%)" }}
        >
          <div className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/45 uppercase mb-4">
            {work.title}
          </div>
          <p className="text-[12px] sm:text-[14px] text-primary-foreground/80 font-light leading-[1.7]">
            {work.explanation || `Discover our bespoke solutions for ${work.title}, crafted perfectly for modern campaigns.`}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const details = projectDetails[project.name] || {
    description: "Explore our creative work in this category.",
    works: [],
  };

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-[680px] lg:max-w-[800px] max-h-[85vh] mx-2 sm:mx-4 rounded-[24px] sm:rounded-[32px] overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-500"
        style={{
          background: "linear-gradient(180deg, rgba(30,27,24,0.97) 0%, rgba(18,14,10,0.98) 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-primary-foreground" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[85vh] scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {/* Hero image */}
          <div className="relative w-full h-[240px] sm:h-[320px]">
            {project.video ? (
              <video
                src={project.video}
                poster={project.img}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,14,10,0.98)] via-transparent to-transparent" />
          </div>

          {/* Text content */}
          <div className="px-6 sm:px-10 pb-6">
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-primary-foreground/40 uppercase mb-2">
              {project.cat}
            </div>
            <h2 className="font-mono text-[28px] sm:text-[36px] font-bold text-primary-foreground uppercase mb-6">
              {project.name}
            </h2>
            <p className="text-[14px] sm:text-[16px] leading-[1.7] text-primary-foreground/60 mb-4">
              {details.description}
            </p>
            <p className="text-[14px] sm:text-[16px] leading-[1.7] text-primary-foreground/60 mb-10">
              Our approach combines creative vision with data-driven strategy,
              ensuring every piece of content not only looks stunning but
              delivers measurable results for your brand.
            </p>

            {/* Divider */}
            <div className="w-1 h-16 bg-accent rounded-full mb-6" />

            <blockquote className="text-[20px] sm:text-[24px] font-medium leading-[1.4] text-primary-foreground/90 mb-2 pl-5 border-l-0">
              "Every project is a new canvas — we bring imagination to life."
            </blockquote>
            <p className="text-accent text-[13px] sm:text-[14px] font-medium mb-12 pl-5">
              Alchemical Imagination Studio
            </p>

            {/* Works section */}
            <h3 className="font-mono text-[11px] sm:text-[12px] tracking-[0.2em] text-primary-foreground/40 uppercase mb-4">
              Selected Works
            </h3>
          </div>

          {/* Horizontal scroll works */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide px-6 sm:px-10 pb-24 sm:pb-32" style={{ scrollbarWidth: "none" }}>
            {details.works.map((work, i) => (
              <WorkCard key={i} work={work} />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
