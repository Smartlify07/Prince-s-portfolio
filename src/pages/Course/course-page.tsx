import { BonusesSection } from './components/bonuses-section';
import { CourseAlertBar } from './components/course-alert-bar';
import { CourseFooter } from './components/course-footer';
import { CourseHero } from './components/course-hero';
import { CourseModulesSection } from './components/course-modules-section';
import { ProofSection } from './components/proof-section';
import { RegistrationSection } from './components/registration-section';
import { TestimonialSection } from './components/testimonial-section';
import { TestimonialWallSection } from './components/testimonial-wall-section';

export default function CoursePage() {
  return (
    <>
      <CourseAlertBar />
      <main className="flex min-h-screen w-full flex-col items-center bg-course-bg">
        <CourseHero />
        <RegistrationSection />
        <TestimonialSection />
        <TestimonialWallSection />
        <CourseModulesSection />
        <BonusesSection />
        <ProofSection />
      </main>
      <CourseFooter />
    </>
  );
}
