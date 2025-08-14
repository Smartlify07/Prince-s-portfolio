import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'motion/react';
import type React from 'react';

type CardStrokeProps = HTMLMotionProps<'div'> & React.ComponentProps<'div'>;
export const CardStroke = ({
  children,
  className,
  ...props
}: CardStrokeProps) => {
  return (
    <motion.div className={cn('card-stroke', className)} {...props}>
      {children}
    </motion.div>
  );
};
