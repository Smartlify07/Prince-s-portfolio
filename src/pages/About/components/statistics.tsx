export const Statistics = () => {
  return (
    <section className="px-4 flex flex-col gap-8">
      <h1 className="gradient-text text-[40px] font-medium font-geist -tracking-smaller">
        Statistics:
      </h1>

      <div className="rounded-3xl texture gap-4 flex flex-col py-6 px-4">
        <div className="flex items-center gap-10">
          <Stat title="Years of Experience" value="3+" border />
          <Stat title="Projects Completed" value="24+" />
        </div>
        <div className="flex items-center gap-10">
          <Stat title="Collaborate as a Team" value="4+" border />
          <Stat title="Industries" value="12+" />
        </div>
        <div className="flex items-center gap-10">
          <Stat title="Design Community" value="200+" border />
          <Stat title="Awards" value="2+" />
        </div>
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
      className={`flex flex-col min-w-[168px] font-geist gap-4 pr-2 ${
        border ? 'border-r border-r-grey-4' : ''
      }`}
    >
      <h4 className="text-grey-9 text-sm font-medium font-geist">{title}</h4>
      <h1 className="text-[40px] -tracking-smaller gradient-text font-bold">
        {value}
      </h1>
    </div>
  );
};
