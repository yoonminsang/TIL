import { TodoSummaryDto } from '@/mocks/types';

export type UseTodos = () => Return;

type Return = {
  filteredTodos: { title: string; data?: TodoSummaryDto[] }[];
};
