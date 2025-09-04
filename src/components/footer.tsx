import X from '@/../public/assets/icons/Twitter.svg';
import LinkedIn from '@/../public/assets/icons/LinkedIn.svg';
import Behance from '@/../public/assets/icons/Behance.svg';
import Email from '@/../public/assets/icons/envelope.svg';
import LinkWithWave from './link-with-wave';
import { ScrollToTopButton } from './scroll-to-top-button';
import { LetsTalkButton } from './lets-talk-button';
import { BookACallButton } from './book-a-call-button';

const Footer = () => {
  const socialIcons = [LinkedIn, X, Behance, Email];
  return (
    <footer className="py-10 px-4 min-h-[580px] md:px-0 bg-sidebar-bg overflow-hidden relative grid gap-10 lg:min-h-auto">
      <div className="absolute inset-0 bg-[rgba(34,148,242,0.1)] w-full h-full left-0 top-0 opacity-40"></div>
      <div className="absolute w-full hidden lg:block h-[502px] md:w-[502px] left-0 footer-bottom opacity-10"></div>
      <section className="flex flex-col items-center gap-8 relative">
        <header className=" relative md:static flex flex-col items-center ">
          <h1 className="gradient-text font-medium font-geist text-[40px]/[52px] tracking-1 text-center">
            Have a project in mind?
          </h1>
          <h1 className="gradient-text font-medium font-geist text-[40px]/[52px] tracking-1 text-center">
            Let’s get to work.
          </h1>

          <ScrollToTopButton />
        </header>
        <div className="flex items-center justify-center gap-4">
          <BookACallButton />
          <LetsTalkButton />
        </div>
      </section>
      <div className="rounded-full circle-gradient size-[1054px] absolute blur-[200px] right-[48px] top-[300px]"></div>
      <section className="flex flex-col gap-8 relative md:flex-row md:items-start md:justify-between p-4 md:pt-4 md:px-4 border-t z-10 border-[#4C4C4C]/40">
        <div className="absolute w-full lg:hidden h-[502px] md:w-[502px] left-0 top-0 footer-bottom opacity-50"></div>
        <div className="flex items-center md:items-start  flex-col gap-2.5">
          <div className="flex items-center gap-4">
            {socialIcons.map((icon, index) => (
              <a className="text-[#909090]" href="#" key={index}>
                <img src={icon} alt="social-icon" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <LinkWithWave
              to="/privacy-policy"
              className="text-[#909090] hover:text-grey-opaque transition-colors pt-1.5 pb-1.5 pr-1.5 text-sm/[14px] tracking-[0%] cursor-pointer font-geist"
            >
              Privacy Policy
            </LinkWithWave>
            <span className="bg-[#909090] h-[18px] w-px"></span>
            <LinkWithWave
              to="/termsofuse"
              className="text-[#909090] hover:text-grey-opaque transition-colors p-1.5 text-sm/[14px] tracking-[0%] font-geist"
            >
              Terms of Use
            </LinkWithWave>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-[#909090] text-sm font-geist">CONTACT ME:</h3>
            <h3 className="text-[#EDEDEB] text-sm font-geist font-medium">
              +2348102396534{' '}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-[#909090] text-sm font-geist">EMAIL:</h3>
            <h3 className="text-[#EDEDEB] font-geist text-sm font-medium">
              princeugboga@gmail.com{' '}
            </h3>
          </div>

          <div className="pt-2">
            <h3 className="text-[#909090] text-sm/[150%] font-geist">
              Prince Ugboga &copy; 2025 | All rights
              <br />
              reserved.
            </h3>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
