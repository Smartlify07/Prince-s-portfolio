import { Outlet } from 'react-router';
import { NavbarMobile } from '../components/nav-bar-mobile';

export const SiteWrapper = () => {
  return (
    <main className="relative flex flex-col">
      <NavbarMobile />
      <Outlet />
    </main>
  );
};
