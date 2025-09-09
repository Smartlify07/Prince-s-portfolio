import { cn } from '@/lib/utils';

export const WorkHistory = () => {
  return (
    <section className="px-4 md:px-0 flex flex-col gap-8">
      <h1 className="gradient-text text-[40px] font-medium font-geist -tracking-smaller">
        Work History
      </h1>

      <div className="rounded-3xl texture-2 grid grid-cols-2 gap-10 md:flex md:flex-nowrap md:flex-row md:gap-4 2xl:justify-between py-6 px-4">
        <Stat
          title="Bles Software"
          location="Tel Aviv, Israel"
          value="UI/UX Designer"
          timeline="Jul 2024 - Jul 2025"
          className="border-r border-r-grey-4"
        />
        <Stat
          title="Fahampesa"
          location="Sparks, United States"
          value="UI/UX Designer"
          timeline="Jun 2025 – July 2025"
          className="md:border-r md:border-r-grey-4"
        />
        <Stat
          title="Sciential Agency"
          location="Florida, United States"
          value="UI/UX Designer"
          timeline="Feb 2024  – May 2024"
          className="border-r border-r-grey-4"
        />
        <Stat
          title="Droomwork.io"
          location="Lagos, Nigeria"
          value="UI/UX Designer"
          timeline="May 2023 – Sep 2023"
          className="md:border-r md:border-r-grey-4"
        />
        <Stat
          title="X-plore Design Studio"
          value="UI/UX Design Mentor"
          timeline="2023 – 2025"
          location="Port Harcourt, Nigeria"
          last
        />
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
  location,
  last,
}: {
  title: string;
  value: string;
  timeline: string;
  border?: boolean;
  className?: string;
  location?: string;
  last?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col w-full grow md:justify-between md:w-1/5 2xl:w-full font-geist gap-4',
        last ? 'pr-0' : 'pr-2',
        border ? 'border-r border-r-grey-4' : '',
        className
      )}
    >
      <h4 className="text-grey-9 text-sm/[150%] font-normal 2xl:line-clamp-2">
        <span className="font-semibold">{title},</span>
        <br />
        <span className="text-grey-9 whitespace-wrap">{location}</span>
      </h4>

      <h1 className="text-xl -tracking-smaller h- whitespace-pre-line gradient-text font-extrabold break-words line-clamp-2">
        {value}
      </h1>

      <h4 className="text-grey-9 text-xs/[150%] font-normal break-words line-clamp-2">
        {timeline}
      </h4>
    </div>
  );
};
