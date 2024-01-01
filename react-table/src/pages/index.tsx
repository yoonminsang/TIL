import { ReactNode } from 'react';
import RootPage from './page';
import BasicPage from './basic/page';
import ColumnGroupsPage from './column-groups/page';

export const routes: { path: string; element: ReactNode }[] = [
  { path: '/', element: <RootPage /> },
  { path: '/basic', element: <BasicPage /> },
  { path: '/column-groups', element: <ColumnGroupsPage /> },
];
