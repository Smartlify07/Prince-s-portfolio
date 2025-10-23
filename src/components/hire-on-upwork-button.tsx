import Button from '@/ui/button';
import { Plain } from '@solar-icons/react';

export const HireOnUpwork = () => {
  return (
    <Button
      as="a"
      href="https://www.upwork.com/freelancers/~016d3b22752291fafe?mp_source=share"
      target="_blank"
      variant="default"
      className="flex whitespace-nowrap items-center gap-2"
    >
      <Plain /> Hire me on Upwork
    </Button>
  );
};
