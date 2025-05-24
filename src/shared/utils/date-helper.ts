import { parseDate } from '@internationalized/date';
import { parseDateWithTimezone } from '@/shared/utils';

export const convertToTimezoneISOString = (date: string): string => {
  return parseDate(date).toDate('UTC').toISOString();
};

export const convertISOStringToDateString = (date: string): string => {
  return parseDateWithTimezone(date).toString();
};
