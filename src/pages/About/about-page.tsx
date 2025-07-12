import { AboutContainer } from './components/about-container';
import { MoreInfo } from './components/more-info';
import { BrandPartners } from './components/partners';
import { Stack } from './components/stack';
import { Statistics } from './components/statistics';
import { AboutTopSection } from './components/top-section';

export default function AboutPage() {
  return (
    <main className="flex flex-col overflow-hidden relative min-h-screen bg-sidebar-bg py-8 gap-10">
      <AboutTopSection />
      <div className="flex flex-col z-30 mt-20 gap-2">
        <AboutContainer />
        <MoreInfo />
      </div>
      <Statistics />
      <BrandPartners />
      <Stack />
    </main>
  );
}
