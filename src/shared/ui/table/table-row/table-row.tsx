import { cn } from '@/shared/utils';
import { composeRenderProps, Row as AriaRow, type RowProps } from 'react-aria-components';

export const TableRow = <T extends object>({ className, ...props }: RowProps<T>) => (
  <AriaRow
    className={composeRenderProps(className, (className, { isFocusVisible, isHovered }) =>
      cn(
        'border-b border-slate-300 bg-white outline-none',
        isFocusVisible && 'ring ring-inset ring-blue-500 ring-offset-1',
        isHovered && 'bg-blue-50',
        className,
      ),
    )}
    {...props}
  />
);
