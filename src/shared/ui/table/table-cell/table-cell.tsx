import { cn } from '@/shared/utils';
import { type CellProps, composeRenderProps, Cell as AriaCell } from 'react-aria-components';

export const TableCell = ({ className, ...props }: CellProps) => (
  <AriaCell
    className={composeRenderProps(className, (className) => cn('px-4 py-3 text-slate-700', className))}
    {...props}
  />
);
