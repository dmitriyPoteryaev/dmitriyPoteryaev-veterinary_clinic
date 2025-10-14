// frontend/react/webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../../web/react'),
    filename: 'js/[name].js',
    publicPath: '/react/',
    clean: true,
  },
  devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
  module: {
    rules: [
      { test: /\.[tj]sx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
  ],
  optimization: {
    splitChunks: false,   // ← отключили разбиение
    runtimeChunk: false,  // ← без отдельного runtime
  },
};
