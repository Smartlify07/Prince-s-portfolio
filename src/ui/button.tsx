import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant: 'outline' | 'default';
}

const buttonVariants = cva(
  'inline-flex font-medium items-center button-shadows justify-center gap-2 rounded-[10px] py-2 px-4 font-geist text-white text-sm',
  {
    variants: {
      variant: {
        default:
          'text-white bg-linear-to-b from-bright-purple bg-linear-(--button-primary-gradient) z-[1]  gradient-button relative',
        outline: 'text-button-outline-text outline-button-outline',
      },

      defaultVariants: {
        variant: 'default',
      },
    },
  }
);
const Button = ({
  variant,
  className,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> &
  ButtonProps) => {
  return (
    <button
      className={cn(
        'py-1.5 px-2 font-geist cursor-pointer',
        className,
        buttonVariants({
          variant,
        })
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
