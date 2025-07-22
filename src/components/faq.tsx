import BadgeAndHeader from '@/components/BadgeAndHeader';
import FaqIcon from '@/../public/assets/icons/Question Circle.svg';
import DoubleArrowDown from '@/../public/assets/icons/DoubleArrowDown.svg';
import Card from '@/ui/card';
import { faqs, type Faq } from '@/lib/constants';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="px-4 md:px-0 flex md:w-8/12 flex-col gap-12">
      <BadgeAndHeader
        title="Everything you need to know before we start"
        badgeTitle="Frequently Asked Questions"
        alt="faq-icon"
        icon={FaqIcon}
      />

      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <FaqCard
            index={index}
            toggle={toggle}
            active={activeIndex === index}
            {...faq}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

const FaqCard = ({
  title,
  subtitle,
  active,
  toggle,
  index,
}: {
  active: boolean;
  toggle: (index: number) => void;
  index: number;
} & Faq) => {
  return (
    <Card className="shadow-none font-geist flex flex-col gap-4 items-start p-4 justify-between bg-[#171721]">
      <div className="flex items-center w-full justify-between">
        <h1 className="gradient-text text-xl -tracking-smaller font-medium">
          {title}
        </h1>
        <img
          onClick={() => toggle(index)}
          className={cn(
            'shrink-0 transition-transform duration-75',
            active ? 'rotate-180' : 'rotate-0'
          )}
          src={DoubleArrowDown}
        />
      </div>

      {active && (
        <div className="border-t border-t-grey-4/50 border-dashed pt-3  text-grey-9 text-sm/[150%]">
          {subtitle}
        </div>
      )}
    </Card>
  );
};
