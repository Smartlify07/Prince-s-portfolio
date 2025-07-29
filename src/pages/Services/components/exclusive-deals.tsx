import { ArrowRightUp } from '@solar-icons/react';
import { exclusiveDeals } from '@/lib/constants';
import Badge from '@/ui/badge';
import FiltersIcon from '@/../public/assets/icons/Filters.svg';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

export const ExclusiveDeals = () => {
  const [currentDeal, setCurrentDeal] = useState(0);
  const updateCurrentDeal = (index: number) => {
    setCurrentDeal(index);
  };

  return (
    <section className="grid md:flex md:flex-row md:items-start gap-6">
      <div className="rounded-4xl p-px bg-[#171721] w-full md:w-[40%] overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 rounded-4xl h-[800px] overflow-y-auto scrollbar-hide p-6 md:flex-col md:items-stretch">
          {exclusiveDeals.map((deal, index) => (
            <ExclusiveDealCard
              currentDeal={currentDeal}
              changeDeal={updateCurrentDeal}
              index={index}
              {...deal}
              key={index}
            />
          ))}
        </div>
      </div>
      {exclusiveDeals.map(
        (deal, index) =>
          currentDeal === index && (
            <AnimatePresence>
              <ExclusiveDealExtendedCard
                badgeTitle={'Productcraft'}
                title={deal.title}
                image={deal.image}
                description={deal.description}
              />
            </AnimatePresence>
          )
      )}
    </section>
  );
};

export const ExclusiveDealCard = ({
  title,
  description,
  currentDeal,
  index,
  changeDeal,
}: {
  title: string;
  description: string;
  index: number;
  currentDeal: number;
  changeDeal: (index: number) => void;
}) => {
  return (
    <motion.div
      onClick={() => changeDeal(index)}
      initial={{ borderBottom: '1px solid rgba(76,76,76,0.5)' }}
      whileHover={{
        borderBottom: '1px solid rgba(255,255,236,0.2)',
      }}
      className={cn(
        'rounded-[12px] cursor-pointer min-w-[250px] p-2 pb-4 flex items-center',
        index === currentDeal ? 'bg-[#111119]' : ''
      )}
    >
      <div className="flex flex-col gap-1">
        <h1
          className={cn(
            'text-xl font-medium font-geist',
            index === currentDeal ? 'services-text-gradient' : 'text-[#EDEDEB]'
          )}
        >
          {title}
        </h1>
        <p className="text-[#909090] line-clamp-2 text-sm/[20px] font-geist text-left">
          {description}
        </p>
      </div>

      <motion.button
        animate={{ rotate: currentDeal === index ? 45 : 0 }}
        transition={{ duration: 0.22 }}
      >
        <ArrowRightUp
          weight="Broken"
          fill="#909090"
          className="text-[#909090] shrink-0"
          size={16}
        />
      </motion.button>
    </motion.div>
  );
};

export const ExclusiveDealExtendedCard = ({
  badgeTitle,
  title,
  description,
  image,
}: {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(2px)' }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)',
        transition: { type: 'spring', duration: 2 },
      }}
      exit={{ opacity: 0 }}
      className="rounded-4xl p-px md:w-[60%]"
    >
      <motion.div className="p-6 bg-[#171721] exclusive-deal-card rounded-4xl shadow-none flex flex-col gap-6">
        <Badge className="flex text-[#EDEDEB] opacity-50 font-medium items-center self-start gap-2">
          <img src={FiltersIcon} />
          {badgeTitle}
        </Badge>
        <motion.div className="flex flex-col gap-8">
          <motion.div className="flex flex-col gap-4">
            <h1 className="text-xl text-left tracking-[-0.88px] gradient-text font-geist">
              {title}
            </h1>
            <p className="text-sm text-[#909090] font-geist font-normal">
              {description}
            </p>
          </motion.div>
          <motion.div className="shadow-[0px_0px_5.5px_rgba(86,86,119,0.25)] md:h-[468px] rounded-2xl">
            <img
              className="object-cover rounded-2xl md:w-full md:h-[468px]"
              src={image}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
