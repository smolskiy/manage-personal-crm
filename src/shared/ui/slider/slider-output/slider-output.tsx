'use client';

import { SliderOutput as AriaSliderOutput, type SliderOutputProps as AriaSliderOutputProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const SliderOutput = ({ className, ...props }: AriaSliderOutputProps) => (
  <AriaSliderOutput className={cn('text-slate-700', className)} {...props} />
);
