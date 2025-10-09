import Button from '@/ui/button';
import { Plain } from '@solar-icons/react';
import { useNavigate } from 'react-router';

export const LetsTalkButton = () => {
  const router = useNavigate();
  return (
    <Button
      onClick={() => {
        router('/contact');
      }}
      variant="default"
      className="flex items-center gap-2"
    >
      <Plain className="text-[#ededeb]" />
      Quick Chat
    </Button>
  );
};
