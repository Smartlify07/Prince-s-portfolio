import { maxwellEv } from '@/lib/projects/maxwell-ev';
import { CardWithMarker } from './card-with-marker';

export const OutcomeSection = () => {
  return (
    <section className="grid gap-6 font-geist pb-10 border-b border-b-grey-4/60">
      <div className="grid gap-2">
        <h1 className="gradient-text text-start font-medium text-[40px]/[52px] -tracking-smaller">
          The Outcome
        </h1>
        <p className="text-sm/[150%] text-grey-9">
          {maxwellEv.outcome.description}
        </p>
      </div>

      <div className="grid gap-2 px-4">
        {maxwellEv.outcome.list.map((item, i) => (
          <CardWithMarker text={item} key={i} />
        ))}
      </div>
      <p className="text-sm/[150%] text-grey-9">{maxwellEv.outcome.footer}</p>
    </section>
  );
};
