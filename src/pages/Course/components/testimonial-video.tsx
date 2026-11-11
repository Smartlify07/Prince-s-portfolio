import { useExclusivePlayback } from '@/hooks/useExclusivePlayback';
import { testimonialVideos } from '../testimonial-videos.constants';
import { TestimonialVideoCard } from './testimonial-video-card';

export function TestimonialVideo() {
  const { register, pauseOthers } = useExclusivePlayback();

  return (
    <div className="mt-[36px] grid w-full max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-3">
      {testimonialVideos.map((card) => (
        <TestimonialVideoCard
          key={card.src}
          {...card}
          videoRef={register}
          onPlay={pauseOthers}
        />
      ))}
    </div>
  );
}
