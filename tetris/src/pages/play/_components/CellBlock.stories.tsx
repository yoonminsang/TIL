import type { Meta, StoryObj } from '@storybook/react';
import CellBlock from './CellBlock';

const meta = {
  title: 'pages / Play / CellBlock',
  component: CellBlock,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof CellBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ICellBlock: Story = {
  args: { cell: { type: 'i' } },
};
export const JCellBlock: Story = {
  args: { cell: { type: 'j' } },
};
export const LCellBlock: Story = {
  args: { cell: { type: 'l' } },
};
export const OCellBlock: Story = {
  args: { cell: { type: 'o' } },
};
export const SCellBlock: Story = {
  args: { cell: { type: 's' } },
};
export const TCellBlock: Story = {
  args: { cell: { type: 't' } },
};
export const ZCellBlock: Story = {
  args: { cell: { type: 'z' } },
};
export const ShadowCellBlock: Story = {
  args: { cell: { type: null, shadow: true } },
};
export const DisabledCellBlock: Story = {
  args: { cell: { type: 'i', disabled: true } },
};
export const IsCrashedCellBlock: Story = {
  args: { cell: { type: 'i', isCrashed: true } },
};
export const EmptyCellBlock: Story = {
  args: { cell: { type: null } },
};
