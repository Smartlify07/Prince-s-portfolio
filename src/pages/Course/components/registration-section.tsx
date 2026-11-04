import { RegistrationCard } from './registration-card';
import { SectionCaption } from './section-caption';

export function RegistrationSection() {
  return (
    <section className="flex w-full flex-col items-center border-y border-course-ink bg-course-mint px-5 pt-[59px] pb-[69px]">
      <SectionCaption index={2}>
        Register for the ui/ux design + remote job training
      </SectionCaption>
      <div className="relative mt-5 w-full max-w-[530px]">
        <div
          aria-hidden
          className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[30px] bg-course-shadow"
        />
        <RegistrationCard />
      </div>
    </section>
  );
}
