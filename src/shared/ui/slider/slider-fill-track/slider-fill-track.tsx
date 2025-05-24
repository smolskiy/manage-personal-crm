'use client';

import { SliderStateContext as AriaSliderStateContext } from 'react-aria-components';
import { type HTMLAttributes, useContext } from 'react';
import { cn } from '@/shared/utils';

export const SliderFillTrack = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const state = useContext(AriaSliderStateContext)!;
  const orientation = state.orientation === 'vertical' ? 'height' : 'width';
  return (
    <div
      style={{ [orientation]: state.getThumbPercent(0) * 100 + '%' }}
      className={cn(
        'absolute rounded-full bg-blue-500',
        {
          'h-full': state.orientation === 'horizontal',
          'bottom-0 w-full': state.orientation === 'vertical',
        },
        className,
      )}
      {...props}
    />
  );
};
