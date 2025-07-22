import { cn } from '@/lib/utils';

export const BrandPartners = () => {
  return (
    <section className="px-4 flex flex-col gap-8">
      <h1 className="gradient-text text-[40px] font-medium font-geist -tracking-smaller">
        Brands I’ve Partnered With
      </h1>

      <div className="rounded-3xl texture gap-4 flex flex-col md:flex-row py-6 px-4">
        <div className="flex items-center gap-10 md:items-stretch md:gap-6">
          <Stat
            title="Bles Software"
            value="UI/UX Designer"
            timeline="2024 – Present"
            border
          />
          <Stat
            title="Sefarvest Inc"
            value="UI/UX Designer"
            timeline="2023 – 2025"
            className="md:border-r md:border-r-grey-4"
          />
        </div>
        <div className="flex items-center gap-10 md:items-stretch md:gap-6">
          <Stat
            title="Advertmetrics Ltd"
            value="UI/UX Designer"
            timeline="Feb – May 2024"
            border
          />
          <Stat
            title="Temtech Enterprise"
            value="UX Researcher"
            timeline="2019 – 2021"
            className="md:border-r md:border-r-grey-4"
          />
        </div>
        <div className="flex items-center gap-10 md:items-stretch md:gap-6">
          <Stat
            title="Frubugh Nigeria Limited"
            value="Graphics Designer"
            timeline="2019 – 2020"
            border
          />
          <Stat
            title="Influence Global Relations"
            value="Graphics Designer"
            timeline="2015 – 2019"
          />
        </div>
      </div>
    </section>
  );
};

const Stat = ({
  title,
  value,
  border,
  timeline,
  className,
}: {
  title: string;
  value: string;
  timeline: string;
  border?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col w-full basis-0 shrink-0 grow md:justify-between wrap-break-word font-geist gap-4 pr-2',
        border ? 'border-r border-r-grey-4' : '',
        className
      )}
    >
      <h4 className="text-grey-9 text-sm/[150%] font-normal break-words line-clamp-2">
        {title}
      </h4>

      <h1 className="text-xl -tracking-smaller gradient-text font-extrabold break-words line-clamp-2">
        {value}
      </h1>

      <h4 className="text-grey-9 text-sm/[150%] font-normal break-words line-clamp-2">
        {timeline}
      </h4>
    </div>
  );
};
