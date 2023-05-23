import { FC } from 'react';
import { TodoCard, TodoLayout, TodoUpdateModal } from './components';
import { UseTodos, UseTodosMutation } from './types';
import { useOverlay } from '@/hooks/common';
import { GetProps, ResolveReturnType, errorMessage } from '@/utils';

interface Props {
  useTodos: UseTodos;
  useTodosMutation: UseTodosMutation;
}

export const Todos: FC<Props> = ({ useTodos, useTodosMutation }) => {
  const overlay = useOverlay();

  const { todoSummary, filteredTodos } = useTodos();
  const { handleDeleteTodo, handleUpdateTodo } = useTodosMutation();

  const openTodoModifyModal = async (id: number) => {
    const initialData = todoSummary?.find((v) => v.id === id);
    if (!initialData) {
      errorMessage({
        message: 'initialData(todo에서 id를 find)가 없습니다',
        context: 'domain/todos/todos - openTodoModifyModal',
      });
      return;
    }
    const result = await new Promise<ResolveReturnType<GetProps<typeof TodoUpdateModal>['resolve']>>((resolve) => {
      overlay.open(({ isOpen, close }) => (
        <TodoUpdateModal visible={isOpen} resolve={resolve} close={close} initialState={initialData} />
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
      <TodoCard.ListContainer>
        {filteredTodos.map(({ title, data }) => (
          <TodoCard.List key={title} title={title}>
            {data?.map(({ id, title, priority }) => (
              <TodoCard
                key={id}
                title={title}
                priority={priority}
                onClick={async () => {
                  await openTodoModifyModal(id);
                }}
              />
            ))}
          </TodoCard.List>
        ))}
      </TodoCard.ListContainer>
    </TodoLayout>
  );
};
