import Dot from '@/../public/assets/images/course/dot.svg';
import { cn } from '@/lib/utils';

type SpotsNoteProps = {
  className?: string;
};

export function SpotsNote({ className }: SpotsNoteProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-[10px] font-inter text-[14px] leading-[17px] font-medium text-course-muted',
        className
      )}
    >
      <p>Only 30 spots available</p>
      <img src={Dot} width={8} height={8} alt="" />
      <p>UI/UX Design + Remote Job Training</p>
    </div>
  );
}
