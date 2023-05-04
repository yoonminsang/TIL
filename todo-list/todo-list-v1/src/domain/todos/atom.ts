import { TodoStatus, TodoSummaryDto } from '@/mocks/types';
import { atom, selector } from 'recoil';

export const todosState = atom<null | TodoSummaryDto[]>({
  key: 'todosState',
  default: null,
  effects: [
    () => {
      console.log(
        'todosState 바뀜.(이걸 api, 로컬스토리지, queryparam에 동기화 가능'
      );
    },
  ],
});

export const filteredTodosState = selector({
  key: 'filteredTodosState',
  get: ({ get }) => {
    const data = get(todosState);
    const filteredData = data?.reduce(
      (acc, cur) => {
        if (cur.status === TodoStatus.todo) {
          acc.todo.push(cur);
        } else if (cur.status === TodoStatus.ing) {
          acc.ing.push(cur);
        } else if (cur.status === TodoStatus.done) {
          acc.done.push(cur);
        }
        return acc;
      },
      {
        todo: [] as TodoSummaryDto[],
        ing: [] as TodoSummaryDto[],
        done: [] as TodoSummaryDto[],
      }
    );
    const list = [
      { title: '할 일', data: filteredData?.todo },
      { title: '진행중', data: filteredData?.ing },
      { title: '완료', data: filteredData?.done },
    ];
    return list;
  },
});
