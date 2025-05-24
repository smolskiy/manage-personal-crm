import type { Nullable } from '@/shared/model';

export const withParams = (url: string, params: URLSearchParams | Record<string, Nullable<string>>): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]: [string, string]): void => {
    if (value) {
      searchParams.set(key, value);
    }
  });

  return `${url}?${searchParams.toString()}`;
};
