import CurrencyIcon from '@/../public/assets/icons/Subtract.svg';
import Layers from '@/../public/assets/icons/Layers.svg';
import Framer from '@/../public/assets/icons/Framer.svg';
import Cursor from '@/../public/assets/icons/Cursor.svg';
import DoubleCheck from '@/../public/assets/icons/DoubleCheck.svg';
import Badge from '@/ui/badge';
import { pricing } from '@/lib/data/pricing';
import { CardStroke } from '@/components/card-stroke';
import Button from '@/ui/button';
import { defaultEnquiryMail } from '@/lib/constants';

export const Pricing = () => {
  return (
    <section className="px-4 lg:px-0 font-geist grid gap-11">
      <div className="grid gap-4 place-items-center">
        <Badge
          shadowSize="small"
          className="flex text-[#EDEDEB] items-center gap-2"
        >
          <img src={CurrencyIcon} alt="currency-icon" />
          Pricing
        </Badge>
        <div className="grid gap-4 place-items-center lg:w-11/12">
          <h1 className="text-[40px]/[52px] gradient-text text-center font-medium -tracking-smaller">
            Your visions , my creativity—strategies tailored just for you.
          </h1>
          <p className="text-sm/[150%] text-center text-[#909090]">
            Whether you're a startup with a bold idea or a business ready to
            scale, I offer flexible design solutions tailored to your goals and
            budget. From one-off projects to long-term collaborations, my
            pricing plans are built to deliver value without compromise—so your
            vision gets the design it deserves.
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <PricingCard
          description={pricing[0].description}
          title={pricing[0].title}
          icon={Layers}
          first
          list={pricing[0].list}
          price="6,000"
        ></PricingCard>
        <PricingCard
          description={pricing[1].description}
          title={pricing[1].title}
          icon={Framer}
          list={pricing[1].list}
          price="4,500"
        ></PricingCard>
        <PricingCard
          description={pricing[2].description}
          title={pricing[2].title}
          icon={Cursor}
          list={pricing[2].list}
          price="7,500"
        ></PricingCard>
      </div>
    </section>
  );
};

const PricingCard = ({
  icon,
  title,
  children,
  list,
  first,
  price,
  description,
}: {
  icon: string;
  title: string;
  children?: React.ReactNode;
  first?: boolean;
  list: string[];
  price: string;
  description: string;
}) => {
  return (
    <CardStroke className="rounded-4xl">
      <div
        className={`rounded-4xl gap-6 flex flex-col p-6 h-full  ${
          first ? 'texture-2 bg-[rgba(15,15,26,0.3)]' : 'bg-[#171721]'
        }`}
      >
        <div className="grid gap-4">
          <div className="size-12 flex items-center justify-center rounded-full opacity-50 button-shadows">
            <img src={icon} alt={title} />
          </div>

          <div className="grid gap-14 lg:gap-6">
            <div className="grid gap-2">
              <h1 className="gradient-text text-xl text-left -tracking-smaller font-medium ">
                {title}
              </h1>
              <p className="text-grey-9 text-sm">{description}</p>
              {children && (
                <div className="text-sm/[150%] text-[#909090]">{children}</div>
              )}
            </div>
            <h1
              className={
                'pricing-text -tracking-smaller font-medium text-[40px]'
              }
            >
              ${price}
            </h1>
          </div>
        </div>

        <Button
          variant={first ? 'default' : 'outline'}
          as="a"
          href={defaultEnquiryMail}
        >
          Contact Me
        </Button>

        <div className="pt-4 grid gap-2 border-t border-grey-4/60 border-dashed">
          {list.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={DoubleCheck} alt="double-check" />
              <p className="text-sm/[150%] text-[#909090]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </CardStroke>
  );
};
