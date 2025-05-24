import {
  Collection as AriaCollection,
  ListBox as AriaListBox,
  type ListBoxProps as AriaListBoxProps,
  composeRenderProps,
} from 'react-aria-components';
import { cn } from '@/shared/utils';

export const ListBoxCollection = AriaCollection;

export function ListBox<T extends object>({ className, ...props }: AriaListBoxProps<T>) {
  return (
    <AriaListBox
      className={composeRenderProps(className, (className) =>
        cn(
          className,
          'group overflow-auto rounded-md border border-slate-300 bg-white p-1 text-slate-800 shadow-md outline-none',
          'empty:p-6 empty:text-center empty:text-sm',
        ),
      )}
      {...props}
    />
  );
}
