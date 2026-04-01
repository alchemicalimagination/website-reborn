const items = [
  "Creative Direction", "Brand Strategy", "Visual Design", "Motion Graphics",
  "UGC Content", "CGI Production", "ASMR Videos", "Cinematic Films",
];

const TextMarquee = () => {
  const text = items.join(" ✦ ") + " ✦ ";
  return (
    <div className="overflow-hidden py-5">
      <div className="flex">
        <span className="font-mono text-[13px] tracking-[0.18em] text-primary-foreground uppercase whitespace-nowrap flex-shrink-0 animate-scroll-left">
          {text}{text}
        </span>
      </div>
      <div className="flex mt-2">
        <span className="font-mono text-[13px] tracking-[0.18em] text-primary-foreground uppercase whitespace-nowrap flex-shrink-0 animate-scroll-right">
          {text}{text}
        </span>
      </div>
    </div>
  );
};

export default TextMarquee;
