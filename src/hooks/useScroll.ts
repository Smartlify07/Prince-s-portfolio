import { useEffect, useRef } from 'react';

const useScroll = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const sidebar = sidebarRef.current;
      const main = mainRef.current;

      if (!sidebar || !main) return;

      const deltaY = e.deltaY;
      const isScrollingDown = deltaY > 0;
      const isScrollingUp = deltaY < 0;

      const sidebarAtBottom =
        sidebar.scrollTop + sidebar.clientHeight >= sidebar.scrollHeight - 1;
      const sidebarAtTop = sidebar.scrollTop <= 0;

      const mainAtTop = main.scrollTop <= 0;

      if (isScrollingDown && !sidebarAtBottom) {
        // Still scrolling sidebar
        e.preventDefault();
        sidebar.scrollTop += deltaY;
      } else if (isScrollingDown && sidebarAtBottom) {
        // Let main scroll (default)
      } else if (isScrollingUp && !sidebarAtTop && mainAtTop) {
        // Scroll back up into sidebar
        e.preventDefault();
        sidebar.scrollTop += deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return { sidebarRef, mainRef };
};

export default useScroll;
