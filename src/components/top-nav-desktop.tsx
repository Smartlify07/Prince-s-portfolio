import Behance from '@/../public/assets/icons/Behance.svg';
import Dribbble from '@/../public/assets/icons/Dribbble.svg';
import Twitter from '@/../public/assets/icons/Twitter.svg';
import LinkedIn from '@/../public/assets/icons/LinkedIn.svg';
import { CaseRoundMinimalistic, Crown, Cursor, User } from '@solar-icons/react';
import { useLocation } from 'react-router';
import { cn } from '@/lib/utils';
import { validPaths } from '@/lib/valid-paths';
import LinkWithWave from './link-with-wave';

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
  const pathname = useLocation().pathname;
  const normalizedPath = pathname.replace(/\/+$/, '');
  const shouldBeFixed =
    validPaths.includes(normalizedPath) ||
    normalizedPath.startsWith('/projects/') ||
    normalizedPath === '';
  return (
    <nav
      className={cn(
        'bg-[rgba(14,14,14,0.7)] hidden h-[86px] z-[50] font-geist md:flex justify-between items-center gap-2.5 pt-6 pr-10 pb-4 pl-6 backdrop-blur-[10px] top-0 border-b border-b-grey-4/60',
        shouldBeFixed ? 'fixed top-0 md:w-[66.7%] z-50' : 'static'
      )}
    >
      <NavLinks />
      <ContactSection />
    </nav>
  );
}

const NavLinks = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="flex items-center pr-4 justify-center  gap-2 font-geist">
      {navLinks.map((link, index) => (
        <LinkWithWave
          key={index}
          to={link.path}
          className={cn(
            'flex flex-col items-center text-sm gap-1.5 p-1.5 transition-colors hover:text-grey-opaque',
            pathname === link.path ? 'text-grey-opaque' : 'text-grey-9'
          )}
        >
          <div className="flex items-center gap-1.5">
            <link.icon size={16} weight="Outline" />
            <span className="text-drop-shadow bg-none">{link.label}</span>{' '}
          </div>
        </LinkWithWave>
      ))}
    </div>
  );
};

const ContactSection = () => {
  const icons = [Dribbble, Behance, Twitter, LinkedIn];
  return (
    <div className="flex flex-col gap-6 pl-4 border-l border-l-grey-4">
      <div className="flex text-sm/[14px] items-center gap-2 text-grey-9">
        Connect with me at:
        <div className="flex items-center gap-0.5">
          {icons.map((icon, i) => (
            <img
              className="p-1.5 hover:rounded-sm hover:text-[#FCFFEC] transition-colors hover:bg-[#1F1F2B]"
              src={icon}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
