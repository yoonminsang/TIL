import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { Suspense, useEffect, useState } from 'react';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';
import { OverlayProvider } from '@/hooks/common';
import { config } from '@/config';

if (config.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('../mocks');
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {},
      },
    }),
  );
  return (
    <RecoilRoot>
      <RecoilDebugger />
      <QueryClientProvider client={queryClient}>
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

function RecoilDebugger() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.debug('The following atoms were modified:');
    // eslint-disable-next-line no-restricted-syntax
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      // eslint-disable-next-line no-console
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}
