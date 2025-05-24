

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC, type PropsWithChildren, useState } from 'react';

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000, retryOnMount: false, retry: false } } }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
