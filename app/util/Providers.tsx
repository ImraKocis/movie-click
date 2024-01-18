'use client';

import React, { ReactElement, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/app/lib/redux/store';

interface QueryProviderProps {
  children: ReactNode;
}

export default function Providers({
  children,
}: QueryProviderProps): ReactElement {
  const [queryClient] = useState(() => new QueryClient());
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) storeRef.current = makeStore();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={storeRef.current}>{children}</Provider>
    </QueryClientProvider>
  );
}
