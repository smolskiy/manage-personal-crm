import type { FC } from 'react';
import { ChevronRightIcon } from 'lucide-react';

export const BreadcrumbSeparator: FC = () => (
  <li role='presentation' aria-hidden='true'>
    <ChevronRightIcon className='size-3.5' />
  </li>
);
