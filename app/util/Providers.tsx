'use client';

import React, { ReactElement, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRef } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { makeStore, AppStore } from '@/app/lib/redux/store';
import LocalStorageWrapper from '@/app/util/LocalStorageWrapper';
import { NextUIProvider } from '@nextui-org/react';

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
      <ReduxProvider store={storeRef.current}>
        <NextUIProvider>
          <LocalStorageWrapper>{children}</LocalStorageWrapper>
        </NextUIProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
