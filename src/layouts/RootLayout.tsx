import { Outlet } from 'react-router';
import { NavbarMobile } from '@/components/nav-bar-mobile';
import Footer from '@/components/footer';

const RootLayout = () => {
  return (
    <main className="relative flex flex-col gap-10 bg-sidebar-bg">
      <NavbarMobile />
      <Outlet />
      <Footer />
    </main>
  );
};
export default RootLayout;
