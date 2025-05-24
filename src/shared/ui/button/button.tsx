import { Button as AriaButton, composeRenderProps, type ButtonProps as AriaButtonProps } from 'react-aria-components';

import { cn } from '@/shared/utils';
import type { FC, RefAttributes } from 'react';

type ButtonVariants = 'primary' | 'outlined';

const variants: Record<ButtonVariants, string> = {
  primary: 'border border-blue-600/25 bg-blue-500 text-white active:bg-blue-700 hover:bg-blue-600',
  outlined: 'border border-slate-300 bg-white text-slate-900 active:bg-slate-100 hover:bg-slate-50',
};

export interface ButtonProps extends AriaButtonProps, RefAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}
export const Button: FC<ButtonProps> = ({ className, variant = 'primary', ...props }) => {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          'inline-flex h-10 flex-shrink-0 items-center justify-center gap-1 rounded-md px-6 py-2 font-semibold outline-none',
          'pending:opacity-80',
          'disabled:border-slate-200 disabled:bg-slate-200 disabled:text-slate-400 disabled:active:bg-slate-200 disabled:hover:bg-slate-200',
          variants[variant],
          className,
        ),
      )}
      {...props}
    />
  );
};
