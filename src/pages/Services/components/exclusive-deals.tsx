import { ArrowRightUp } from '@solar-icons/react';
import { exclusiveDeals } from '../../../lib/constants';
import Badge from '../../../ui/badge';
import FiltersIcon from '../../../../public/assets/icons/Filters.svg';
import Deal1Image from '../../../../public/assets/images/services/exclusive-deal-1.png';
import { useState } from 'react';

export const ExclusiveDeals = () => {
  const [currentDeal] = useState(1);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center bg-[#171721] border-[rgba(252,255,236,0.2)] gap-4 rounded-4xl p-6 overflow-hidden">
        {exclusiveDeals.map((deal, index) => (
          <ExclusiveDealCard {...deal} key={index} />
        ))}
      </div>

      {currentDeal === 1 && (
        <ExclusiveDealExtendedCard
          badgeTitle={'Productcraft'}
          title={exclusiveDeals[0].title}
          description={exclusiveDeals[0].description}
        />
      )}
    </section>
  );
};

export const ExclusiveDealCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-[12px] min-w-[250px] border-b border-b-[rgba(76,76,76,0.5)] p-2 pb-4 flex items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-[#EDEDEB] text-xl font-medium font-geist">
          {title}
        </h1>
        <p className="text-[#909090] line-clamp-2 text-sm/[20px] font-geist text-left">
          {description}
        </p>
      </div>
      <ArrowRightUp
        weight="Broken"
        fill="#909090"
        className="text-[#909090] shrink-0"
        size={16}
      />
    </div>
  );
};

export const ExclusiveDealExtendedCard = ({
  badgeTitle,
  title,
  description,
}: {
  badgeTitle: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 bg-[#171721] exclusive-deal-card rounded-4xl border-t border-l border-b border-[rgba(252,255,236,0.2)] shadow-none flex flex-col gap-6">
      <Badge className="flex text-[#EDEDEB] font-medium items-center self-start gap-2">
        <img src={FiltersIcon} />
        {badgeTitle}
      </Badge>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl text-left tracking-[-0.88px] gradient-text font-geist">
            {title}
          </h1>
          <p className="text-sm text-[#909090] font-geist font-normal">
            {description}
          </p>
        </div>
        <div className="shadow-[0px_0px_5.5px_rgba(86,86,119,0.25)] rounded-2xl">
          <img className="rounded-2xl" src={Deal1Image} />
        </div>
      </div>
    </div>
  );
};
