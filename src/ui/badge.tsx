import { cn } from '../lib/utils';

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'rounded-[10px] text-sm/[20px] px-2 py-1.5 bg-badge-primary button-shadows',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
