import { Switch as AriaSwitch, type SwitchProps as AriaSwitchProps, composeRenderProps } from 'react-aria-components';
import { cn } from '@/shared/utils';

export const Switch = ({ children, className, ...props }: AriaSwitchProps) => (
  <AriaSwitch
    className={composeRenderProps(className, (className) =>
      cn(
        'group/switch inline-flex items-center gap-2 leading-none text-slate-700 disabled:cursor-not-allowed disabled:opacity-80',
        className,
      ),
    )}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        <div
          className={cn(
            'inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-slate-300 transition-colors',
            'group-disabled/switch:cursor-not-allowed group-disabled/switch:opacity-50',
            'group-selected/switch:bg-blue-500',
            'group-readonly/switch:cursor-default',
            'focus-visible:outline-none',
          )}
        >
          <div
            className={cn(
              'pointer-events-none block size-4 rounded-full bg-white shadow-lg ring-0 transition-transform',
              'translate-x-[0.2rem] group-selected/switch:translate-x-[1.6rem]',
            )}
          />
        </div>
        {children}
      </>
    ))}
  </AriaSwitch>
);
