import { Header as AriaHeader } from 'react-aria-components';
import type { ComponentProps } from 'react';
import { cn } from '@/shared/utils';

export const ListBoxHeader = ({ className, ...props }: ComponentProps<typeof AriaHeader>) => {
  return <AriaHeader className={cn('px-2 py-1.5 text-sm font-semibold', className)} {...props} />;
};
