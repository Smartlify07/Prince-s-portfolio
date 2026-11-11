import { cn } from '@/lib/utils';
import type { RefCallback } from 'react';
import type { TestimonialVideoItem } from '../testimonial-videos.constants';

type TestimonialVideoCardProps = TestimonialVideoItem & {
  videoRef: RefCallback<HTMLVideoElement>;
  onPlay: (element: HTMLVideoElement) => void;
};

export function TestimonialVideoCard({
  src,
  poster,
  alt,
  videoClassName,
  videoRef,
  onPlay,
}: TestimonialVideoCardProps) {
  return (
    <div className="relative aspect-[320/440] w-full overflow-hidden rounded-[30px] bg-course-ink">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={alt}
        controls
        playsInline
        preload="none"
        onPlay={(event) => onPlay(event.currentTarget)}
        className={cn('absolute inset-0 size-full object-cover', videoClassName)}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[30px] ring-4 ring-black ring-inset"
      />
    </div>
  );
}
