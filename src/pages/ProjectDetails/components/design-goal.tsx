import { CardWithMarker } from './card-with-marker';
import type { Project } from '@/lib/types';

export const DesignGoalSection = ({
  designGoal,
  goalBlocks,
  footer,
}: {
  designGoal: Project['goals']['description'];
  goalBlocks: Project['goals']['goalBlocks'];
  footer: Project['goals']['footer'];
}) => {
  return (
    <section className="grid gap-6 pb-10 border-b border-b-grey-4/60 md:flex md:items-start">
      <h1 className="text-[40px]/[52px] w-9/12 -tracking-smaller font-medium gradient-text">
        Goal of the Design
      </h1>

      <div className="grid gap-4">
        <p className="text-sm/[150%] text-grey-9">{designGoal}</p>

        <div className="grid gap-2">
          <p className="text-sm/[150%] text-grey-9">
            Specifically, the design aimed to:
          </p>
          <div className="px-4 grid gap-2">
            {goalBlocks.map((block, i) => (
              <CardWithMarker {...block} key={i} />
            ))}
          </div>
        </div>

        <p className="text-sm/[150%] text-grey-9">{footer}</p>
      </div>
    </section>
  );
};
