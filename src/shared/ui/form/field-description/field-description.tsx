

import { Text as AriaText, type TextProps as AriaTextProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export function FieldDescription({ className, ...props }: AriaTextProps) {
  return <AriaText className={cn('text-sm text-slate-600', className)} {...props} slot='description' />;
}
