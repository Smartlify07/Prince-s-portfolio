import { testimonialVideos } from '../testimonial-videos.constants';
import { TestimonialVideoCard } from './testimonial-video-card';

export function TestimonialVideo() {
  return (
    <div className="mt-[36px] grid w-full max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-3">
      {testimonialVideos.map((card) => (
        <TestimonialVideoCard
          key={card.src}
          src={card.src}
          poster={card.poster}
          alt={card.alt}
          videoClassName={card.videoClassName}
        />
      ))}
    </div>
  );
}
