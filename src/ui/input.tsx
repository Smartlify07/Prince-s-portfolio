import { cn } from '@/lib/utils';
import React from 'react';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(className)} {...props} />
));

Input.displayName = 'Input';
