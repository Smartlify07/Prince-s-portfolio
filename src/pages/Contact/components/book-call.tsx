import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect, useState } from 'react';

export const BookCall = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('book-a-call');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    async function loadCalendar() {
      if (isVisible) {
        const cal = await getCalApi({ namespace: '30min' });
        cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      }
    }
    loadCalendar();
  }, [isVisible]);

  return (
    <section
      id="book-a-call"
      className="p-6 font-geist grid bg-[#111119] rounded-4xl gap-6"
    >
      <header>
        <h1 className="text-[40px] font-medium text-center -tracking-smaller gradient-text">
          Book a call
        </h1>
      </header>
      {isVisible && (
        <Cal
          calLink="princeugboga/secret"
          style={{ width: '100%', height: '100%' }}
          config={{ theme: 'dark', layout: 'month_view' }}
        ></Cal>
      )}
    </section>
  );
};
