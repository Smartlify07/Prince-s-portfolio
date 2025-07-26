export const StatsSection = () => {
  return (
    <section className="px-4 flex items-center justify-center md:px-0">
      <hr className="border-[#D9D9D9]/5 border hidden md:block w-4/12" />
      <div className="flex flex-col md:w-11/12 md:flex-row md:justify-center md:items-center texture rounded-3xl p-6 gap-2.5 md:gap-[42px] bg-sidebar-bg/30">
        <div className="flex items-center gap-4 flex-wrap md:justify-center md:flex-nowrap md:gap-[42px]">
          <Stat number={3} text="Years of Experience" />
          <Stat number={24} text="Projects Completed" />
        </div>
        <div className="w-6/12 md:w-auto">
          <Stat number={4} text="Collaborate as a team" />
        </div>
      </div>
      <hr className="border-[#D9D9D9]/5 border hidden md:block w-4/12" />
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
