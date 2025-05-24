import { type DateFormatterOptions, useDateFormatter } from '@react-aria/i18n';
import type { FC } from 'react';

interface DateValueProps {
  value: Date | string;
  options?: Partial<DateFormatterOptions>;
}
export const DateValue: FC<DateValueProps> = ({ value, options }) => {
  const formatter = useDateFormatter(options);

  return <>{formatter.format(typeof value === 'string' ? new Date(value) : value)}</>;
};
