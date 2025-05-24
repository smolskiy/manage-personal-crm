

import {
  Group as AriaGroup,
  type GroupProps as AriaGroupProps,
  type InputProps as AriaInputProps,
  composeRenderProps,
  Input as AriaInput,
} from 'react-aria-components';
import { cn } from '@/shared/utils';
import type { Ref } from 'react';

export const GroupInput = ({ className, ref, ...props }: AriaInputProps & { ref?: Ref<HTMLInputElement> }) => {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn('w-full text-slate-900 outline-none placeholder:text-slate-400', className),
      )}
      ref={ref}
      {...props}
    />
  );
};

export function FieldGroup({ className, ...props }: AriaGroupProps) {
  return (
    <AriaGroup
      className={composeRenderProps(className, (className) =>
        cn(
          'flex h-10 w-full items-center rounded-md border border-slate-300 px-3 py-2 outline-none',
          'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-50',
          'focus-within:outline-2 focus-within:-outline-offset-1 focus-within:outline-blue-500',
          'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-500',
          className,
        ),
      )}
      {...props}
    />
  );
}
