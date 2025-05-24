import type { FC, PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'react-router';

type BreadcrumbLinkProps = LinkProps & PropsWithChildren;

export const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({ children, ...props }) => (
  <Link className='text-slate-600 transition-colors hover:text-slate-800' {...props}>
    {children}
  </Link>
);
