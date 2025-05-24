import type { FC, ReactNode } from 'react';
import { ScanSearchIcon } from 'lucide-react';

interface EmptyStateProps {
  title?: ReactNode;
  description?: ReactNode;
}
export const EmptyState: FC<EmptyStateProps> = ({ title, description }) => (
  <div className='flex flex-col items-center justify-center py-20'>
    <div className='mb-5 flex size-24 items-center justify-center rounded-full bg-slate-100 text-slate-400'>
      <ScanSearchIcon size={64} absoluteStrokeWidth />
    </div>
    <div className='text-lg font-semibold text-slate-700'>{title ? title : 'No Data Found'}</div>
    <div className='text-slate-500 empty:hidden'>{description}</div>
  </div>
);
