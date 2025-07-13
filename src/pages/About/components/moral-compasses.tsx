import Ezekiel1 from '@/../public/assets/images/about/ezekiel2.png';
import CollaborationImage from '@/../public/assets/images/about/collaboration.png';
import { morals, type Moral } from '@/lib/constants';
import Card from '@/ui/card';
import Star from '@/../public/assets/icons/star.svg';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const MoralCompasses = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-4 font-geist grid gap-6">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4">
          <h1 className="gradient-text text-[40px] font-medium font-geist -tracking-smaller">
            My Moral Compasses
          </h1>
          <p className="text-sm/[150%] text-grey-9 font-normal">
            Elevate your brand with my cutting-edge design strategies and
            outstanding user experiences.
          </p>
        </div>

        <div className="flex items-stretch gap-4 w-full">
          <div className="w-[60%] rounded-2xl object-cover">
            <img
              src={CollaborationImage}
              alt="Collaboration"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>

          <div className="w-[40%] rounded-2xl object-cover">
            <img
              src={Ezekiel1}
              alt="Ezekiel"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-1">
        {morals.map((moral, index) => (
          <MoralCompassCard
            index={index}
            toggle={() => toggle(index)}
            active={index === activeIndex}
            {...moral}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

const MoralCompassCard = ({
  title,
  subtitle,
  active,
  toggle,
  index,
}: {
  active: boolean;
  toggle: (index: number) => void;
  index: number;
} & Moral) => {
  return (
    <Card className="shadow-none font-geist flex flex-col gap-4 items-start p-4 justify-between bg-[#171721]">
      <div
        onClick={() => toggle(index)}
        className="flex items-center w-full justify-between"
      >
        <h1 className="text-xl -tracking-smaller font-medium">
          <span className="text-grey-9">0{index + 1}</span>
          <br />
          <span className="gradient-text">{title}</span>
        </h1>
        <img
          onClick={() => toggle(index)}
          className={cn('shrink-0 transition-transform duration-75')}
          src={Star}
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
