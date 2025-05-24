

import { composeRenderProps, Input as AriaInput, type InputProps as AriaInputProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const SearchFieldInput = ({ className, ...props }: AriaInputProps) => {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          'w-full truncate px-3 text-slate-900 outline-none placeholder:text-slate-400',
          '[&::-webkit-search-cancel-button]:hidden',
          className,
        ),
      )}
      {...props}
    />
  );
};
