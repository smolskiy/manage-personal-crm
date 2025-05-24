'use client';

import { Slider as AriaSlider, type SliderProps as AriaSliderProps, composeRenderProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const Slider = ({ className, orientation = 'horizontal', ...props }: AriaSliderProps) => (
  <AriaSlider
    className={composeRenderProps(className, (className) =>
      cn(
        'relative flex touch-none select-none items-center',
        {
          'h-full': orientation === 'vertical',
          'w-full': orientation === 'horizontal',
        },
        className,
      ),
    )}
    orientation={orientation}
    {...props}
  />
);
