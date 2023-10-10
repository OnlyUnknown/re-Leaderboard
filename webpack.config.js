const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge'); // Import webpack-merge

// Define your productionConfig
const productionConfig = merge([
  {
    output: {
      publicPath: "/re-leaderboard", // Adjust the publicPath as needed
    },
  },
  // ... other configurations specific to productionConfig
]);

module.exports = merge(
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      static: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
    },
  },
  productionConfig // Merge the productionConfig here
);
