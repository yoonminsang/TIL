import type { Meta, StoryObj } from '@storybook/react';

import { TodoCard } from './todo-card';

const meta: Meta<typeof TodoCard> = {
  title: 'Domain/todos/TodoCard',
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
