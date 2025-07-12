import { cn } from '../lib/utils';

export const CardStroke = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={cn('card-gradient-2 p-px', className)}>{children}</div>
  );
};
