export const StatsSection = () => {
  return (
    <section className="px-6">
      <div className="flex flex-col texture p-6 gap-2.5 bg-sidebar-bg/30">
        <div className="flex items-center gap-4">
          <Stat number={3} text="Years of Experience" />
          <Stat number={24} text="Projects Completed" />
        </div>
        <div className="w-6/12">
          <Stat number={4} text="Collaborate as a team" />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, text }: { number: number; text: string }) => {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-[40px] font-extrabold tracking-[-0.88px] font-geist gradient-text">
        {number}+
      </h1>
      <p className="text-sm/[150%] text-left text-[#909090] max-w-fit font-geist font-normal">
        {text}
      </p>
    </div>
  );
};
