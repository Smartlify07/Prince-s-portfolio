import { Outlet, useLocation } from 'react-router';
import { NavbarMobile } from '@/components/nav-bar-mobile';
import Footer from '@/components/footer';
import TopNavMobile from '@/components/top-nav-mobile';

const RootLayout = () => {
  const pathname = useLocation().pathname;
  const validPaths = [
    'projects',
    'contact',
    'services',
    'about',
    'contact',
    'termsofuse',
    'privacy-policy',
  ];

  const renderFooter = validPaths.includes(pathname);
  console.log(renderFooter);
  return (
    <main className="relative flex flex-col gap-10 bg-sidebar-bg">
      <TopNavMobile />
      <NavbarMobile />
      <Outlet />
      {renderFooter && <Footer />}
    </main>
  );
};
export default RootLayout;
