import { composeRenderProps, ListBox as AriaListBox, type ListBoxProps as AriaListBoxProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const SelectListBox = <T extends object>({ className, ...props }: AriaListBoxProps<T>) => (
  <AriaListBox
    className={composeRenderProps(className, (className) =>
      cn(
        'max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]',
        className,
      ),
    )}
    {...props}
  />
);
