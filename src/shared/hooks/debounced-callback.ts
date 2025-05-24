import { useEffect, useRef } from 'react';
import { DEFAULT_DEBOUNCE_TIME_MS } from '@/shared/constants';
import type { Nullable } from '@/shared/model';

type CallbackFunction<T extends unknown[]> = (...args: T) => void;

function useDebouncedCallback<T extends unknown[]>(
  callback: CallbackFunction<T>,
  delay: number = DEFAULT_DEBOUNCE_TIME_MS,
): CallbackFunction<T> {
  const timeoutRef = useRef<Nullable<number>>(null);

  useEffect(() => {
    return (): void => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (...args: T): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout((): void => {
      callback(...args);
    }, delay);
  };
}

export default useDebouncedCallback;
