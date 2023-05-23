import { Suspense } from 'react';
import { Todos, useTodos, useTodosMutation } from '@/domain/todos';
import { Header } from './header';

export default function Recoil() {
  return (
    <>
      <Header useTodosMutation={useTodosMutation} />
      <Suspense fallback={<div>recoil loading...</div>}>
        <Todos useTodos={useTodos} useTodosMutation={useTodosMutation} />
      </Suspense>
    </>
  );
}
