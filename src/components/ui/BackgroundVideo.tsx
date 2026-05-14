import React, { useEffect, useRef } from 'react';

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
  style?: React.CSSProperties;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, poster, className, videoClassName, style }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force iOS to play inline
      video.playsInline = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      
      // Attempt to play if it was paused by low power mode
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented. This is fine, we just don't want it to crash or fullscreen.
        });
      }
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className || ''}`} style={style}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full ${videoClassName || 'object-cover'}`}
        style={{ pointerEvents: 'none' }}
      />
      {/* Invisible overlay to absolutely ensure no touch events reach the video element */}
      <div className="absolute inset-0 z-[99] bg-transparent" style={{ pointerEvents: 'auto' }} />
    </div>
  );
};
