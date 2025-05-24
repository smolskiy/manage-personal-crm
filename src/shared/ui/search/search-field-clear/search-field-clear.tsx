

import { Button as AriaButton, type ButtonProps as AriaButtonProps, composeRenderProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const SearchFieldClear = ({ className, ...props }: AriaButtonProps) => {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          'mr-1 rounded-sm text-slate-700 opacity-70 ring-offset-background transition-opacity',
          'hover:opacity-100',
          'disabled:pointer-events-none',
          'group-data-[empty]:invisible',
          className,
        ),
      )}
      {...props}
    />
  );
};
