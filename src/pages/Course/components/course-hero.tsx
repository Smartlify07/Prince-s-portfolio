import { HeroHeading } from './hero-heading';
import { HeroSubcopy } from './hero-subcopy';
import { HeroTag } from './hero-tag';
import { HeroVideo } from './hero-video';
import { HeroVideoStatus } from './hero-video-status';
import { SectionCaption } from './section-caption';

export function CourseHero() {
  return (
    <section className="flex w-full flex-col items-center px-5 pt-10 pb-14 sm:px-8 md:pt-[60px] md:pb-[58px]">
      <HeroTag />
      <HeroHeading />
      <HeroSubcopy />
      <SectionCaption index={1} className="mt-10">
        Watch this video below
      </SectionCaption>
      <HeroVideo />
      <HeroVideoStatus />
    </section>
  );
}
