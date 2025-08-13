import { ArrowUp } from '@solar-icons/react';

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button className="cursor-pointer" onClick={scrollToTop}>
      <ArrowUp
        className="text-grey-9 absolute bottom-3 right-0 md:right-10 md:top-10"
        size={16}
        weight="Broken"
      />
    </button>
  );
};
