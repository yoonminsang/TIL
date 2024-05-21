import type { Meta, StoryObj } from '@storybook/react';
import RootLayout from './layout';

const meta = {
  title: 'pages / RootLayout',
  component: RootLayout,
} satisfies Meta<typeof RootLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'children',
  },
};
