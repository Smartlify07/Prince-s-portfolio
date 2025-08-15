import Button from '@/ui/button';
import Ghost from '/public/assets/images/ghost.svg';
import { DoubleAltArrowLeft } from '@solar-icons/react';
import TopNavMobile from '@/components/top-nav-mobile';
import { NavbarMobile } from '@/components/nav-bar-mobile';
import ScrollToTop from '@/components/scroll-to-top';
import TopNavDesktop from '@/components/top-nav-desktop';
import { TopSection } from '@/components/sidebar';
import { useNavigate } from 'react-router';

export const NotFound = () => {
  const router = useNavigate();
  return (
    <main className="not-found-page min-h-screen overflow-hidden flex flex-col scrollbar-hide relative bg-[#0F0F1A] font-geist">
      <TopNavMobile />
      <div className="flex fixed top-0 left-0 w-full items-start">
        <div className="w-[33.3%]">
          <TopSection />
        </div>
        <div className="w-[66.7%]">
          <TopNavDesktop />
        </div>
      </div>

      <div className="w-full min-h-screen  pb-10 px-4 flex items-center justify-center not-found-overlay">
        <div className="flex flex-col gap-10">
          <div className="grid gap-4">
            <div className="grid">
              <div className="flex justify-center items-center">
                <h1 className="not-found-text font-semibold text-[180px] md:text-[400px]">
                  4
                </h1>
                <img
                  src={Ghost}
                  alt="ghost"
                  className="size-[150px] mt-4 md:size-[346px]"
                />
                <h1 className="not-found-text font-semibold text-[180px] md:text-[400px]">
                  4
                </h1>
              </div>
              <p className="text-xl font-medium text-center -tracking-smaller not-found-text">
                Oops! It seems that the page you are looking for is not
                available.
              </p>
            </div>
            <p className="text-sm/[150%] text-center text-grey-9 font-geist">
              The page you’re seeking might have been relocated, or perhaps the
              URL was entered incorrectly.
            </p>
          </div>

          <Button
            onClick={() => {
              router('/');
            }}
            variant="default"
            className="flex self-center items-center gap-2"
          >
            <DoubleAltArrowLeft weight="Outline" /> Go back to the home page
          </Button>
        </div>
      </div>
      <NavbarMobile />
      <ScrollToTop />
    </main>
  );
};
