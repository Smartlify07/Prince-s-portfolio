import CoolFace from '@/../public/assets/images/course/cool-face.png';
import { COURSE_PRICE } from '../course.constants';
import { proofCards } from '../proof.constants';
import { CourseCta } from './course-cta';
import { CoursePill } from './course-pill';
import { ProofCard } from './proof-card';
import { SpotsNote } from './spots-note';

export function ProofSection() {
  return (
    <section className="flex w-full flex-col items-center border-t border-course-ink bg-course-mint px-5 pt-[59px] pb-[60px]">
      <CoursePill
        icon={
          <span className="flex size-[18px] items-center justify-center">
            <img src={CoolFace} width={18} height={18} alt="" />
          </span>
        }
      >
        I STARTED FROM SCRATCH
      </CoursePill>

      <h2 className="course-display mt-[10px] max-w-[700px] text-center font-bricolage text-[32px] leading-[1.2] font-bold text-course-ink sm:text-[40px] sm:leading-[65px]">
        16 jobs landed. Nearly $20k earned.
      </h2>

      <div className="mt-[30px] grid w-full max-w-[1000px] grid-cols-1 gap-x-5 gap-y-[42px] md:grid-cols-2">
        {proofCards.map((card) => (
          <ProofCard
            key={card.alt}
            image={card.image}
            alt={card.alt}
            imageClassName={card.imageClassName}
          />
        ))}
      </div>

      <CourseCta variant="ink" className="mt-[46px]">
        Register Now - <span className="line-through">N</span>{COURSE_PRICE}
      </CourseCta>

      <SpotsNote className="mt-5 text-course-charcoal" />
    </section>
  );
}
