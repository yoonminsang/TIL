import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const toPath = (_path: string) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules.push(
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              'next/babel',
              [
                '@babel/preset-react',
                { runtime: 'automatic', importSource: '@emotion/react' },
              ],
            ],
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          loader: 'next/images',
        }
      );
    }
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@emotion/core': toPath('node_modules/@emotion/react'),
        '@emotion/styled': toPath('node_modules/@emotion/styled'),
        'emotion-theming': toPath('node_modules/@emotion/react'),
      };
    }

    return config;
  },
};
export default config;
