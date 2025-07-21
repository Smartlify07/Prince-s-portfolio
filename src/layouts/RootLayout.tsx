import { Outlet, useLocation } from 'react-router';
import { NavbarMobile } from '@/components/nav-bar-mobile';
import Footer from '@/components/footer';
import TopNavMobile from '@/components/top-nav-mobile';

const RootLayout = () => {
  const pathname = useLocation().pathname;
  console.log(pathname);
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
      <div className="mt-28 flex flex-col gap-10">
        <Outlet />
        {renderFooter && <Footer />}
      </div>
      <NavbarMobile />
    </main>
  );
};
export default RootLayout;
