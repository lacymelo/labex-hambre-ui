import {
  themes
} from '@storybook/theming'

/** @type { import('@storybook/react').Preview } */
import '@storybook/addon-docs/blocks';

const preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;