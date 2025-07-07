import Footer from '../../components/footer';
import HeroSection from './components/hero';
import MainContent from './components/main-content';
import SelectedWork from './components/selected-work';

const HomePage = () => {
  return (
    <main className="bg-sidebar-bg min-h-screen flex flex-col gap-8">
      <HeroSection />
      <MainContent />
      <SelectedWork />
      <Footer />
    </main>
  );
};
export default HomePage;
