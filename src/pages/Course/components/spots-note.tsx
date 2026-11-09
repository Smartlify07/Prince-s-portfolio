import { cn } from '@/lib/utils';

type SpotsNoteProps = {
  className?: string;
  primary?: string;
  secondary?: string;
};

export function SpotsNote({
  className,
  primary = 'Only 30 spots available',
  secondary = 'UI/UX Design + Remote Job Training',
}: SpotsNoteProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-[10px] font-inter text-[14px] leading-[17px] font-medium text-course-muted',
        className
      )}
    >
      <p>{primary}</p>
      <span aria-hidden className="size-2 shrink-0 rounded-full bg-current" />
      <p>{secondary}</p>
    </div>
  );
}
