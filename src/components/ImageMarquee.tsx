import cube1 from "@/assets/cube-1.jpg";
import cube2 from "@/assets/cube-2.jpg";
import cube3 from "@/assets/cube-3.jpg";
import cube4 from "@/assets/cube-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.png";

const images = [cube1, cube2, cube3, cube4, heroBg, aboutBg];

const ImageMarquee = () => {
  return (
    <div className="relative overflow-hidden py-5 bg-transparent">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <div className="flex gap-4 w-max animate-hm-scroll">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="w-[140px] sm:w-[180px] h-[100px] sm:h-[130px] rounded-full flex-shrink-0 overflow-hidden relative">
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-foreground/10 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-primary-foreground/25 backdrop-blur-sm flex items-center justify-center">
                <svg width="8" height="10" viewBox="0 0 10 12" fill="none" className="ml-0.5">
                  <path d="M1 1L9 6L1 11V1Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
