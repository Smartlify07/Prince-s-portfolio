import { DesignProcess } from './components/design-process';
import { ExclusiveDeals } from './components/exclusive-deals';
import { ExclusiveDealsTopSection } from './components/exlusive-deals-top-section';
import { IndustriesExceled } from './components/industries-exceled';
import { ServiceDescription } from './components/service-description';
import { StatsSection } from './components/stats';
import { TopSection } from './components/top-section';

export default function ServicesPage() {
  return (
    <main className="grid min-h-screen bg-sidebar-bg py-8 lg:py-0 gap-8 lg:gap-20">
      <div className="grid gap-10 lg:gap-14">
        <TopSection />
        <ServiceDescription />
      </div>
      <StatsSection />
      <div className="grid px-4 lg:px-0 gap-12">
        <ExclusiveDealsTopSection />
        <ExclusiveDeals />
      </div>
      <DesignProcess />
      <IndustriesExceled />
    </main>
  );
}
