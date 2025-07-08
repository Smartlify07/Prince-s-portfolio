import { ServiceDescription } from './components/service-description';
import { TopSection } from './components/top-section';

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-sidebar-bg py-8 gap-10">
      <TopSection />
      <ServiceDescription />
    </main>
  );
}
