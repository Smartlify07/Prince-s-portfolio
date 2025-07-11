import { CustomQuestion } from './components/custom-question';
import { DesignProcess } from './components/design-process';
import { ExclusiveDeals } from './components/exclusive-deals';
import { ExclusiveDealsTopSection } from './components/exlusive-deals-top-section';
import { FaqSection } from './components/faq';
import { IndustriesExceled } from './components/industries-exceled';
import { Pricing } from './components/pricing';
import { ServiceDescription } from './components/service-description';
import { StatsSection } from './components/stats';
import { TopSection } from './components/top-section';

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-sidebar-bg py-8 gap-10">
      <TopSection />
      <ServiceDescription />
      <StatsSection />
      <div className="flex flex-col px-4 gap-12">
        <ExclusiveDealsTopSection />
        <ExclusiveDeals />
      </div>
      <DesignProcess />
      <IndustriesExceled />
      <Pricing />
      <FaqSection />
      <CustomQuestion />
    </main>
  );
}
