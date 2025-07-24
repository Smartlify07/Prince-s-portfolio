import Behance from '@/../public/assets/icons/Behance.svg';
import Dribbble from '@/../public/assets/icons/Dribbble.svg';
import Twitter from '@/../public/assets/icons/Twitter.svg';
import LinkedIn from '@/../public/assets/icons/LinkedIn.svg';
import { CaseRoundMinimalistic, Crown, Cursor, User } from '@solar-icons/react';
import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Projects', path: '/projects', icon: CaseRoundMinimalistic },
  {
    label: 'Services',
    path: '/services',
    icon: Cursor,
  },
  {
    label: 'About',
    path: '/about',
    icon: User,
  },
  {
    label: 'Mentorship',
    path: '/mentorship',
    icon: Crown,
  },
];

export default function TopNavDesktop() {
  return (
    <nav className="bg-[rgba(14,14,14,0.7)] hidden h-[86px] z-[1000] font-geist md:flex justify-between items-center gap-2.5 w-full pt-6 pr-10 pb-4 pl-6 backdrop-blur-[10px] top-0 border-b border-b-grey-4/60">
      <NavLinks />
      <ContactSection />
    </nav>
  );
}

const NavLinks = () => {
  const pathname = useLocation().pathname;
  return (
    <div className="flex items-center pr-4 gap-2 font-geist">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            'inline-flex items-center text-sm gap-1.5 text-drop-shadow transition-colors hover:text-grey-opaque',
            pathname === link.path ? 'text-grey-opaque' : 'text-grey-9'
          )}
        >
          <link.icon size={16} weight="Outline" />
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const ContactSection = () => {
  const icons = [Dribbble, Behance, Twitter, LinkedIn];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex text-sm/[14px] items-center gap-2 text-grey-9">
        Connect with me at:
        <div className="flex items-center gap-0.5">
          {icons.map((icon, i) => (
            <img className="p-1.5" src={icon} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
