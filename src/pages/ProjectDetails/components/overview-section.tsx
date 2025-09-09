import type { Project } from '@/lib/types';
import Badge from '@/ui/badge';

const OverviewSection = ({ overview }: { overview: Project['overview'] }) => {
  return (
    <section className="flex flex-col gap-10 pb-10 border-b border-b-grey-4/60">
      <Badge
        shadowSize="small"
        className="text-[#EDEDEB] text-base font-medium self-start"
      >
        Problem
      </Badge>

      <div className="flex flex-col gap-4">
        <h1 className="text-[40px]/[52px] font-medium linear-gradient-text-1 -tracking-smaller">
          Project Overview
        </h1>
        <p className="text-sm text-grey-9">
          {overview[0]}
          <br /> <br />
          {overview[1]}
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;
