import { Outlet, useLocation } from 'react-router';
import { NavbarMobile } from '@/components/nav-bar-mobile';
import Footer from '@/components/footer';
import TopNavMobile from '@/components/top-nav-mobile';
import { Sidebar } from '@/components/sidebar';
import TopNavDesktop from '@/components/top-nav-desktop';

const RootLayout = () => {
  const pathname = useLocation().pathname;
  const validPaths = [
    '/',
    'projects',
    'contact',
    'services',
    'about',
    'contact',
    'termsofuse',
    'privacy-policy',
  ];

  const renderFooter = validPaths.includes(pathname);

  return (
    <main className="relative flex flex-col gap-10 bg-sidebar-bg">
      <TopNavMobile />
      <div className="flex max-w-[1440px] ">
        <Sidebar />
        <div className="flex md:w-[66.4%] relative mt-28 md:mt-0 flex-col gap-10">
          <TopNavDesktop />
          <Outlet />
          {renderFooter && <Footer />}
        </div>
      </div>
      <NavbarMobile />
    </main>
  );
};
export default RootLayout;
