'use client';

import {
  composeRenderProps,
  SliderThumb as AriaSliderThumb,
  type SliderThumbProps as AriaSliderThumbProps,
} from 'react-aria-components';
import { cn } from '@/shared/utils';

export const SliderThumb = ({ className, ...props }: AriaSliderThumbProps) => (
  <AriaSliderThumb
    className={composeRenderProps(className, (className) =>
      cn(
        'left-1/2 top-1/2 block size-5 rounded-full border border-slate-300 bg-white transition-colors',
        'disabled:pointer-events-none',
        'focus:border-blue-500 focus:ring-2',
        'focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-1',
        className,
      ),
    )}
    {...props}
  />
);
