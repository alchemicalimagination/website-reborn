const marqueeText = "ALCHEMICAL IMAGINATION STUDIO";
const separator = " — ";
const fullText = Array(8).fill(marqueeText).join(separator) + separator;

const TextMarquee = () => {
  return (
    <div className="flex flex-col gap-[6px] sm:gap-2">
      <div className="relative bg-[#0d0d0d] py-2 overflow-hidden whitespace-nowrap">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-[#0d0d0d] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-[#0d0d0d] to-transparent pointer-events-none" />
        <div className="flex">
          <span className="font-mono text-[11px] sm:text-[13px] tracking-[0.18em] text-primary-foreground uppercase whitespace-nowrap flex-shrink-0 animate-scroll-left">
            {fullText}{fullText}
          </span>
        </div>
      </div>
      <div className="relative bg-[#0d0d0d] py-2 overflow-hidden whitespace-nowrap">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-[#0d0d0d] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-[#0d0d0d] to-transparent pointer-events-none" />
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
