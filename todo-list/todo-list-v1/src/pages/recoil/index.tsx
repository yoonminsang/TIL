import { Todos } from '@/domain/todos';
import { Suspense, useEffect } from 'react';
import { Header } from './header';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useGetTodos } from '@/hooks/queries/todo-queries';
import { filteredTodosState, todosState } from './atom';

export default function Recoil() {
  const { data } = useGetTodos();
  const setTodos = useSetRecoilState(todosState);
  const filteredTodos = useRecoilValue(filteredTodosState);
  useEffect(() => {
    if (data) setTodos(data);
  }, [data, setTodos]);
  return (
    <>
      <Header />
      <Suspense fallback={<div>recoil loading...</div>}>
        <Todos list={filteredTodos} />
      </Suspense>
    </>
  );
}
