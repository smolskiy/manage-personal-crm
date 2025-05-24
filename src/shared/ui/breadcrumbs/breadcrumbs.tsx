import type { FC, PropsWithChildren } from 'react';

export const Breadcrumbs: FC<PropsWithChildren> = ({ children }) => (
  <nav aria-label='breadcrumb'>
    <ol className='flex flex-wrap items-center gap-1 text-slate-500'>{children}</ol>
  </nav>
);
