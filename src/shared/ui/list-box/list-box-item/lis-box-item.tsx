import {
  composeRenderProps,
  ListBoxItem as AriaListBoxItem,
  type ListBoxItemProps as AriaListBoxItemProps,
} from 'react-aria-components';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/shared/utils';

export const ListBoxItem = <T extends object>({ className, children, ...props }: AriaListBoxItemProps<T>) => {
  return (
    <AriaListBoxItem
      textValue={props.textValue || (typeof children === 'string' ? children : undefined)}
      className={composeRenderProps(className, (className) =>
        cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-slate-900 outline-none',
          'disabled:pointer-events-none disabled:opacity-80',
          'focus:bg-slate-100 focus:text-slate-800',
          'hover:bg-slate-200 focus:text-slate-800',
          'data-[selection-mode]:pr-8',
          className,
        ),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {renderProps.isSelected && (
            <span className='absolute right-2 flex size-4 items-center justify-center'>
              <CheckIcon />
            </span>
          )}
          {children}
        </>
      ))}
    </AriaListBoxItem>
  );
};
