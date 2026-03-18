import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

interface State {
  stage: number;
}

interface Action {
  increase: VoidFunction;
}

type Integrate = State & Action;

const initialState: State = {
  stage: 1,
};

export const useStage = create<Integrate>()(
  devtools((set) => ({
    ...initialState,
    increase: () => set((state) => ({ stage: state.stage + 1 })),
  }))
);
