import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

type PageBoxProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ContentBox: FC<PageBoxProps> = ({ className, ...props }) => (
  <div className={cn('overflow-hidden rounded-lg border border-slate-300 bg-white', className)} {...props} />
);
