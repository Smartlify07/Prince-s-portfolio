import { Calendar, HamburgerMenu, Plain } from '@solar-icons/react';
import Logo from '@/../public/assets/images/Logo.svg';
import Wifi from '@/../public/assets/icons/Wifi.svg';
import Battery from '@/../public/assets/icons/Battery.svg';
import Cellular from '@/../public/assets/icons/cellular.svg';
import Behance from '@/../public/assets/icons/Behance.svg';
import Dribbble from '@/../public/assets/icons/Dribbble.svg';
import Twitter from '@/../public/assets/icons/Twitter.svg';
import LinkedIn from '@/../public/assets/icons/LinkedIn.svg';
import Button from '@/ui/button';
import { useState } from 'react';

export default function TopNavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="bg-[rgba(14,14,14,0.7)] z-50 font-geist flex flex-col gap-4 md:hidden w-full px-4 backdrop-blur-[10px] sticky top-0 rounded-b-2xl">
      <div className="flex flex-col gap-2">
        <StatusSection />
        <LogoSection onToggle={() => toggle()} />
      </div>
      {isOpen && <BottomSection />}
    </nav>
  );
}

const LogoSection = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <div className="flex items-center justify-between font-geist border-b border-b-grey-4/60">
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-1">
          <img
            src={Logo}
            alt="logo"
            className="aspect-[122/25] w-[122px] h-[25px]"
          />
          <p className="text-[10px] text-grey-9 font-medium font-geist">
            Designer, Researcher, and Creator
          </p>
        </div>
        <div className="border-r border-l border-dashed flex items-center gap-2 border-grey-9 py-4 px-[7px]">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <span className="text-sm  -tracking-smallest text-grey-9">
            2 spots left
          </span>
        </div>
      </div>
      <HamburgerMenu onClick={onToggle} className="text-grey-9" size={16} />
    </div>
  );
};

const StatusSection = () => {
  return (
    <div className="flex items-center font-geist py-2 h-10 justify-between">
      <div className="flex items-center gap-2 pr-2.5">
        <span className="text-grey-opaque font-medium">9:41</span>
      </div>
      <div className="pl-2.5 flex justify-end items-center gap-[7px]">
        <img src={Wifi} alt="wifi-icon" />
        <img src={Cellular} alt="wifi-icon" />
        <img src={Battery} alt="wifi-icon" />
      </div>
    </div>
  );
};

const BottomSection = () => {
  const icons = [Dribbble, Behance, Twitter, LinkedIn];
  return (
    <div className="flex flex-col gap-6 pb-4">
      <div className="flex text-sm/[14px] items-center gap-2 text-grey-9">
        Connect with me at:
        <div className="flex items-center gap-0.5">
          {icons.map((icon, i) => (
            <img className="p-1.5" src={icon} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Calendar weight="Outline" size={16} />
          Book a Call
        </Button>
        <Button variant="default" className="flex items-center gap-2">
          <Plain weight="Outline" size={16} />
          Let's Talk
        </Button>
      </div>
    </div>
  );
};
