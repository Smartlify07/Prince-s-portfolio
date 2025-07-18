import { maxwellEv } from '@/lib/projects/maxwell-ev';
import { CardWithMarker } from './card-with-marker';
import Button from '@/ui/button';

export const FinalShowCaseSection = () => {
  return (
    <section className="flex flex-col gap-6 font-geist pb-10 border-b border-b-grey-4/60">
      <div className="grid gap-2">
        <h1 className="gradient-text text-start font-medium text-[40px]/[52px] -tracking-smaller">
          Final Product Showcase
        </h1>
      </div>

      <div className="grid gap-2">
        <h3 className="gradient-text text-start font-medium text-xl -tracking-smaller">
          What I Delivered:
        </h3>
        <div className="grid gap-2 px-4">
          {maxwellEv.finalShowcase.blocks.map((item, i) => (
            <CardWithMarker text={item.text} keyword={item.keyword} key={i} />
          ))}
        </div>
      </div>
      <p className="text-sm/[150%] text-grey-9">
        {maxwellEv.finalShowcase.footer}
      </p>

      <Button variant="outline" className="self-start">
        View Website
      </Button>
    </section>
  );
};
