import {
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
  composeRenderProps,
} from 'react-aria-components';
import { cn } from '@/shared/utils';

export const TextArea = ({ className, ...props }: AriaTextAreaProps) => {
  return (
    <AriaTextArea
      className={composeRenderProps(className, (className) =>
        cn(
          'flex min-h-[80px] w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400',
          'disabled:cursor-not-allowed disabled:bg-slate-100',
          'focus:outline-2 focus:-outline-offset-1 focus:outline-blue-500',
          'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-500',
          className,
        ),
      )}
      {...props}
    />
  );
};
