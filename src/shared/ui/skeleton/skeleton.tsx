import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

export const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('animate-pulse rounded-md bg-slate-100 duration-75', className)} {...props} />;
};
