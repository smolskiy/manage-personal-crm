import React from 'react';

export const Avatar: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='bg-slate-400 size-full'
    width='80'
    height='80'
    fill='none'
    viewBox='0 0 80 80'
  >
    <circle
      cx='40'
      cy='34'
      r='14.4'
      fill='white' />
    <path
      fill='white'
      d='M71 80c0-3.546-.802-7.057-2.36-10.332-1.558-3.276-3.841-6.253-6.72-8.76-2.878-2.507-6.296-4.496-10.057-5.853A35.025 35.025 0 0 0 40 53c-4.071 0-8.102.698-11.863 2.055-3.761 1.357-7.179 3.346-10.057 5.853-2.879 2.507-5.162 5.484-6.72 8.76C9.802 72.943 9 76.454 9 80h62Z'
    />
  </svg>
)