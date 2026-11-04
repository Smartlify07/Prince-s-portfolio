import { testimonialWall } from '../testimonial-wall.constants';
import { CourseCta } from './course-cta';
import { SpotsNote } from './spots-note';
import { TestimonialWallCard } from './testimonial-wall-card';

export function TestimonialWallSection() {
  return (
    <section className="flex w-full flex-col items-center border-t border-black bg-white px-5 pt-[59px] pb-[60px]">
      <div className="grid w-full max-w-[1000px] grid-cols-1 gap-y-9 md:grid-cols-2 md:gap-x-5">
        {testimonialWall.map((testimonial) => (
          <TestimonialWallCard
            key={testimonial.alt}
            image={testimonial.image}
            alt={testimonial.alt}
          />
        ))}
      </div>

      <CourseCta variant="ink" className="mt-[46px]">
        Register Now - <span className="line-through">N</span>25,000
      </CourseCta>

      <SpotsNote className="mt-5" />
    </section>
  );
}
