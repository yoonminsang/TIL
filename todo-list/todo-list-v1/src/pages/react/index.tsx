import { Todos } from '@/domain/todos';
import { Suspense } from 'react';
import { Header } from './header';
import { useGetTodoList } from './useGetTodoList';

export default function React() {
  const { list } = useGetTodoList();
  return (
    <>
      <Header />
      <Suspense fallback={<div>recoil loading...</div>}>
        <Todos list={list} />
      </Suspense>
    </>
  );
}
