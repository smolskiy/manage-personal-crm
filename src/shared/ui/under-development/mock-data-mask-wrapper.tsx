import React from 'react';

export const MockDataMaskWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className='relative select-none'>
    <div className='opacity-50 blur-sm'>{children}</div>
    <div className='absolute inset-0 flex items-center justify-center'>
      <div className='rounded border border-slate-100 bg-white px-3 py-1 text-slate-500'>Mock data</div>
    </div>
  </div>
);
