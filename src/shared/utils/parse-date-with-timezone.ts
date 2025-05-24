import { type DateValue, parseDate } from '@internationalized/date';

export const parseDateWithTimezone = (ISOString: string): DateValue => {
  const [ISODate] = ISOString.split('T');
  return parseDate(ISODate);
};
