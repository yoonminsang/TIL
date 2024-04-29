import type { Meta, StoryObj } from '@storybook/react';
import Cell from './Cell';

const meta = {
  title: 'pages / play / cell',
  component: Cell,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Cell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ICell: Story = {
  args: { cell: 'i' },
};
export const JCell: Story = {
  args: { cell: 'j' },
};
export const LCell: Story = {
  args: { cell: 'l' },
};
export const OCell: Story = {
  args: { cell: 'o' },
};
export const SCell: Story = {
  args: { cell: 's' },
};
export const TCell: Story = {
  args: { cell: 't' },
};
export const ZCell: Story = {
  args: { cell: 'z' },
};
