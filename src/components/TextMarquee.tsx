const marqueeText = "ALCHEMICAL IMAGINATION STUDIO \u00A0—\u00A0 ";
const repeated = marqueeText.repeat(5);

const TextMarquee = () => {
  return (
    <div className="flex flex-col gap-[10px] bg-transparent">
      {/* Left scrolling bar */}
      <div className="bg-[#0d0d0d] py-2 overflow-hidden whitespace-nowrap">
        <div className="marquee-left">
          <div className="marquee-inner">{repeated}</div>
          <div className="marquee-inner" aria-hidden="true">{repeated}</div>
        </div>
      </div>
      {/* Right scrolling bar */}
      <div className="bg-[#0d0d0d] py-2 overflow-hidden whitespace-nowrap">
        <div className="marquee-right">
          <div className="marquee-inner">{repeated}</div>
          <div className="marquee-inner" aria-hidden="true">{repeated}</div>
        </div>
      </div>
    </div>
  );
};

export default TextMarquee;
