import { FC } from 'react';
import { TodoCard, TodoLayout, TodoUpdateModal } from './components';
import { UseTodos, UseTodosMutation } from './types';
import { useOverlay } from '@/hooks/common';
import { GetProps, ResolveReturnType } from '@/utils';
import { usePrefetchTodosById } from '@/hooks/queries/todo-queries';

interface Props {
  useTodos: UseTodos;
  useTodosMutation: UseTodosMutation;
}

export const Todos: FC<Props> = ({ useTodos, useTodosMutation }) => {
  const overlay = useOverlay();

  const { filteredTodos } = useTodos();
  const { handleDeleteTodo, handleUpdateTodo } = useTodosMutation();
  const { prefetchTodosById } = usePrefetchTodosById();

  const openTodoModifyModal = async (id: number) => {
    // TODO: 로딩추가
    const initialData = await prefetchTodosById(id);
    const result = await new Promise<
      ResolveReturnType<GetProps<typeof TodoUpdateModal>['resolve']>
    >((resolve) => {
      overlay.open(({ isOpen, close }) => (
        <TodoUpdateModal
          visible={isOpen}
          resolve={resolve}
          close={close}
          initialState={initialData}
        />
      ));
    });
    if (result === false) return;
    if (result.type === 'modify') {
      handleUpdateTodo(id, { ...result.data });
    }
    if (result.type === 'delete') {
      handleDeleteTodo(id);
    }
  };

  return (
    <TodoLayout>
      <TodoCard.listContainer>
        {filteredTodos.map(({ title, data }) => (
          <TodoCard.list key={title} title={title}>
            {data?.map(({ id, title, priority }) => (
              <TodoCard
                key={id}
                title={title}
                priority={priority}
                onClick={() => {
                  openTodoModifyModal(id);
                }}
              />
            ))}
          </TodoCard.list>
        ))}
      </TodoCard.listContainer>
    </TodoLayout>
  );
};
