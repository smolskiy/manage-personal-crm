

import { Label as AriaLabel, type LabelProps as AriaLabelProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const Label = ({ className, ...props }: AriaLabelProps) => (
  <AriaLabel className={cn('pb-2 text-sm font-semibold text-slate-600', className)} {...props} />
);
