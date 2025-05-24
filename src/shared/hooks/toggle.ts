import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((): void => {
    setValue((value: boolean): boolean => !value);
  }, []);

  return [value, toggle];
};
