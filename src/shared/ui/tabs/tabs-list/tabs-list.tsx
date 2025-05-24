import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

export const TabsList: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return <div className={cn('flex flex-wrap gap-1 bg-white', className)}>{children}</div>;
};
