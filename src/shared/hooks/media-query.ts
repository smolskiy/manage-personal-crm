import { useEffect, useState } from 'react';
import { Breakpoints } from '@/shared/enums';

interface MediaQueryOptions {
  breakpoint: Breakpoints;
}
export const useMediaQuery = ({ breakpoint }: MediaQueryOptions) => {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakpoint);
    const handleChange = () => setMatches(mediaQuery.matches);

    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return matches;
};
