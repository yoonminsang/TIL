import { ReactNode } from 'react';
import RootPage from './page';

export const routes: { path: string; element: ReactNode }[] = [{ path: '/', element: <RootPage /> }];
