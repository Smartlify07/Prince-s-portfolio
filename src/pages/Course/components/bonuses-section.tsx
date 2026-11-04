import Gift from '@/../public/assets/images/course/gift.svg';
import { bonuses } from '../bonuses.constants';
import { BonusCard } from './bonus-card';
import { CourseCta } from './course-cta';
import { CoursePill } from './course-pill';
import { SpotsNote } from './spots-note';

export function BonusesSection() {
  return (
    <section className="flex w-full flex-col items-center border-y border-course-ink bg-course-bg px-5 pt-[59px] pb-[59px]">
      <CoursePill
        icon={
          <span className="flex size-[18px] items-center justify-center">
            <img src={Gift} width={14.625} height={15.75} alt="" />
          </span>
        }
      >
        BONUSES
      </CoursePill>

      <h2 className="course-display mt-[10px] max-w-[600px] text-center font-bricolage text-[32px] leading-[1.2] font-bold text-course-ink sm:text-[40px] sm:leading-[65px]">
        You also get these free
      </h2>

      <div className="mt-10 grid w-full max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bonuses.map((bonus) => (
          <BonusCard
            key={bonus.title}
            title={bonus.title}
            cardClassName={bonus.cardClassName}
            titleClassName={bonus.titleClassName}
          />
        ))}
      </div>

      <CourseCta variant="ink" className="mt-[45px]">
        Register Now - <span className="line-through">N</span>25,000
      </CourseCta>

      <SpotsNote className="mt-5" />
    </section>
  );
}
