import Badge from '@/ui/badge';
import { tools } from '@/lib/data/tools';
import { Testimonials } from '@/components/testimonials';
import { forwardRef } from 'react';
import { Link } from 'react-router';
import { BookACallButton } from './book-a-call-button';
import { LetsTalkButton } from './lets-talk-button';
import PriceBadge from './price-badge';
import { details } from '@/lib/constants';

export const Sidebar = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <aside
      ref={ref}
      className="md:flex h-screen overflow-y-auto flex-col border-r scrollbar-hide border-r-grey-4/60 items-start w-full hidden"
    >
      <TopSection />
      <div className="pt-10 px-0 pb-2.5 flex flex-col gap-11">
        <IntroSection />
        <Testimonials />
      </div>
    </aside>
  );
});

export const TopSection = () => {
  return (
    <section className="bg-[rgba(14,14,14,0.7)] hidden  border-b sticky top-0 border-b-grey-4/60 z-50 font-geist md:flex justify-between gap-4 w-full h-[86px] shrink-0 pl-10 backdrop-blur-[10px]">
      <Link
        to={'/'}
        className="flex justify-center flex-col w-[20.1vw] gap-1 py-px"
      >
        <h1 className="font-bold font-geist tracking-tighter gradient-text text-xl">
          {details.firstName} {details.lastName}
        </h1>

        <p className="text-[10px] text-grey-9 font-medium font-geist">
          Product Designer , UI/UX Design{' '}
        </p>
      </Link>
      <div className="border-r grow border-l available-slots border-dashed flex justify-center items-center gap-2 border-grey-9 py-4 px-[7px] w-[9.58vw]">
        <div className="size-5 flex items-center rounded-full spots justify-center bg-linear-[270deg,rgba(34,148,242,0.02)_2.08%,rgba(34,148,242,0.10)_50.96%,rgba(34,148,242,0.02)_97.92%]">
          <div className="bg-primary size-2.5 rounded-full spots"></div>
        </div>
        <span className="text-sm -tracking-smallest text-grey-9">
          2 spots left
        </span>
      </div>
    </section>
  );
};

const IntroSection = () => {
  return (
    <section className="gap-11 pl-10 pr-4 h-[335px] overflow-y-auto scrollbar-hide flex flex-col">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4">
          <PriceBadge />
          <header>
            <h1 className="gradient-text text-[40px]/[52px] tracking-[-2px] font-medium text-left font-geist">
              Transforming complex problems into intuitive and scalable
              solutions.{' '}
            </h1>
          </header>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center md:flex-wrap xl:flex-nowrap gap-4">
            <BookACallButton />
            <LetsTalkButton />
          </div>
          <div className="pt-4 flex items-center flex-wrap gap-2 border-t-[rgba(76,76,76,0.6)] border-t border-dashed">
            {tools.map((tool) => (
              <Badge
                key={tool.name}
                className="inline-flex shrink-0 items-center font-geist text-[#EDEDEB] gap-1 p-2 opacity-50"
              >
                <img src={tool.Icon} key={tool.name} />
                {tool.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
