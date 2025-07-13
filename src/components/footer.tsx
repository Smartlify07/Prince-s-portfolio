import { ArrowUp, Calendar, Plain } from '@solar-icons/react';
import Button from '@/ui/button';
import Dribbble from '@/../public/assets/icons/Dribbble.svg';
import X from '@/../public/assets/icons/Twitter.svg';
import LinkedIn from '@/../public/assets/icons/LinkedIn.svg';
import Behance from '@/../public/assets/icons/Behance.svg';
import Email from '@/../public/assets/icons/envelope.svg';
import SixSelf from '@/../public/assets/icons/sixself.svg';

const Footer = () => {
  const socialIcons = [Email, Dribbble, Behance, X, LinkedIn, SixSelf];
  return (
    <footer className="py-10 px-4 bg-sidebar-bg overflow-hidden relative grid gap-10">
      <div className="absolute inset-0 bg-[rgba(225,185,148,0.1)] opacity-40"></div>
      <section className="flex flex-col items-center gap-8">
        <header className=" relative flex flex-col items-center ">
          <h1 className="gradient-text font-medium font-geist text-[40px]/[52px] tracking-1 text-center">
            Have a project in mind?
          </h1>
          <h1 className="gradient-text font-medium font-geist text-[40px]/[52px] tracking-1 text-center">
            Let’s get to work.
          </h1>

          <ArrowUp
            className="text-[#909090] absolute bottom-3 right-0"
            size={16}
            weight="Broken"
          />
        </header>
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="text-[#ededeb]" />
            Book a Call
          </Button>
          <Button variant="default" className="flex items-center gap-2">
            <Plain className="text-[#ededeb]" />
            Let's Talk
          </Button>
        </div>
      </section>
      <div className="rounded-full circle-gradient size-[1054px] absolute blur-[200px] right-[48px] top-[300px]"></div>
      <section className="flex flex-col gap-8 p-4 border-t border-[#4C4C4C]/40">
        <div className="flex items-center flex-col gap-2.5">
          <div className="flex items-center gap-4">
            {socialIcons.map((icon, index) => (
              <a className="text-[#909090]" href="#" key={index}>
                <img src={icon} alt="social-icon" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <a
              href="#"
              className="text-[#909090] p-1.5 text-sm/[14px] tracking-[0%] font-geist"
            >
              Privacy Policy
            </a>
            <span className="bg-[#909090] h-[18px] w-px"></span>
            <a
              href="#"
              className="text-[#909090] p-1.5 text-sm/[14px] tracking-[0%] font-geist"
            >
              Terms of Use
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-[#909090] text-sm/[150%] text-start font-geist">
            You can hire me directly on{' '}
          </h3>

          <div className="flex items-center justify-center gap-2">
            <a
              href="#"
              className="text-[#EDEDEB] font-medium text-sm/[14px] tracking-[0%] font-geist"
            >
              Upwork
            </a>
            <span className="text-[#909090] font-geist text-sm/[150%]">or</span>
            <a
              href="#"
              className="text-[#EDEDEB] font-medium text-sm/[14px] tracking-[0%] font-geist"
            >
              Contra
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-[#909090] text-sm font-geist">CONTACT ME:</h3>
            <h3 className="text-[#EDEDEB] text-sm font-geist font-medium">
              +2349033267104
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-[#909090] text-sm font-geist">EMAIL:</h3>
            <h3 className="text-[#EDEDEB] font-geist text-sm font-medium">
              temitayobolaji@gmail.com
            </h3>
          </div>

          <div className="pt-2">
            <h3 className="text-[#909090] text-sm/[150%] font-geist">
              Ezekiel Olayiwola &copy; 2025 | All rights reserved.
            </h3>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
