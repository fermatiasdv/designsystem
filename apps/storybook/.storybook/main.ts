import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../stories/atoms/**/*.stories.@(ts|tsx)',
    '../stories/molecules/**/*.stories.@(ts|tsx)',
    '../stories/organisms/**/*.stories.@(ts|tsx)',
    '../stories/templates/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}

export default config
