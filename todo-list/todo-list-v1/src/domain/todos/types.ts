import { TodoCreateDto, TodoSummaryDto } from '@/mocks/types';

export type UseTodos = () => {
  filteredTodos: { title: string; data?: TodoSummaryDto[] }[];
};
export type UseTodosHeader = () => {
  handleCreateTodo: (todo: TodoCreateDto) => void;
};
