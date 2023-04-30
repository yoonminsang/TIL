import { TodoCard as _TodoCard } from './todo-card';
import { TodoCardList } from './todo-card-list';
import { TodoCardListContainer } from './todo-card-list-container';

export const TodoCard = Object.assign(_TodoCard, {
  listContainer: TodoCardListContainer,
  list: TodoCardList,
});
