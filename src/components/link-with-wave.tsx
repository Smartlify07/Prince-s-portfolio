import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';
import { WaveLine } from './link-wave-line';

export default function LinkWithWave({
  className,
  to,
  children,
}: {
  className: string;
  to: string;
  children: React.ReactNode;
}) {
  const [showLine, setshowLine] = useState<boolean>(false);

  return (
    <Link
      onMouseOver={() => {
        setshowLine(true);
      }}
      onMouseOut={() => {
        setshowLine(false);
      }}
      to={to}
      className={cn('relative', className)}
    >
      <div>{children}</div>
      <AnimatePresence mode="popLayout">
        {showLine && (
          <motion.div
            className="absolute -bottom-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
          >
            <WaveLine />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
