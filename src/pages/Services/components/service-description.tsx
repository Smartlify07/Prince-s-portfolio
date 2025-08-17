import Card from '@/ui/card';
import Image from '@/../public/assets/images/services/service-description-image.png';
export const ServiceDescription = () => {
  return (
    <section className="flex flex-col gap-8 bg-[#111119] p-6 rounded-4xl md:flex-row">
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-medium -tracking-smaller font-geist gradient-text">
          Comprehensive UI/UX design that gets your product to market 40%
          faster.{' '}
        </h1>
        <p className="text-sm/[150%] text-[#909090] font-geist">
          Transform your digital experience with innovative UI & UX design. I
          create user-friendly, visually appealing, and high-performance web and
          mobile user interfaces. From concept to launch, we ensure a process
          that enhances user engagement, satisfaction, and business growth.
          <br />
          <br />
          Whether you're launching a new venture or enhancing an existing
          product, my methodology integrates strategy, design, and no-code
          implementation to achieve outcomes that are not only visually stunning
          but also focused on user experience and conversion.
        </p>
      </div>

      <Card className="md:h-[362px] md:w-[300px] shrink-0">
        <img src={Image} className="object-cover" />
      </Card>
    </section>
  );
};
