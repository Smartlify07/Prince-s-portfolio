import { defaultEnquiryMail } from '@/lib/constants';
import Button from '@/ui/button';
import { Plain } from '@solar-icons/react';

export const LetsTalkButton = () => {
  return (
    <Button
      as="a"
      href={defaultEnquiryMail}
      target="_blank"
      variant="default"
      className="flex items-center gap-2"
    >
      <Plain className="text-[#ededeb]" />
      Quick Chat
    </Button>
  );
};
