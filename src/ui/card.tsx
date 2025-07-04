import { cn } from '../lib/utils';

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('bg-dark-blue rounded-2xl card-shadow', className)}>
      {children}
    </div>
  );
};

export default Card;
