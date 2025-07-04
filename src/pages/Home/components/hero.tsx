import { CloudDownload, Plain } from '@solar-icons/react';
import Button from '../../../ui/button';
import Card from '../../../ui/card';
import HeroImage from '../../../../public/assets/images/hero-image.png';
const HeroSection = () => {
  return (
    <section className="flex flex-col p-6 gap-8">
      <header>
        <h1 className="text-[40px]/[52px] font-geist font-medium tracking-[-0.88px] text-left gradient-text">
          I'm a Product Designer with 3 years of experience creating
          user-focused digital products for startups & enterprises.
        </h1>
      </header>

      <div className="flex items-center gap-4">
        <Button variant="default" className="flex items-center gap-2">
          <Plain className="text-[#EDEDEB]" size={16} /> Let's talk
        </Button>
        <Button variant="outline">
          <CloudDownload className="text-[#EDEDEB]" size={16} />
          Download Resume
        </Button>
      </div>

      <Card className="flex items-center justify-center h-[322px]">
        <img src={HeroImage} />
      </Card>
    </section>
  );
};

export default HeroSection;
