import { CardWithMarker } from './card-with-marker';
import HighlightImage from '@/../public/assets/images/projects/design-highlight-2.png';
import type { Project } from '@/lib/types';

export const OutcomeSection = ({
  outcome,
}: {
  outcome: Project['outcome'];
}) => {
  return (
    <section className="grid gap-6 font-geist pb-10 border-b border-b-grey-4/60">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <h1 className="gradient-text text-start font-medium text-[40px]/[52px] -tracking-smaller">
              The Outcome
            </h1>
            <p className="text-sm/[150%] text-grey-9">{outcome.description}</p>
          </div>

          <div className="grid gap-2 px-4">
            {outcome.list.map((item, i) => (
              <CardWithMarker text={item} key={i} />
            ))}
          </div>
        </div>

        <p className="text-sm/[150%] text-grey-9 md:w-7/12">{outcome.footer}</p>
      </div>
      <div className="w-full md:h-[600px]">
        <img
          src={HighlightImage}
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};
