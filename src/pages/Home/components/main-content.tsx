import { Calendar, Plain } from '@solar-icons/react';
import Button from '@/ui/button';
import Badge from '@/ui/badge';
import { tools } from '@/lib/constants';
import Testimonials from '@/components/testimonials';

const MainContent = () => {
  return (
    <section className="py-8 gap-11 flex flex-col">
      <div className="flex flex-col gap-9 px-4">
        <div className="flex flex-col gap-4">
          <Badge className="font-geist self-start inline-flex items-center gap-1">
            <span className="text-[#909090]">From</span>
            <span className="text-[#EDEDEB] font-semibold leading-[20px] text-sm">
              $1,300
            </span>
          </Badge>
          <header>
            <h1 className="gradient-text text-[40px]/[52px] tracking-[-5%] font-medium text-left font-geist">
              Making complex ideas easier to understand through smart design.
            </h1>
          </header>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Calendar className="text-[#EDEDEB]" size={16} /> Book a Call
            </Button>
            <Button variant="default" className="flex items-center gap-2">
              <Plain className="text-[#EDEDEB]" size={16} />
              Let's Talk
            </Button>
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
