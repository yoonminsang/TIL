import { TodoCreateDto, TodoSummaryDto } from '@/mocks/types';

export type UseTodos = () => Return;
export type UseTodosHeader = () => {
  handleCreateTodo: (todo: TodoCreateDto) => void;
};

type Return = {
  filteredTodos: { title: string; data?: TodoSummaryDto[] }[];
};
