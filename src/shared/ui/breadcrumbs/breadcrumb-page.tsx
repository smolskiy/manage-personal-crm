import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

type BreadcrumbPageProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export const BreadcrumbPage: FC<BreadcrumbPageProps> = ({ className, ...props }) => (
  <span role='link' aria-disabled='true' aria-current='page' className={cn('text-slate-500', className)} {...props} />
);
