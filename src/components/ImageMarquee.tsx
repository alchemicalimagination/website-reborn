import cube1 from "@/assets/cube-1.jpg";
import cube2 from "@/assets/cube-2.jpg";
import cube3 from "@/assets/cube-3.jpg";
import cube4 from "@/assets/cube-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.png";

type MediaItem = { type: "image"; src: string } | { type: "video"; src: string };

const media: MediaItem[] = [
  { type: "image", src: cube1 },
  { type: "video", src: "/videos/video-1.mp4" },
  { type: "image", src: cube2 },
  { type: "video", src: "/videos/video-2.mp4" },
  { type: "image", src: cube3 },
  { type: "video", src: "/videos/video-3.mp4" },
  { type: "image", src: cube4 },
  { type: "video", src: "/videos/video-4.mp4" },
  { type: "image", src: heroBg },
  { type: "video", src: "/videos/video-5.mp4" },
  { type: "image", src: aboutBg },
  { type: "video", src: "/videos/video-6.mp4" },
];

const ImageMarquee = () => {
  const items = [...media, ...media, ...media, ...media];
  return (
    <div className="hmarquee relative">
      <div className="absolute top-0 left-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <div className="hm-track">
        {items.map((item, i) => (
          <div key={i} className="hm-thumb">
            {item.type === "image" ? (
              <img src={item.src} alt="" loading="lazy" />
            ) : (
              <video src={item.src} muted autoPlay loop playsInline className="w-full h-full object-cover" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
