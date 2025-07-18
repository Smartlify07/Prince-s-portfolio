import { maxwellEv } from '@/lib/projects/maxwell-ev';
import { CardWithMarker } from './card-with-marker';

export const ChallengesSection = () => {
  return (
    <section className="grid gap-6 pb-10 border-b border-b-grey-4/60">
      <h1 className="text-[40px]/[52px] w-9/12 -tracking-smaller font-medium gradient-text">
        Challenges
      </h1>

      <div className="grid gap-4">
        <p className="text-sm/[150%] text-grey-9">
          {maxwellEv.challenge.description}
        </p>

        <div className="px-4 grid gap-4">
          {maxwellEv.challenge.blocks.map((block, i) => (
            <div key={i} className="grid gap-2">
              <h1 className="gradient-text text-xl font-medium -tracking-smaller">
                {block.title}
              </h1>
              {block.subBlocks?.map((text, i) => (
                <CardWithMarker key={i} text={text} />
              ))}
            </div>
          ))}
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
