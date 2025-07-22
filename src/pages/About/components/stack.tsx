import { toolsUsed } from '@/lib/constants';

export const Stack = () => {
  return (
    <section className="px-4 flex flex-col gap-8 font-geist">
      <header className="flex flex-col gap-1">
        <h1 className="text-[40px] font-medium font-geist gradient-text">
          Stack
        </h1>
        <p className="text-grey-9 text-sm/[150%]">
          My favorite tools that I work with
        </p>
      </header>
      <div className="grid grid-cols-6 md:grid-cols-11 items-center gap-4">
        {toolsUsed.map((tool) => (
          <div key={tool.title} className="flex flex-col md:items-center gap-2">
            <div
              key={tool.title}
              className="flex flex-col rounded-full bg-orange-2/2 opacity-50  button-shadows items-center justify-center size-14 gap-2"
            >
              <img src={tool.icon} alt={tool.title} className="size-6" />
            </div>
            <p className="text-grey-9 text-center text-sm/[150%]">
              {tool.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
