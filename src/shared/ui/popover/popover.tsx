

import {
  Dialog as AriaDialog,
  type DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
  composeRenderProps,
} from 'react-aria-components';
import { cn } from '@/shared/utils';

export const PopoverTrigger = AriaDialogTrigger;
export const PopoverDialog = ({ className, ...props }: AriaDialogProps) => {
  return <AriaDialog className={cn('outline outline-0', className)} {...props} />;
};

export const Popover = ({ className, offset = 4, ...props }: AriaPopoverProps) => (
  <AriaPopover
    offset={offset}
    className={composeRenderProps(className, (className) =>
      cn(
        'z-50 overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md transition-all',
        'entering:opacity-0 exiting:opacity-0',
        className,
      ),
    )}
    {...props}
  />
);
