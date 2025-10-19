// frontend/react/webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: { index: './src/index.tsx' },         // один entry → один итоговый CSS
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

      // СНАЧАЛА .module.css (чтобы не перехватило глобальное правило)
      {
        test: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              importLoaders: 1,
              sourceMap: !isProd,
              modules: {
                localIdentName: isProd ? '[hash:base64:8]' : '[name]__[local]__[hash:base64:5]',
                namedExport: false,                 // ← только default export
                exportLocalsConvention: 'camelCaseOnly',
              },
            },
          },
        ],
      },

      // Потом обычные (глобальные) css
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: !isProd,
            },
          },
          // при желании добавь postcss-loader с autoprefixer
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',        // => css/index.css
      chunkFilename: 'css/[name].css',
    }),
  ],
  optimization: { splitChunks: false, runtimeChunk: false },
};
