import type { Meta, StoryObj } from '@storybook/react';
import TableRenderer from './TableRenderer';

const meta = {
  title: 'pages / Play / TableRenderer',
  component: TableRenderer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof TableRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ICell: Story = {
  args: {
    cellList: [
      [{ type: 'i' }, { type: 'o' }, { type: 'l' }],
      [{ type: 'j' }, { type: null }, { type: null }],
      [{ type: 't' }, { type: 's' }, { type: 'z' }],
    ],
  },
};
