import { Todos } from '@/domain/todos';
import { Suspense } from 'react';
import { Header } from './header';

export default function Recoil() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>recoil loading...</div>}>
        <Todos />
      </Suspense>
    </>
  );
}
