import Badge from '../../../ui/badge';
import BuildingIcon from '../../../../public/assets/icons/Buildings 3.svg';
import { industries } from '../../../lib/constants';
import Button from '../../../ui/button';
import { CaseMinimalistic, Plain } from '@solar-icons/react';
export const IndustriesExceled = () => {
  return (
    <section className="px-4">
      <div className="gap-11 flex flex-col">
        <TopSection />

        <div className="grid gap-10">
          <div className="grid gap-6">
            {industries.map((item, index) => (
              <IndustryCard {...item} key={index} />
            ))}
          </div>
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

const TopSection = () => {
  return (
    <section className="flex flex-col gap-4 font-geist">
      <Badge className="font-medium self-center flex items-center gap-2 opacity-50 text-[#EDEDEB]">
        <img src={BuildingIcon} /> Industries
      </Badge>
      <h1 className="text-[40px] text-center tracking-[-0.88px] font-medium gradient-text">
        Industries Where Excellence Has Been Created
      </h1>
      <p className="text-sm/[150%] font-normal text-center text-[#909090]">
        I aspire to be the UI/UX designer that helps your company excel in the
        diverse digital ecosystem, where businesses from various industries
        coexist. My goal is to create a compelling brand identity that fosters
        maximum engagement and enables your company to thrive in this dynamic
        environment.
      </p>
    </section>
  );
};

const IndustryCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#111119] font-geist rounded-4xl gap-4 p-6">
      <div className="size-[100px]">
        <img src={icon} alt={title} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-medium tracking-[-0.88px] gradient-text">
          {title}
        </h1>
        <p className="text-[#909090] text-sm/[150%]">{description}</p>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <section className="texture grid font-geist gap-2.5 p-6">
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h1 className="gradient-text text-center text-xl tracking-[-0.88px] font-medium">
            Your industry not on the list?
          </h1>
          <p className="text-[#909090] text-center text-sm/[150%] font-normal">
            Contact me or check my portfolio since I have clients from various
            industries.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <CaseMinimalistic weight="Outline" /> See Projects
          </Button>
          <Button variant="default" className="flex items-center gap-2">
            <Plain weight="Outline" /> Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};
