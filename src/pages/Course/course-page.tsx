import { CourseHero } from './components/course-hero';
import { CourseModulesSection } from './components/course-modules-section';
import { RegistrationSection } from './components/registration-section';
import { TestimonialSection } from './components/testimonial-section';
import { TestimonialWallSection } from './components/testimonial-wall-section';

export default function CoursePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-course-bg">
      <CourseHero />
      <RegistrationSection />
      <TestimonialSection />
      <TestimonialWallSection />
      <CourseModulesSection />
    </main>
  );
}
