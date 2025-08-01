import Badge from '@/ui/badge';
import Icon from '@/../public/assets/icons/selected-works.svg';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export const TopSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'UI/UX Design',
    'Branding and visual design',
    'UX Research',
    'Product Design',
    'No-Code Development',
    'Collaboration & Consulting',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) =>
        currentText === texts.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentText, texts.length]);
  return (
    <section className="flex flex-col gap-6 px-4 md:px-0">
      <Badge className="text-[#EDEDEB] text-xl/[20px] px-2 py-2.5 opacity-50 font-medium flex gap-2 items-center font-geist self-start">
        <img src={Icon} alt="selected-works" className="shrink-0" /> Design
        Services
      </Badge>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <h1 className="text-3xl font-medium tracking-1 text-[40px] text-[#909090] font-geist">
            I specialize in
          </h1>
          <div className="relative min-h-[100px] md:min-h-auto">
            {' '}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentText}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute font-medium tracking-1 text-[36px] services-text-gradient font-geist"
              >
                {texts[currentText]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
        <motion.p className="text-sm/[150%] font-normal font-geist text-[#909090]">
          Explore my suite of UI/UX, brand, and no-code design services—crafted
          to elevate your brand.
        </motion.p>
      </div>
    </section>
  );
};
