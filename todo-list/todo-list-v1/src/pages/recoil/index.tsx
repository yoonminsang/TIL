import { Todos } from '@/domain/todos';
import { Suspense } from 'react';

export default function Recoil() {
  return (
    <>
      <header>
        <h1>Recoil</h1>
      </header>
      <Suspense fallback={<div>recoil loading...</div>}>
        <Todos />
      </Suspense>
    </>
  );
}
