const path = require('path');

const webpack = require('webpack');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './view/index.html'),
      filename: 'index.html'
    })
  ],
  // resolve: {
  //   extensions: [".js"],
  // },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                "targets": "> 0.25%, not dead",
                "useBuiltIns": "usage",
                "corejs": "3.8.3",
              }
            ]
          ]
        }
      }
    }]
  }
};