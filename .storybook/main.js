module.exports = {
  stories: [
    './styles.css',
    '../**/*.stories.@(ts|js)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
  ],
};
