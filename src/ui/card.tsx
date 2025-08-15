import { cn } from '@/lib/utils';

const Card = ({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      {...props}
      className={cn(
        'bg-dark-blue rounded-2xl shadow-[0px_0px_5.5px_rgba(86,86,119,0.25)]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
