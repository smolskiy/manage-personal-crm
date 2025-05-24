import { composeRenderProps, type TableHeaderProps, TableHeader as AriaTableHeader } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const TableHeader = <T extends object>({ className, ...props }: TableHeaderProps<T>) => (
  <AriaTableHeader
    className={composeRenderProps(className, (className) =>
      cn('relative after:absolute after:bottom-0 after:w-full after:border-b after:border-slate-300', className),
    )}
    {...props}
  />
);
