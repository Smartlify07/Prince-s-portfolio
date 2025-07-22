export const Statistics = () => {
  return (
    <section className="px-4 flex flex-col gap-8">
      <h1 className="gradient-text text-[40px] font-medium font-geist -tracking-smaller">
        Statistics:
      </h1>

      <div className="rounded-3xl texture gap-4 md:hidden flex flex-col md:flex-row py-6 px-4">
        <div className="grid grid-cols-2 gap-10 md:hidden">
          <Stat title="Years of Experience" value="3+" border />
          <Stat title="Projects Completed" value="24+" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Stat title="Collaborate as a Team" value="4+" border />
          <Stat title="Industries" value="12+" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Stat title="Design Community" value="200+" border />
          <Stat title="Awards" value="2+" />
        </div>
      </div>
      <div className="hidden md:flex rounded-3xl texture gap-8 py-6 px-4">
        <Stat title="Years of Experience" value="3+" border />
        <Stat title="Projects Completed" value="24+" border />
        <Stat title="Collaborate as a Team" value="4+" border />
        <Stat title="Industries" value="12+" border />
        <Stat title="Design Community" value="200+" border />
        <Stat title="Awards" value="2+" />
      </div>
    </section>
  );
};

const Stat = ({
  title,
  value,
  border,
}: {
  title: string;
  value: string;
  border?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col w-full col-span-1 md:justify-between  wrap-break-word font-geist gap-4  ${
        border ? 'border-r border-r-grey-4 pr-2' : ''
      }`}
    >
      <h4 className="text-grey-9 text-sm/[150%] font-normal font-geist wrap-break-word text-wrap  line-clamp-2">
        {title}
      </h4>

      <h1 className="text-[40px] -tracking-smaller gradient-text font-bold line-clamp-2">
        {value}
      </h1>
    </div>
  );
};
