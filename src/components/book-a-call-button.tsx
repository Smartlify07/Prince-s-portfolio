import Button from '@/ui/button';
import { Calendar } from '@solar-icons/react';

export const BookACallButton = () => {
  return (
    <Button
      as="a"
      href="/contact#book-a-call"
      variant="outline"
      className="flex items-center gap-2"
    >
      <Calendar className="text-[#ededeb]" />
      Book a Call
    </Button>
  );
};
