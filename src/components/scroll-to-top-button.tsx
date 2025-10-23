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
        className="text-grey-9 absolute bottom-3 right-0 lg:right-10 lg:top-10"
        size={16}
        weight="Broken"
      />
    </button>
  );
};
