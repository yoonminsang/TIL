import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'Components/modal',
  component: Modal,
  //     // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  //     tags: ['autodocs'],
  //     parameters: {
  //       // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  //       layout: 'fullscreen',
  //     },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: <div>모달입니다!</div>,
    visible: true,
  },
};
