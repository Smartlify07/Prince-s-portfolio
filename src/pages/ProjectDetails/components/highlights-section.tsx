import { maxwellEv } from '@/lib/projects/maxwell-ev';
import { CardWithMarker } from './card-with-marker';

export const HighlightsSection = () => {
  return (
    <section className="grid gap-6 font-geist pb-10 border-b border-b-grey-4/60">
      <div className="grid gap-2">
        <h1 className="gradient-text text-start font-medium text-[40px]/[52px] -tracking-smaller">
          Design Highlights
        </h1>
        <p className="text-sm/[150%] text-grey-9">
          This project challenged me to design with purpose, not just polish.
          Some of my proudest elements include:
        </p>
      </div>

      <div className="grid gap-2 px-4">
        {maxwellEv.highlights.list.map((item, i) => (
          <CardWithMarker text={item} key={i} />
        ))}
      </div>
      <div className="grid gap-2">
        <h3 className="gradient-text text-start font-medium text-xl -tracking-smaller">
          Testing & Refinement
        </h3>
        <div className="grid gap-2 px-4">
          {maxwellEv.testing.list.map((item, i) => (
            <CardWithMarker text={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
