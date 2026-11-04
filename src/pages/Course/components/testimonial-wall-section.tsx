import Dot from '@/../public/assets/images/course/dot.svg';
import { testimonialWall } from '../testimonial-wall.constants';
import { CourseCta } from './course-cta';
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

      <div className="mt-5 flex flex-wrap items-center justify-center gap-[10px] font-inter text-[14px] leading-[17px] font-medium text-course-muted">
        <p>Only 30 spots available</p>
        <img src={Dot} width={8} height={8} alt="" />
        <p>UI/UX Design + Remote Job Training</p>
      </div>
    </section>
  );
}
