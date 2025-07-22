import { maxwellEv } from '@/lib/projects/maxwell-ev';
import { CardWithMarker } from './card-with-marker';
import Button from '@/ui/button';
import HighlightImage from '@/../public/assets/images/projects/design-highlight-2.png';

export const FinalShowCaseSection = () => {
  return (
    <section className="flex flex-col gap-6 font-geist pb-10 border-b border-b-grey-4/60">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="flex flex-col gap-6 md:w-6/12">
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
                <CardWithMarker
                  text={item.text}
                  keyword={item.keyword}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:w-6/12">
          <p className="text-sm/[150%] text-grey-9">
            {maxwellEv.finalShowcase.footer}
          </p>

          <Button variant="outline" className="justify-self-start">
            View Website
          </Button>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="w-full h-[600px]">
          <img
            src={HighlightImage}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="w-full h-[304px] md:h-auto">
            <img
              src={HighlightImage}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-full h-[304px] md:h-auto">
            <img
              src={HighlightImage}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="w-full h-[371px] md:h-[300px]">
          <img
            src={HighlightImage}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
