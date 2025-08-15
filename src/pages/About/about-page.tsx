import { AboutContainer } from './components/about-container';
import { MoralCompasses } from './components/moral-compasses';
import { MoreInfo } from './components/more-info';
import { BrandPartners } from './components/partners';
import { Stack } from './components/stack';
import { Statistics } from './components/statistics';
import { AboutTopSection } from './components/top-section';
import { UniqueValueProp } from './components/unique-value-prop';

export default function AboutPage() {
  return (
    <main className="flex flex-col relative min-h-screen overflow-hidden bg-sidebar-bg gap-10 md:gap-20">
      <AboutTopSection />
      <div className="flex flex-col z-30 mt-20 gap-2 md:px-0">
        <AboutContainer />
        <MoreInfo />
      </div>
      <Statistics />
      <BrandPartners />
      <Stack />
      <MoralCompasses />
      <UniqueValueProp />
    </main>
  );
}
