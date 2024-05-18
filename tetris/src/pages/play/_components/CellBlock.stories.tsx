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
  args: { blockType: 'i' },
};
export const JCellBlock: Story = {
  args: { blockType: 'j' },
};
export const LCellBlock: Story = {
  args: { blockType: 'l' },
};
export const OCellBlock: Story = {
  args: { blockType: 'o' },
};
export const SCellBlock: Story = {
  args: { blockType: 's' },
};
export const TCellBlock: Story = {
  args: { blockType: 't' },
};
export const ZCellBlock: Story = {
  args: { blockType: 'z' },
};
export const ShadowCellBlock: Story = {
  args: { blockType: 'shadow' },
};
export const EmptyCellBlock: Story = {
  args: { blockType: null },
};
