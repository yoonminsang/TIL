import { renderHook, act } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { TodoCreateDto, TodoPriority, TodoStatus } from '@/mocks/types';
import { useTodosMutation } from './use-todos';

const context = describe;

// recoil 테스트 하는방법을 모르겠음.. 불가능한건지 내가모르는건지...
describe('useTodosMutation', () => {
  describe('handleCreateTodo', () => {
    context('basic success', () => {
      it('should be success create when todos empty', () => {});
      it('should be success create when todos exist', () => {});
    });

    context('check id', () => {
      it('should be id -1 when first client create', () => {
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
      });
      it('should be id -2 when second client create', () => {});
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
