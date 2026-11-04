import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CoursePillProps = {
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function CoursePill({ icon, className, children }: CoursePillProps) {
  return (
    <span
      className={cn(
        'course-display inline-flex items-center justify-center gap-[10px] rounded-[24px] border border-course-ink px-4 py-[10px] text-center font-bricolage text-[13px] leading-5 font-semibold text-course-ink',
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
