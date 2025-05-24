

import { CircleAlertIcon, TriangleAlertIcon } from 'lucide-react';
import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

const variants: Record<NotificationType, string> = {
  warning: 'bg-orange-50 text-orange-500 border-orange-500',
  error: 'bg-red-50 text-red-500 border-red-500',
};

type NotificationType = 'warning' | 'error';
interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  type?: NotificationType;
}
export const Notification: FC<NotificationProps> = ({ children, className, type = 'error' }) => {
  return (
    <div className={cn('flex items-start gap-2 rounded-md border p-5', variants[type], className)}>
      <div className='shrink-0'>{type === 'warning' ? <TriangleAlertIcon /> : <CircleAlertIcon />}</div>
      <div className='font-semibold'>{children}</div>
    </div>
  );
};
