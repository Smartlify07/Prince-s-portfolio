import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export const BookCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <section className="p-6 font-geist grid bg-[#111119] rounded-4xl gap-6">
      <header>
        <h1 className="text-[40px] font-medium text-center -tracking-smaller gradient-text">
          Book a call
        </h1>
      </header>
      <Cal
        calLink="princeugboga/secret"
        style={{ width: '100%', height: '100%' }}
        config={{ theme: 'dark', layout: 'month_view' }}
      ></Cal>
    </section>
  );
};
