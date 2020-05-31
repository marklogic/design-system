module.exports = {
  stories: [
    '../stories/*.stories.jsx',
    '../stories/*.stories.mdx'
  ],
  // stories: ['../stories/15-Dropdown.stories.jsx'],
  addons: [
    // '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-docs',
      options: {
        // configureJSX: true,
        // babelOptions: {},
        // sourceLoaderOptions: null, // Turns off story source loader
      }
    },
  ],
};
