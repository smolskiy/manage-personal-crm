

import { Input as AriaInput, type InputProps as AriaInputProps, composeRenderProps } from 'react-aria-components';
import { cn } from '@/shared/utils';
import type { Ref } from 'react';

export const Input = ({ className, ref, ...props }: AriaInputProps & { ref?: Ref<HTMLInputElement> }) => {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          'flex h-10 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400',
          'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-700 disabled:opacity-50',
          'focus:outline-2 focus:-outline-offset-1 focus:outline-blue-500',
          'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-500',
          className,
        ),
      )}
      ref={ref}
      {...props}
    />
  );
};
