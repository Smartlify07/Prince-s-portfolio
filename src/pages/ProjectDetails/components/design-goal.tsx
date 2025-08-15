import { maxwellEv } from '@/lib/projects/maxwell-ev';
import { CardWithMarker } from './card-with-marker';

export const DesignGoalSection = () => {
  return (
    <section className="grid gap-6 pb-10 border-b border-b-grey-4/60 md:flex md:items-start">
      <h1 className="text-[40px]/[52px] w-9/12 -tracking-smaller font-medium gradient-text">
        Goal of the Design
      </h1>

      <div className="grid gap-4">
        <p className="text-sm/[150%] text-grey-9">
          The primary goal of the design for Maxwell EV Charging was to create a
          seamless, intuitive, and eco-conscious user experience that removes
          friction from the EV charging process while promoting sustainable
          mobility.
        </p>

        <div className="grid gap-2">
          <p className="text-sm/[150%] text-grey-9">
            Specifically, the design aimed to:
          </p>
          <div className="px-4 grid gap-2">
            {maxwellEv.goals.goalBlocks.map((block, i) => (
              <CardWithMarker {...block} key={i} />
            ))}
          </div>
        </div>

        <p className="text-sm/[150%] text-grey-9">
          In essence, the design was built to empower EV users with control,
          clarity, and confidence, making the transition to electric smoother
          and more rewarding.
        </p>
      </div>
    </section>
  );
};
