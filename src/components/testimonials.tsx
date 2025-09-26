import { testimonials } from '@/lib/data/testimonials';
import TestimonialBackground from '@/../public/assets/images/testimonials-background-image.webp';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const INTERVAL = 100;
const TOTAL_DURATION = 10000;

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += INTERVAL;
      setProgress((elapsed / TOTAL_DURATION) * 100);

      if (elapsed >= TOTAL_DURATION) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        elapsed = 0;
        setProgress(0);
      }
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const matched = testimonials[currentIndex];

  return (
    <section className="relative bg-primary w-full h-[247px] flex flex-col texture gap-2.5 overflow-hidden">
      <div className="flex items-start relative z-30">
        <AnimatePresence mode="wait">
          <Testimonial
            id={matched.id}
            key={matched.id}
            testimonial={matched.testimonial}
            images={matched.images}
            name={matched.name}
            position={matched.position}
          />
        </AnimatePresence>
      </div>

      <div className="absolute z-10 top-[-5px] left-0 flex items-center gap-2 pt-2">
        {testimonials.map((_, index) => (
          <Indicator
            progress={progress}
            key={index}
            active={currentIndex === index}
          />
        ))}
      </div>

      <div className="absolute opacity-40 inset-0 z-0">
        <img
          style={{
            filter: 'blur(6px)',
          }}
          src={TestimonialBackground}
          alt="testimonial texture"
          className="w-full h-full object-cover opacity-20 backdrop-blur-xl"
        />
        <div
          className="absolute inset-0"
          style={{
            background: '#030712',
            opacity: 0.5,
            filter: 'blur(10px)',
            mixBlendMode: 'overlay',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(var(--button-primary-gradient))',
            filter: 'blur(20px)',
            opacity: 0.2,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
    </section>
  );
};

const Indicator = ({
  active = false,
  progress,
}: {
  active?: boolean;
  progress: number;
}) => {
  return (
    <div className="w-[90px] rounded-xs h-0.5 bg-[#636363] overflow-hidden">
      {active && (
        <div
          className="h-full bg-linear-[180deg,var(--color-primary)_-3.1%,var(--color-secondary)_49.48%,var(--color-accent)_100%] transition-all duration-100"
          style={{
            width: `${progress}%`,
          }}
        />
      )}
    </div>
  );
};

const Testimonial = ({
  testimonial,
  images,
  name,
  position,
  id,
}: {
  testimonial: string;
  images: string[];
  name: string;
  position: string;
  id: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(2px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(2px)' }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 pl-4 py-8 pr-4 absolute inset-0"
    >
      <h2 className="text-grey-opaque text-xl/[25.2px] font-light tracking-[-0.72px] text-start font-geist">
        “{testimonial}”
      </h2>

      <div className="flex items-center gap-4">
        <div className="flex items-center min-w-[67px] min-h-[38px] relative">
          {images[0] && (
            <div className="object-cover shrink-0 size-10 absolute flex items-center justify-center z-30 bottom-0 left-0 rounded-full border-2 border-[#EDEDEB] testimonial-image-shadow">
              <img src={images[0]} className="w-9 h-9 object-cover" />
            </div>
          )}
          {images[1] && (
            <div className="object-cover  flex items-center justify-center overflow-hidden shrink-0 size-10 bg-grey-opaque absolute bottom-0 left-7 rounded-full border-2 border-[#EDEDEB] testimonial-image-shadow">
              <img
                src={images[1]}
                className={cn(
                  'w-10 h-10 object-cover',
                  id === 3 && 'mix-blend-difference'
                )}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#FCFFEC] text-start text-sm font-light font-geist">
            — {name},
          </h2>
          <h3 className="text-[#909090] font-geist text-sm tracking-[-0.42] text-start">
            {position}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
