import { composeRenderProps, type PopoverProps as AriaPopoverProps } from 'react-aria-components';
import { Popover } from '@/shared/ui';
import { cn } from '@/shared/utils';

export const SelectPopover = ({ className, ...props }: AriaPopoverProps) => (
  <Popover className={composeRenderProps(className, (className) => cn('w-[--trigger-width]', className))} {...props} />
);
