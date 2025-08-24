import Badge from '@/ui/badge';
import { tools } from '@/lib/constants';
import { Testimonials } from '@/components/testimonials';
import { LetsTalkButton } from '@/components/lets-talk-button';
import { BookACallButton } from '@/components/book-a-call-button';
import PriceBadge from '@/components/price-badge';

const MainContent = () => {
  return (
    <section className="py-8  gap-11 flex flex-col md:hidden">
      <div className="flex flex-col gap-9 px-4">
        <div className="flex flex-col gap-4">
          <PriceBadge />
          <header>
            <h1 className="gradient-text text-[40px]/[52px] tracking-[-2px] font-medium text-left font-geist">
              Making complex ideas easier to understand through smart design.
            </h1>
          </header>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
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

      <Testimonials />
    </section>
  );
};

export default MainContent;
