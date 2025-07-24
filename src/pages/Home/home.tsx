import HeroSection from './components/hero';
import MainContent from './components/main-content';
import SelectedWork from './components/selected-work';

const HomePage = () => {
  return (
    <main className="bg-sidebar-bg  flex flex-col gap-8">
      <HeroSection />
      <MainContent />
      <SelectedWork />
    </main>
  );
};
export default HomePage;
