import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

type ButtonProps<E extends ElementType = typeof defaultElement> =
  PolymorphicProps<E> & VariantProps<typeof buttonVariants>;

const defaultElement = 'button';

const buttonVariants = cva(
  'inline-flex font-medium items-center button-shadows justify-center gap-2 rounded-[10px] py-2 px-4 font-geist text-white text-sm',
  {
    variants: {
      variant: {
        default:
          'text-white bg-linear-(--button-primary-gradient) z-[1]  gradient-button relative',
        outline: 'text-button-outline-text outline-button-outline',
      },

      defaultVariants: {
        variant: 'default',
      },
    },
  }
);

export function Button<E extends ElementType = typeof defaultElement>({
  as,
  children,
  className,
  variant,
  ...restProps
}: ButtonProps<E>) {
  const Component = as ?? defaultElement;
  return (
    <Component
      {...restProps}
      className={cn(
        'py-1.5 px-2 font-geist cursor-pointer',
        className,
        buttonVariants({
          variant,
        })
      )}
    >
      {children}
    </Component>
  );
}

export default Button;
