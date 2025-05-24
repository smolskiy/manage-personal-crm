import type { DetailedHTMLProps, FC, LiHTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

type BreadcrumbItemProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ className, ...props }) => (
  <li className={cn('inline-flex h-6 items-center gap-1.5 text-sm font-semibold', className)} {...props} />
);
