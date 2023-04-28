import type { Meta, StoryObj } from '@storybook/react';

import { ExModal } from './ex-modal';

const meta: Meta<typeof ExModal> = {
  title: 'Components/Modal/ExModal',
  component: ExModal,
};

export default meta;
type Story = StoryObj<typeof ExModal>;

export const Primary: Story = {
  args: {
    visible: true,
    children: <div>모달입니다!</div>,
  },
};
