import HeroSection from './components/hero';
import MainContent from './components/main-content';

const HomePage = () => {
  return (
    <main className="bg-sidebar-bg min-h-screen flex flex-col gap-8">
      <HeroSection />
      <MainContent />
    </main>
  );
};
export default HomePage;
