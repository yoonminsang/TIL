import type { Meta, StoryObj } from '@storybook/react';
import Renderer from './Renderer';

const meta = {
  title: 'pages / Play / Renderer',
  component: Renderer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Renderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ICell: Story = {
  args: {
    cellList: [
      ['i', 'o', 'l'],
      ['j', null, null],
      ['t', 's', 'z'],
    ],
  },
};
