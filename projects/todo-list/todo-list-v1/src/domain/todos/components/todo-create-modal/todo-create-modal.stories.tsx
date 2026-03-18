import type { Meta, StoryObj } from '@storybook/react';
import { TodoCreateModal } from './todo-create-modal';

const meta: Meta<typeof TodoCreateModal> = {
  title: 'Domain/Todos/TodoCreateModal',
  component: TodoCreateModal,
};

export default meta;
type Story = StoryObj<typeof TodoCreateModal>;

export const Primary: Story = {
  args: {
    visible: true,
  },
};
