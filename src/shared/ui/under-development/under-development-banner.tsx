import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';
import { Settings } from 'lucide-react';

export const UnderDevelopmentBanner: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'flex size-full select-none items-center justify-center bg-white p-5',
        'bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[size:8px_8px] bg-left-top text-slate-100',
        className,
      )}
      {...props}
    >
      <div className='rounded-lg border border-slate-100 bg-white p-5 text-slate-400'>
        <div className='flex items-center justify-center'>
          <div className='animate-spin' style={{ animationDuration: '10s' }}>
            <Settings size={98} absoluteStrokeWidth />
          </div>
        </div>
        <div className='text-center'>This feature is under development</div>
      </div>
    </div>
  );
};
