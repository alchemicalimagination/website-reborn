import logo from '@/assets/logo.png';

const FloatingNav = () => {
  return (
    <nav className="fixed bottom-[34px] left-1/2 -translate-x-1/2 z-[9999] flex items-center glass rounded-[100px] py-3 sm:py-4 px-2.5 sm:px-3 whitespace-nowrap shadow-lg max-w-[calc(100vw-24px)]">
      <img src={logo} alt="Logo" className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full flex-shrink-0 mr-2 sm:mr-3.5 object-cover" />
      <a href="#projects" className="font-mono text-[10px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.13em] text-primary-foreground/85 no-underline px-2 sm:px-4 uppercase">
        Services
      </a>
      <a href="#about" className="font-mono text-[10px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.13em] text-primary-foreground/85 no-underline px-2 sm:px-4 uppercase">
        About
      </a>
      <a
        href="#contact"
        className="bg-primary-foreground/95 text-dark py-2.5 sm:py-3.5 px-3 sm:px-[22px] rounded-[100px] font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.08em] uppercase ml-1.5 sm:ml-2 no-underline flex-shrink-0"
      >
        Contact
      </a>
    </nav>
  );
};

export default FloatingNav;
