const FloatingNav = () => {
  return (
    <nav className="fixed bottom-6 md:bottom-[110px] left-1/2 -translate-x-1/2 z-[9999] flex items-center glass rounded-full p-1.5 sm:p-2 whitespace-nowrap shadow-lg max-w-[calc(100vw-2rem)]">
      <div className="w-7 h-7 sm:w-[38px] sm:h-[38px] bg-gold rounded-full flex-shrink-0 mr-2 sm:mr-3.5 shadow-[0_0_18px_rgba(232,160,32,0.6)]" />
      <a href="#projects" className="font-mono text-[9px] sm:text-[11px] tracking-[0.13em] text-primary-foreground/85 no-underline px-2 sm:px-4 uppercase">
        Services
      </a>
      <a href="#about" className="font-mono text-[9px] sm:text-[11px] tracking-[0.13em] text-primary-foreground/85 no-underline px-2 sm:px-4 uppercase hidden sm:inline">
        About
      </a>
      <a
        href="#contact"
        className="bg-primary-foreground/95 text-dark py-2 px-4 sm:py-2.5 sm:px-[22px] rounded-full font-mono text-[9px] sm:text-[11px] font-bold tracking-[0.08em] uppercase ml-1 sm:ml-2 no-underline"
      >
        Contact
      </a>
    </nav>
  );
};

export default FloatingNav;
