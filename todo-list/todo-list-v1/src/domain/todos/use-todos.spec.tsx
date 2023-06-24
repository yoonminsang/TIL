import { renderHook, act } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { TodoCreateDto, TodoPriority, TodoStatus } from '@/mocks/types';
import { useTodosMutation } from './use-todos';

const context = describe;

const currentMockDate = new Date('2023-05-01');
global.Date = jest.fn(() => currentMockDate) as any;

describe('useTodosMutation', () => {
  describe('handleCreateTodo', () => {
    context('basic success', () => {
      it('should be success create when todos empty', () => {
        const { result } = renderHook(() => useTodosMutation(), {
          wrapper: RecoilRoot,
        });

        const newTodo: TodoCreateDto = {
          status: TodoStatus.todo,
          title: 'title',
          priority: TodoPriority.high,
        };

        act(() => {
          result.current.handleCreateTodo(newTodo);
        });

        expect(result.current.todoSummary).toEqual([
          {
            id: -1,
            ...newTodo,
            createdAt: currentMockDate.toISOString(),
          },
        ]);
        expect(result.current.filteredTodos).toEqual([
          {
            data: [{ id: -1, ...newTodo, createdAt: currentMockDate.toISOString() }],
            title: '할 일',
          },
          { data: [], title: '진행중' },
          { data: [], title: '완료' },
        ]);
      });

      // 처음 RecoilState모킹이 힘들어서 두 번 만들어서 테스트함.
      it('should be success create when todos exist', () => {
        const { result } = renderHook(() => useTodosMutation(), {
          wrapper: RecoilRoot,
        });

        const newTodo: TodoCreateDto = {
          status: TodoStatus.todo,
          title: 'title',
          priority: TodoPriority.high,
        };
        const newTodo2: TodoCreateDto = {
          status: TodoStatus.ing,
          title: 'title2',
          priority: TodoPriority.medium,
        };

        act(() => {
          result.current.handleCreateTodo({ ...newTodo });
        });
        act(() => {
          result.current.handleCreateTodo({ ...newTodo2 });
        });

        expect(result.current.todoSummary).toEqual([
          {
            id: -1,
            ...newTodo,
            createdAt: currentMockDate.toISOString(),
          },
          {
            id: -2,
            ...newTodo2,
            createdAt: currentMockDate.toISOString(),
          },
        ]);
        expect(result.current.filteredTodos).toEqual([
          {
            data: [
              {
                id: -1,
                status: TodoStatus.todo,
                title: 'title',
                priority: TodoPriority.high,
                createdAt: currentMockDate.toISOString(),
              },
            ],
            title: '할 일',
          },
          {
            data: [
              {
                id: -2,
                status: TodoStatus.ing,
                title: 'title2',
                priority: TodoPriority.medium,
                createdAt: currentMockDate.toISOString(),
              },
            ],
            title: '진행중',
          },
          { data: [], title: '완료' },
        ]);
      });
    });
  });

  describe('handleUpdateTodo', () => {
    context('error case', () => {
      it('data null', () => {});
      it('matching data null', () => {});
    });
    it('should update', () => {});
  });

  describe('handleDeleteTodo', () => {
    context('error case', () => {
      it('data null', () => {});
      it('matching data null', () => {});
    });
    it('should delete', () => {});
  });
});
