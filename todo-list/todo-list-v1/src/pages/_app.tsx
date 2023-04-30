import { OverlayProvider } from '@/hooks';
import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  require('../mocks');
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OverlayProvider>
      <Component {...pageProps} />
    </OverlayProvider>
  );
}
