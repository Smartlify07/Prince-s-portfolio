import { Outlet, useLocation } from 'react-router';
import { NavbarMobile } from '@/components/nav-bar-mobile';
import Footer from '@/components/footer';
import TopNavMobile from '@/components/top-nav-mobile';
import { Sidebar } from '@/components/sidebar';
import TopNavDesktop from '@/components/top-nav-desktop';
import { FaqSection } from '@/components/faq';
import ScrollToTop from '@/components/scroll-to-top';
import useScroll from '@/hooks/useScroll';
import { Pricing } from '@/components/pricing';
import { cn } from '@/lib/utils';
import BackgroundImage from '@/../public/assets/images/service-page-bg.svg';

const RootLayout = () => {
  const pathname = useLocation().pathname;

  const normalizedPath = pathname.replace(/\/+$/, '');

  const footerPaths = [
    '/',
    '/projects',
    '/contact',
    '/services',
    '/about',
    '/contact',
    '/termsofuse',
    '/privacy-policy',
    '/testimonials',
  ];

  const faqPaths = ['/services', '/about'];

  const renderFooter =
    footerPaths.includes(normalizedPath) ||
    pathname === '/' ||
    normalizedPath.startsWith('/projects/');

  const renderFaqAndQuestion = faqPaths.includes(normalizedPath);

  const renderFaq = ['/contact'].includes(normalizedPath);

  const renderPricing = ['/about', '/services'].includes(normalizedPath);

  const pathsWithoutPadding = [
    '/',
    '/contact',
    '/projects',
    '/faq',
    '/termsofuse',
    '/privacy-policy',
  ];

  const shouldRemovePaddingTop = pathsWithoutPadding.includes(normalizedPath);

  const { mainRef } = useScroll();

  return (
    <main
      style={{
        backgroundImage: `${
          ['/services', '/about'].includes(normalizedPath)
            ? `url(${BackgroundImage})`
            : ''
        }`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
      }}
      className="flex flex-col lg:flex-row min-h-screen bg-sidebar-bg relative"
    >
      <TopNavMobile />
      <div className="lg:block lg:w-[33.3%] 2xl:max-w-[484px] hidden bg-sidebar-bg fixed top-0 left-0 bottom-0 z-20">
        <Sidebar />
      </div>

      <div
        ref={mainRef}
        className="flex flex-col relative z-[10] gap-10 lg:ml-[33.3%] 2xl:ml-[484px] 2xl:w-full overflow-y-hidden"
      >
        <TopNavDesktop />
        <div
          className={cn(
            'flex flex-col gap-10 lg:gap-20 2xl:w-full',
            shouldRemovePaddingTop ? 'pt-12 lg:pt-[86px]' : 'pt-[126px]',
            normalizedPath.startsWith('/testimonials') && 'pt-0'
          )}
        >
          <div className="lg:w-full 2xl:max-w-[1024px] 2xl:self-center lg:overflow-x-auto flex flex-col gap-10 lg:gap-20 scrollbar-hide">
            <div
              className={cn(
                'flex-1 overflow-y-auto  ',
                !shouldRemovePaddingTop ? 'lg:px-4' : ''
              )}
            >
              <Outlet />
            </div>

            {renderPricing && (
              <div className="lg:px-4">
                <Pricing />
              </div>
            )}
            {renderFaqAndQuestion && <FaqSection showCustomQuestion />}
            {renderFaq && (
              <div className="px-4 lg:px-4">
                <FaqSection showCustomQuestion={false} />
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
