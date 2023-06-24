import { Todo, TodoCreateDto, TodoUpdateDto } from '@/mocks/types';

export type UseTodos = () => {
  todoSummary: Todo[] | null;
  filteredTodos: { title: string; data?: Todo[] }[];
};
export type UseTodosMutation = () => {
  todoSummary: Todo[] | null;
  filteredTodos: { title: string; data?: Todo[] }[];
  handleCreateTodo: (todo: TodoCreateDto) => void;
  handleUpdateTodo: (id: number, todo: TodoUpdateDto) => void;
  handleDeleteTodo: (id: number) => void;
};
