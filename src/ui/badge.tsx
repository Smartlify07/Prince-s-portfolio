import { cn } from '@/lib/utils';

const Badge = ({
  children,
  className,
  shadows = true,
}: {
  children: React.ReactNode;
  className?: string;
  shadows?: boolean;
}) => {
  return (
    <div
      className={cn(
        'rounded-[10px] text-sm/[20px] px-2 py-1.5 font-geist bg-badge-primary',
        shadows && 'button-shadows',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
