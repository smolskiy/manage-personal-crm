'use client';

import {
  composeRenderProps,
  SliderTrack as AriaSliderTrack,
  type SliderTrackProps as AriaSliderTrackProps,
} from 'react-aria-components';
import { cn } from '@/shared/utils';

export const SliderTrack = ({ className, ...props }: AriaSliderTrackProps) => (
  <AriaSliderTrack
    className={composeRenderProps(className, (className, renderProps) =>
      cn(
        {
          'h-1.5 w-full': renderProps.orientation === 'horizontal',
          'h-full w-1.5': renderProps.orientation === 'vertical',
        },
        'cursor-pointer',
        'relative grow rounded-full bg-slate-200',
        'disabled:opacity-50',
        className,
      ),
    )}
    {...props}
  />
);
