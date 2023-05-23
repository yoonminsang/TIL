import type { Meta, StoryObj } from '@storybook/react';

import { ModalV1 } from './modal-v1';

const meta: Meta<typeof ModalV1> = {
  title: 'Components/Modal/ModalV1',
  component: ModalV1,
};

export default meta;
type Story = StoryObj<typeof ModalV1>;

export const Primary: Story = {
  args: {
    visible: true,
    title: 'title',
    children: <div>모달입니다!</div>,
    buttons: [
      <button key={0} type="button">
        확인
      </button>,
      <button key={1} type="button">
        취소
      </button>,
    ],
    footer: 'footer',
  },
};
