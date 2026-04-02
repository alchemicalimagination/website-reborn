import logo from '@/assets/logo.png';

const FloatingNav = () => {
  return (
    <nav className="fixed bottom-[34px] left-1/2 -translate-x-1/2 z-[9999] flex items-center glass rounded-[100px] py-4 px-3 whitespace-nowrap shadow-lg">
      <img src={logo} alt="Logo" className="w-[48px] h-[48px] rounded-full flex-shrink-0 mr-3.5 object-cover" />
      <a href="#projects" className="font-mono text-[11px] tracking-[0.13em] text-primary-foreground/85 no-underline px-4 uppercase">
        Services
      </a>
      <a href="#about" className="font-mono text-[11px] tracking-[0.13em] text-primary-foreground/85 no-underline px-4 uppercase">
        About
      </a>
      <a
        href="#contact"
        className="bg-primary-foreground/95 text-dark py-3.5 px-[22px] rounded-[100px] font-mono text-[11px] font-bold tracking-[0.08em] uppercase ml-2 no-underline"
      >
        Contact
      </a>
    </nav>
  );
};

export default FloatingNav;
