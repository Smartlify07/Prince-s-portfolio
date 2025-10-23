import { CaseMinimalistic } from '@solar-icons/react';
import Button from '@/ui/button';
import { LetsTalkButton } from '@/components/lets-talk-button';
import { useNavigate } from 'react-router';

export const CallToActionSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const router = useNavigate();
  return (
    <section className="grid gap-8 texture-2 rounded-3xl py-6 px-4 font-geist lg:w-11/12 lg:justify-self-center lg:flex lg:items-center lg:justify-between">
      <div className="grid gap-2">
        <h1 className="gradient-text text-2xl -tracking-smaller font-medium">
          {title}
        </h1>
        <p className="text-sm/[150%] font-normal text-grey-9">{subtitle} </p>
      </div>

      <div className="flex items-center shrink-0 gap-4">
        <Button
          onClick={() => {
            router('/');
          }}
          variant="outline"
        >
          <CaseMinimalistic
            weight="Outline"
            className="text-[#EDEDEB]"
            size={16}
          />
          See Projects
        </Button>
        <LetsTalkButton />
      </div>
    </section>
  );
};
