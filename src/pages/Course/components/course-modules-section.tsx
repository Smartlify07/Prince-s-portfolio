import UserGraduate from '@/../public/assets/images/course/user-graduate.svg';
import { courseModules } from '../course-modules';
import { CourseModuleCard } from './course-module-card';
import { CoursePill } from './course-pill';

export function CourseModulesSection() {
  return (
    <section className="flex w-full flex-col items-center bg-course-ink px-5 pt-[60px] pb-[60px]">
      <CoursePill
        className="border-white text-white"
        icon={<img src={UserGraduate} width={14} height={16} alt="" />}
      >
        FULL BREAKDOWN
      </CoursePill>

      <h2 className="course-display mt-[10px] max-w-[600px] text-center font-bricolage text-[32px] leading-[1.2] font-bold text-white sm:text-[40px] sm:leading-[65px]">
        Complete course breakdown
      </h2>

      <p className="mt-[6px] max-w-[600px] text-center font-inter text-[17px] leading-[33px] font-normal text-white sm:text-[18px]">
        Two trainings in one: UI/UX Design + Remote Job Training.
      </p>

      <div className="mt-10 flex w-full max-w-[830px] flex-col gap-4">
        {courseModules.map((module, index) => (
          <CourseModuleCard
            key={module.title}
            index={index + 1}
            title={module.title}
            description={module.description}
          />
        ))}
      </div>
    </section>
  );
}
