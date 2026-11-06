import { cn } from '@/lib/utils';
import type { ProofCardData } from '../proof.constants';

type ProofCardProps = ProofCardData;

export function ProofCard({ image, alt, imageClassName }: ProofCardProps) {
  return (
    <div className="relative aspect-[490/510] w-full">
      <div
        aria-hidden
        className="absolute inset-0 translate-y-1.5 rounded-[30px] bg-course-ink"
      />
      <div className="relative size-full overflow-hidden rounded-[30px] bg-white">
        <img
          src={image}
          alt={alt}
          className={cn('absolute max-w-none', imageClassName)}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-course-ink ring-inset"
        />
      </div>
    </div>
  );
}
