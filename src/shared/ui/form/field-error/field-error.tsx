

import { FieldError as AriaFieldError, type FieldErrorProps as AriaFieldErrorProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export function FieldError({ className, ...props }: AriaFieldErrorProps) {
  return <AriaFieldError className={cn('text-sm font-medium text-red-500', className)} {...props} />;
}
