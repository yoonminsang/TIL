import type { Meta, StoryObj } from '@storybook/react';

import { TodoCard } from './todo-card';
import { TodoCardList } from './todo-card-list';
import { TodoCardListContainer } from './todo-card-list-container';

const meta: Meta<typeof TodoCard> = {
  title: 'Domain/Todos/TodoCard',
  component: TodoCard,
};

export default meta;
type Story = StoryObj<typeof TodoCard>;

export const LongTitle: Story = {
  args: {
    title:
      'long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title long title logn title ',
    priority: 'high',
  },
};

export const HighPriority: Story = {
  args: {
    title: 'title',
    priority: 'high',
  },
};

export const MediumPriority: Story = {
  args: {
    title: 'title',
    priority: 'medium',
  },
};

export const LowPriority: Story = {
  args: {
    title: 'title',
    priority: 'low',
  },
};

export const Layout: Story = {
  args: {
    title: 'title',
    priority: 'high',
  },
  decorators: [
    (Story) => (
      <TodoCardListContainer>
        <TodoCardList>
          <Story />
          <Story />
          <Story />
        </TodoCardList>
        <TodoCardList>
          <Story />
          <Story />
          <Story />
        </TodoCardList>
        <TodoCardList>
          <Story />
          <Story />
          <Story />
        </TodoCardList>
      </TodoCardListContainer>
    ),
  ],
};
