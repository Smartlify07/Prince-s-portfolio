import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top-left corner
  }, [pathname]); // Re-run effect whenever the pathname changes

  return null; // This component doesn't render any visible elements
};

export default ScrollToTop;
