import Card from '@/ui/card';
import Image from '@/../public/assets/images/services/service-description-image.png';
export const ServiceDescription = () => {
  return (
    <section className="flex flex-col gap-8 bg-[#111119] p-6 rounded-4xl md:flex-row">
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-medium -tracking-smaller font-geist gradient-text">
          Comprehensive UI/UX Design Services: A 360-Degree Approach to Results
        </h1>
        <p className="text-sm/[150%] text-[#909090] font-geist">
          I create digital experiences that seamlessly blend aesthetics with
          functionality, ensuring they are intuitive and resonate with your
          brand's identity.
          <br />
          As a UI/UX Designer, Brand Strategist, and No-Code Developer, I
          partner with product teams and entrepreneurs to transform concepts
          into reality, from in-depth research and wireframes to polished
          interfaces and no-code solutions.
          <br />
          Whether you're launching a new venture or enhancing an existing
          product, my methodology integrates strategy, design, and no-code
          implementation to achieve outcomes that are not only visually stunning
          but also focused on user experience and conversion.
        </p>
      </div>

      <Card className="h-[362px] md:w-[300px] shrink-0">
        <img src={Image} className="object-cover" />
      </Card>
    </section>
  );
};
