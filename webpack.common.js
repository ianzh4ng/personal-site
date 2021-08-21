const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsLoadingRules = {
  test: /\.(ts|js)(x?)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const cssLoadingRules = {
  test: /\.mod\.scss|\.css$/,
  use: [
    'style-loader',
    {
      loader: '@teamsupercell/typings-for-css-modules-loader',
      options: {
        formatter: 'prettier',
      },
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: '[local]__[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
};

module.exports = {
  entry: 'src/index.tsx',
  // options related to how webpack emits results
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // options for resolving module requests
  resolve: {
    // directories where to look for modules, in order
    modules: [path.resolve(__dirname), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  // configuration regarding modules
  module: {
    rules: [jsLoadingRules, cssLoadingRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
};
