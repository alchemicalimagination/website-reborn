const FloatingNav = () => {
  return (
    <nav className="fixed bottom-[110px] left-1/2 -translate-x-1/2 z-[9999] flex items-center glass rounded-[100px] p-2 whitespace-nowrap shadow-lg">
      <div className="w-[38px] h-[38px] bg-gold rounded-full flex-shrink-0 mr-3.5 shadow-[0_0_18px_rgba(232,160,32,0.6)]" />
      <a href="#projects" className="font-mono text-[11px] tracking-[0.13em] text-primary-foreground/85 no-underline px-4 uppercase">
        Services
      </a>
      <a href="#about" className="font-mono text-[11px] tracking-[0.13em] text-primary-foreground/85 no-underline px-4 uppercase">
        About
      </a>
      <a
        href="#contact"
        className="bg-primary-foreground/95 text-dark py-2.5 px-[22px] rounded-[100px] font-mono text-[11px] font-bold tracking-[0.08em] uppercase ml-2 no-underline"
      >
        Contact
      </a>
    </nav>
  );
};

export default FloatingNav;
