const path = require('path');

module.exports = {
  framework: {
    name: '@storybook/server-webpack5',
    options: {
      server: {
        url: 'https://code-challenge.ddev.site:8443'
      }
    }
  },

  stories: [
    '../components/**/*.stories.json'
  ],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],

  staticDirs: [
    '../components'
  ],

  core: {
    builder: '@storybook/builder-webpack5'
  },

  webpackFinal: async (config) => {

    config.module.rules.push({
      test: /\.twig$/,
      use: 'null-loader'
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components')
    };

    return config;
  }
};
