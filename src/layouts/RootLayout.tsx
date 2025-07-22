import { Outlet, useLocation } from 'react-router';
import { NavbarMobile } from '@/components/nav-bar-mobile';
import Footer from '@/components/footer';
import TopNavMobile from '@/components/top-nav-mobile';
import { Sidebar } from '@/components/sidebar';
import TopNavDesktop from '@/components/top-nav-desktop';
import { FaqSection } from '@/components/faq';
import { CustomQuestion } from '@/components/custom-question';
import ScrollToTop from '@/components/scroll-to-top';

const RootLayout = () => {
  const pathname = useLocation().pathname;
  const validPaths = [
    '/',
    '/projects',
    '/contact',
    '/services',
    '/about',
    '/contact',
    '/termsofuse',
    '/privacy-policy',
  ];
  const faqPaths = ['/services', '/about'];

  const renderFooter = validPaths.includes(pathname);
  const renderFaqAndQuestion = faqPaths.includes(pathname);

  return (
    <main className="relative flex flex-col gap-10 bg-sidebar-bg">
      <TopNavMobile />
      <div className="flex max-w-[1440px]">
        <Sidebar />
        <div className="flex md:w-[66.4%] relative md:mt-0 flex-col gap-10">
          <TopNavDesktop />
          <Outlet />
          {renderFaqAndQuestion && (
            <div className="flex flex-col px-4 gap-10 items-start md:flex-row md:gap-6">
              <FaqSection />
              <CustomQuestion />
            </div>
          )}
          {renderFooter && <Footer />}
        </div>
      </div>
      <NavbarMobile />
      <ScrollToTop />
    </main>
  );
};
export default RootLayout;
