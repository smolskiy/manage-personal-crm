import {
  composeRenderProps,
  SelectValue as AriaSelectValue,
  type SelectValueProps as AriaSelectValueProps,
} from 'react-aria-components';
import { cn } from '@/shared/utils';

export const SelectValue = <T extends object>({ className, ...props }: AriaSelectValueProps<T>) => (
  <AriaSelectValue
    className={composeRenderProps(className, (className) =>
      cn('data-[placeholder]:text-muted-foreground line-clamp-1', '[&>[slot=description]]:hidden', className),
    )}
    {...props}
  />
);
