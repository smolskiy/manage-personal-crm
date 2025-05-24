import { composeRenderProps, type TableProps, Table as AriaTable } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const Table = ({ className, ...props }: TableProps) => (
  <AriaTable className={composeRenderProps(className, (className) => cn('w-full bg-white', className))} {...props} />
);
