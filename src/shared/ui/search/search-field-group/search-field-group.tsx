

import { composeRenderProps, Group as AriaGroup, type GroupProps as AriaGroupProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const SearchFieldGroup = ({ className, ...props }: AriaGroupProps) => {
  return (
    <AriaGroup
      className={composeRenderProps(className, (className) =>
        cn(
          'flex h-10 w-full items-center rounded-md border border-slate-300 px-3 py-2 outline-none',
          'disabled:cursor-not-allowed disabled:bg-slate-100',
          'focus-within:outline-2 focus-within:-outline-offset-1 focus-within:outline-blue-500',
          'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-500',
          className,
        ),
      )}
      {...props}
    />
  );
};
