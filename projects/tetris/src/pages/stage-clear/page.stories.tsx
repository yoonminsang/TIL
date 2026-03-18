import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import StageClearPage from './page';

const meta = {
  title: 'pages / StageClear',
  component: StageClearPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onChangeStageIntroPage: fn(),
  },
} satisfies Meta<typeof StageClearPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stage: 1,
  },
};
