import { config } from '@/config';
import { OverlayProvider } from '@/hooks/common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { Suspense, useEffect, useState } from 'react';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';

if (config.NODE_ENV === 'development') {
  require('../mocks');
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {},
      },
    })
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
    console.debug('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}
