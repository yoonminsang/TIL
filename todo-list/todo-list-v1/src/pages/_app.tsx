import { OverlayProvider } from '@/hooks/common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  require('../mocks');
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <OverlayProvider>
        <Component {...pageProps} />
      </OverlayProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
