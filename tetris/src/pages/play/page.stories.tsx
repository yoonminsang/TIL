import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PlayPage from './page';

const meta = {
  title: 'pages / Play',
  component: PlayPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onChangeStageClearPage: fn(),
    onChangeStageDeadPage: fn(),
  },
} satisfies Meta<typeof PlayPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stage: 1,
  },
};
