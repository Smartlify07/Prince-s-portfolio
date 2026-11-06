import { useRef, useState } from 'react';
import Poster from '@/../public/assets/images/course/hero-video-thumbnail.png';
import { HeroVideoStatus } from './hero-video-status';

type HeroVideoProps = {
  src: string;
};

export function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted) void video.play().catch(() => undefined);
    setMuted(video.muted);
  };

  return (
    <>
      <div className="relative mt-5 w-full max-w-[680px]">
        <div
          aria-hidden
          className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[30px] bg-course-ink"
        />
        <div className="relative aspect-[680/410] overflow-hidden rounded-[30px] bg-course-ink ring-1 ring-course-ink ring-inset">
          <video
            ref={videoRef}
            src={src}
            poster={Poster}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
        </div>
      </div>
      <HeroVideoStatus muted={muted} onToggle={toggleMute} />
    </>
  );
}
