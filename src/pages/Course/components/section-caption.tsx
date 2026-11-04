import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionCaptionProps = {
  index: number;
  className?: string;
  children: ReactNode;
};

export function SectionCaption({
  index,
  className,
  children,
}: SectionCaptionProps) {
  return (
    <div className={cn('flex items-center gap-[10px]', className)}>
      <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-course-ink pb-[2px] pt-[3px] font-inter text-[16px] font-semibold text-white">
        {index}
      </span>
      <p className="font-inter text-[16px] leading-[19px] font-semibold text-course-ink">
        {children}
      </p>
    </div>
  );
}
