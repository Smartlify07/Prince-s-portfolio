import CheckMark from '@/../public/assets/images/course/check-mark.svg';
import { cn } from '@/lib/utils';

type BonusCardProps = {
  title: string;
  cardClassName?: string;
  titleClassName?: string;
};

export function BonusCard({
  title,
  cardClassName,
  titleClassName,
}: BonusCardProps) {
  return (
    <div className="relative h-[175px] w-full">
      <div
        aria-hidden
        className="absolute inset-0 translate-y-[5px] rounded-[20px] bg-course-ink"
      />
      <div
        className={cn(
          'relative flex h-full flex-col items-center gap-[13px] rounded-[20px] border border-course-ink px-4 pt-10',
          cardClassName
        )}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-course-ink p-[5px]">
          <img src={CheckMark} width={14} height={14} alt="" />
        </span>
        <h3
          className={cn(
            'course-display text-center font-bricolage text-[20px] leading-[24px] font-bold text-course-ink',
            titleClassName
          )}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
