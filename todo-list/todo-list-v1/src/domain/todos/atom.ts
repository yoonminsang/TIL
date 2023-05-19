import { Todo, TodoStatus, TodoSummaryDto } from '@/mocks/types';
import { errorMessage } from '@/utils';
import { atom, selector } from 'recoil';

export const todosState = atom<null | Todo[]>({
  key: 'todosState',
  default: null,
});

export const filteredTodosState = selector({
  key: 'filteredTodosState',
  get: ({ get }) => {
    const data = get(todosState);
    const filteredData = data?.reduce(
      (acc, cur) => {
        switch (cur.status) {
          case TodoStatus.todo:
            acc.todo.push(cur);
            break;
          case TodoStatus.ing:
            acc.ing.push(cur);
            break;
          case TodoStatus.done:
            acc.done.push(cur);
            break;
          default:
            errorMessage({
              message: '정해진 status가 아닙니다',
              context: 'domain/todos/atom - filteredTodosState',
            });
        }
        return acc;
      },
      {
        todo: [] as Todo[],
        ing: [] as Todo[],
        done: [] as Todo[],
      },
    );
    const list = [
      { title: '할 일', data: filteredData?.todo },
      { title: '진행중', data: filteredData?.ing },
      { title: '완료', data: filteredData?.done },
    ];
    return list;
  },
});
