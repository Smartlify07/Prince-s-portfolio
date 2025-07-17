import { cn } from '@/lib/utils';
import React from 'react';

export const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(className)} {...props} />
));

TextArea.displayName = 'TextArea';
