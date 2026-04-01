import cube1 from "@/assets/cube-1.jpg";
import cube2 from "@/assets/cube-2.jpg";
import cube3 from "@/assets/cube-3.jpg";
import cube4 from "@/assets/cube-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.png";

const images = [cube1, cube2, cube3, cube4, heroBg, aboutBg, cube1, cube2, cube3, cube4, heroBg, aboutBg];

const ImageMarquee = () => {
  return (
    <div className="overflow-hidden py-5 bg-transparent">
      <div
        className="flex gap-4 w-max animate-hm-scroll"
      >
        {images.map((img, i) => (
          <div key={i} className="w-[140px] sm:w-[180px] h-[100px] sm:h-[130px] rounded-[28px] flex-shrink-0 overflow-hidden relative">
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
