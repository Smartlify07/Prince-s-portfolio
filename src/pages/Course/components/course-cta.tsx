import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import ArrowRight from '@/../public/assets/images/course/arrow-right.svg';
import { cn } from '@/lib/utils';
import { REGISTRATION_URL } from '../course.constants';

const ctaVariants = cva(
  'flex h-[66px] items-center justify-center gap-[10px] rounded-[60px] border border-course-ink font-inter text-[16px] leading-5 font-extrabold text-white transition-opacity duration-200 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-course-ink focus-visible:ring-offset-2 focus-visible:outline-none',
  {
    variants: {
      variant: {
        accent: 'w-full bg-course-accent px-4',
        ink: 'bg-course-ink px-6 sm:px-10',
      },
    },
    defaultVariants: {
      variant: 'accent',
    },
  }
);

const pressSpring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
  mass: 0.6,
} as const;

type CourseCtaProps = VariantProps<typeof ctaVariants> & {
  className?: string;
  children: ReactNode;
};

export function CourseCta({ variant, className, children }: CourseCtaProps) {
  return (
    <motion.a
      href={REGISTRATION_URL}
      className={cn(ctaVariants({ variant }), className)}
      whileTap={{ scale: 0.96 }}
      transition={pressSpring}
    >
      <span>{children}</span>
      <img src={ArrowRight} width={24} height={24} alt="" />
    </motion.a>
  );
}
