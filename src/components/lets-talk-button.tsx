import Button from '@/ui/button';
import { Plain } from '@solar-icons/react';

export const LetsTalkButton = () => {
  return (
    <Button variant="default" className="flex items-center gap-2">
      <Plain className="text-[#ededeb]" />
      Let's Talk
    </Button>
  );
};
