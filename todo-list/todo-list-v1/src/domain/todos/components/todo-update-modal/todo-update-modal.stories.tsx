import type { Meta, StoryObj } from '@storybook/react';
import { TodoUpdateModal } from './todo-update-modal';

const meta: Meta<typeof TodoUpdateModal> = {
  title: 'Domain/Todos/TodoUpdateModal',
  component: TodoUpdateModal,
};

export default meta;
type Story = StoryObj<typeof TodoUpdateModal>;

export const Primary: Story = {
  args: {
    visible: true,
    initialState: {
      id: 1,
      title: 'initail title',
      description: 'description',
      priority: 'low',
      status: 'ing',
      createdAt: new Date('1995-09-06').toISOString(),
    },
  },
};
