import UserGraduate from '@/../public/assets/images/course/user-graduate.svg';
import { COURSE_PREVIEW_VIDEO_SRC } from '../course.constants';
import { CoursePill } from './course-pill';
import { TestimonialVideo } from './testimonial-video';

export function TestimonialSection() {
  return (
    <section className="flex w-full flex-col items-center border-y border-course-ink bg-course-bg px-5 pt-[59px] pb-[59px]">
      <CoursePill icon={<img src={UserGraduate} width={14} height={16} alt="" />}>
        TESTIMONIAL
      </CoursePill>

      <h2 className="course-display mt-4 max-w-[600px] text-center font-bricolage text-[32px] leading-[1.2] font-bold text-course-ink sm:text-[40px] sm:leading-[65px]">
        Don’t just take my word for it
      </h2>

      <p className="text-center font-inter text-[17px] leading-[33px] font-normal text-course-muted sm:text-[18px]">
        Real stories from my mentees. Listen to their experience.
      </p>

      <TestimonialVideo src={COURSE_PREVIEW_VIDEO_SRC} />
    </section>
  );
}
