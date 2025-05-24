import { type ColumnProps, composeRenderProps, Column as AriaColumn } from 'react-aria-components';
import { cn } from '@/shared/utils';
import type { ReactNode } from 'react';
import { SortIndicator } from '@/shared/ui/table/table-column/sort-indicator';

export const TableColumn = ({ className, children, ...props }: ColumnProps) => (
  <AriaColumn
    className={composeRenderProps(className, (className, { allowsSorting }) =>
      cn(
        'h-10 text-nowrap px-4 py-3 text-left align-middle font-semibold text-slate-700 outline-none',
        allowsSorting && 'cursor-pointer hover:bg-slate-100',
        className,
      ),
    )}
    {...props}
  >
    {({ allowsSorting, sortDirection }) => (
      <div className='flex items-center gap-1'>
        {children as ReactNode}
        {allowsSorting && <SortIndicator sortDirection={sortDirection} />}
      </div>
    )}
  </AriaColumn>
);
