import Badge from '@/ui/badge';
import Icon from '@/../public/assets/icons/selected-works.svg';

export const TopSection = () => {
  return (
    <section className="flex flex-col gap-6 px-4 md:px-6">
      <Badge className="text-[#EDEDEB] text-xl/[20px] px-2 py-2.5 opacity-50 font-medium flex gap-2 items-center font-geist self-start">
        <img src={Icon} alt="selected-works" className="shrink-0" /> Design
        Services
      </Badge>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium tracking-1 text-[40px] text-[#909090] font-geist">
          I specialize in
        </h1>
        <h1 className="text-3xl font-medium tracking-1 text-[36px] services-text-gradient font-geist">
          UI/UX Design
        </h1>
        <p className="text-sm/[150%] font-medium font-geist text-[#909090]">
          Explore my suite of UI/UX, brand, and no-code design services—crafted
          to elevate your brand.
        </p>
      </div>
    </section>
  );
};
