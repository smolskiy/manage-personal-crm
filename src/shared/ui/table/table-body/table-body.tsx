import { composeRenderProps, type TableBodyProps, TableBody as AriaTableBody } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const TableBody = <T extends object>({ className, ...props }: TableBodyProps<T>) => (
  <AriaTableBody
    className={composeRenderProps(className, (className) => cn('[&_tr:last-child]:border-0', className))}
    {...props}
  />
);
