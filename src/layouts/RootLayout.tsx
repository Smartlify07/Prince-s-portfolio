import { Outlet, useLocation } from 'react-router';
import { NavbarMobile } from '@/components/nav-bar-mobile';
import Footer from '@/components/footer';
import TopNavMobile from '@/components/top-nav-mobile';
import { Sidebar } from '@/components/sidebar';
import TopNavDesktop from '@/components/top-nav-desktop';
import { FaqSection } from '@/components/faq';
import { CustomQuestion } from '@/components/custom-question';
import ScrollToTop from '@/components/scroll-to-top';
import useScroll from '@/hooks/useScroll';
import { Pricing } from '@/components/pricing';

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
  const renderFaq = ['/contact'].includes(pathname);
  const renderPricing = ['/about', '/services'].includes(pathname);
  const { mainRef } = useScroll();

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-sidebar-bg relative">
      <TopNavMobile />
      <div className="md:block md:w-[484px] hidden bg-sidebar-bg fixed top-0 left-0 bottom-0 z-20">
        <Sidebar />
      </div>

      <div
        ref={mainRef}
        className="flex flex-col relative z-[10] gap-10 md:ml-[484px] overflow-y-hidden"
      >
        <TopNavDesktop />
        <div className="flex flex-col gap-10 md:gap-20">
          <div className="md:w-full md:overflow-x-auto flex flex-col gap-10 md:gap-20 scrollbar-hide">
            <div className="flex-1 overflow-y-auto md:w-[957px] md:pl-4 md:pr-10">
              <Outlet />
            </div>

            {renderPricing && (
              <div className="md:w-[957px] md:pl-4 md:pr-10">
                <Pricing />
              </div>
            )}
            {renderFaqAndQuestion && (
              <div className="flex flex-col w-full md:w-[957px] md:pl-4 md:pr-10 gap-10 items-start md:flex-row md:gap-6">
                <div className="px-4 md:px-0 md:w-8/12">
                  <FaqSection />
                </div>
                <CustomQuestion />
              </div>
            )}
            {renderFaq && (
              <div className="px-4 border border-red-500 md:pl-4 md:pr-10 md:w-[957px] ">
                <FaqSection />
              </div>
            )}
          </div>
          {renderFooter && <Footer />}
        </div>
      </div>
      <NavbarMobile />
      <ScrollToTop />
    </main>
  );
};
export default RootLayout;
