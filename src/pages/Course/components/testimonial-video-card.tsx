import { cn } from '@/lib/utils';
import type { TestimonialVideoItem } from '../testimonial-videos.constants';

type TestimonialVideoCardProps = TestimonialVideoItem & {
  src: string;
};

export function TestimonialVideoCard({
  src,
  poster,
  alt,
  videoClassName,
}: TestimonialVideoCardProps) {
  return (
    <div className="relative aspect-[320/440] w-full overflow-hidden rounded-[30px] bg-course-ink">
      <video
        src={src}
        poster={poster}
        aria-label={alt}
        controls
        playsInline
        preload="none"
        className={cn('absolute inset-0 size-full object-cover', videoClassName)}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[30px] ring-4 ring-black ring-inset"
      />
    </div>
  );
}
