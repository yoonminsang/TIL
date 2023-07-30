'use client';
import { setupStore } from '@/store';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

const ReduxProvider: FC<Props> = ({ children }) => {
  return <Provider store={setupStore()}>{children}</Provider>;
};
