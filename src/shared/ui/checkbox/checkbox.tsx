import { Checkbox as AriaCheckbox, composeRenderProps, type CheckboxProps } from 'react-aria-components';
import { cn } from '@/shared/utils';
import { CheckIcon, MinusIcon } from 'lucide-react';

export const Checkbox = ({ className, children, ...props }: CheckboxProps) => (
  <AriaCheckbox
    className={composeRenderProps(className, (className) =>
      cn(
        'inline-flex items-center gap-x-2 text-slate-700',
        'disabled:cursor-not-allowed disabled:opacity-70',
        className,
      ),
    )}
    {...props}
  >
    {composeRenderProps(children, (children, { isSelected, isFocused, isIndeterminate }) => (
      <>
        <div
          className={cn(
            'flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-slate-300 text-white outline-none',
            isSelected && 'border-blue-500 bg-blue-500',
            isIndeterminate && 'border-blue-500 bg-blue-500',
            isFocused && 'border-blue-500 ring ring-blue-500/50',
          )}
        >
          {isIndeterminate ? <MinusIcon className='size-4' /> : isSelected ? <CheckIcon className='size-4' /> : null}
        </div>
        {children}
      </>
    ))}
  </AriaCheckbox>
);
