import { Button as AriaButton, type ButtonProps as AriaButtonProps, composeRenderProps } from 'react-aria-components';
import { ChevronsUpDownIcon } from 'lucide-react';
import { cn } from '@/shared/utils';

export const SelectTrigger = ({ className, children, ...props }: AriaButtonProps) => (
  <AriaButton
    className={composeRenderProps(className, (className) =>
      cn(
        'flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400',
        'disabled:cursor-not-allowed disabled:opacity-80',
        'focus:outline-2 focus:-outline-offset-1 focus:outline-blue-500',
        className,
      ),
    )}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        {children}
        <ChevronsUpDownIcon aria-hidden='true' className='size-4 opacity-50' />
      </>
    ))}
  </AriaButton>
);
