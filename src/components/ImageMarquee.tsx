import cube1 from "@/assets/cube-1.jpg";
import cube2 from "@/assets/cube-2.jpg";
import cube3 from "@/assets/cube-3.jpg";
import cube4 from "@/assets/cube-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.png";

const images = [cube1, cube2, cube3, cube4, heroBg, aboutBg];

const ImageMarquee = () => {
  return (
    <div className="hmarquee relative">
      {/* Left fade */}
      <div className="absolute top-0 left-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute top-0 right-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <div className="hm-track">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="hm-thumb">
            <img src={img} alt="" loading="lazy" />
            <div className="hm-play">
              <div className="hm-tri" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
