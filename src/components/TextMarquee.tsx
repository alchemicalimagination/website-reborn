const marqueeText = "ALCHEMICAL IMAGINATION STUDIO";
const separator = " — ";
const fullText = Array(6).fill(marqueeText).join(separator) + separator;

const TextMarquee = () => {
  return (
    <div className="flex flex-col gap-[6px] sm:gap-2">
      <div className="bg-[#0d0d0d] py-2 overflow-hidden whitespace-nowrap">
        <div className="flex">
          <span className="font-mono text-[11px] sm:text-[13px] tracking-[0.18em] text-primary-foreground uppercase whitespace-nowrap flex-shrink-0 animate-scroll-left">
            {fullText}{fullText}
          </span>
        </div>
      </div>
      <div className="bg-[#0d0d0d] py-2 overflow-hidden whitespace-nowrap">
        <div className="flex">
          <span className="font-mono text-[11px] sm:text-[13px] tracking-[0.18em] text-primary-foreground uppercase whitespace-nowrap flex-shrink-0 animate-scroll-right">
            {fullText}{fullText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextMarquee;
