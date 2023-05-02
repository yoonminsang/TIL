import { OverlayProvider } from '@/hooks/common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

if (process.env.NODE_ENV === 'development') {
  require('../mocks');
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={new QueryClient()}>
        <Suspense fallback={<div>Loading...</div>}>
          <OverlayProvider>
            <Component {...pageProps} />
          </OverlayProvider>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
