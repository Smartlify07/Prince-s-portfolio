import { useEffect, useRef } from 'react';

export default function ScrollHandoffLayout() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current!;
    const main = mainRef.current!;

    const handleWheel = (e: WheelEvent) => {
      const deltaY = e.deltaY;
      const atBottom =
        sidebar.scrollTop + sidebar.clientHeight >= sidebar.scrollHeight;

      const atTop = sidebar.scrollTop <= 0;

      const isScrollingDown = deltaY > 0;
      const isScrollingUp = deltaY < 0;

      // If scrolling down and sidebar is at bottom — pass scroll to main
      if (isScrollingDown && atBottom) {
        e.preventDefault();
        main.scrollTop += deltaY;
      }

      // If scrolling up and main is at top — pass scroll back to sidebar
      else if (isScrollingUp && main.scrollTop <= 0 && !atTop) {
        e.preventDefault();
        sidebar.scrollTop += deltaY;
      }

      // Otherwise, let sidebar scroll as normal
    };

    sidebar.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      sidebar.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="h-screen w-full flex font-sans overflow-hidden">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="w-1/3 h-full overflow-y-scroll bg-gray-900 text-white p-4"
      >
        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
        <div className="space-y-6">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="bg-gray-700 p-4 rounded">
              Sidebar item {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={mainRef}
        className="w-2/3 h-full overflow-y-scroll bg-white p-4"
      >
        <h2 className="text-lg font-bold mb-4">Main Content</h2>
        <div className="space-y-6">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="bg-gray-200 p-6 rounded shadow">
              Main content block {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
