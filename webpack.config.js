const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// Import dependencies.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Import common configurations.
const common = require('./webpack.common');

// Webpack configuration.
module.exports = {
  mode: 'development',
  entry: {
    scripts: './scripts.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { extensions: ['.ts', '.js'] },

  /**
   * Plugins.
   *
   * Add all common plugins.
   *
   * MiniCssExtractPlugin()
   * A Lightweight CSS extraction webpack plugin.
   */
  plugins: [
    ...common.plugins,
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      path: path.resolve(__dirname, 'dist'),
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 9000,
      injectChanges: true,
      proxy: 'http://storybook-twig.docker.amazee.io',
    }),
  ],
  module: {
    rules: [
      common.javascript,
      // Extend common CSS configuration with those used in build process.
      {
        ...common.css,
        use: [MiniCssExtractPlugin.loader, 'css-loader', ...common.css.use],
      },
      common.assets,
    ],
  },
};
