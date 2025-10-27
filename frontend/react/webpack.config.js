const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: {
    index: './src/index.tsx', // один бандл -> index.js + index.css
  },

  output: {
    path: path.resolve(__dirname, '../../web/react'),
    filename: 'js/[name].js',
    publicPath: '/react/',
    clean: true,
  },

  devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  module: {
    rules: [
      //
      // TypeScript / JSX
      //
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },

      //
      // CSS MODULES (*.module.css)
      //
      {
        test: /\.module\.css$/i,
        use: [
          // в dev можно 'style-loader', но MiniCssExtractPlugin.loader тоже норм, оставляем единообразно
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              importLoaders: 0,

              // Ключевая часть: модули
              modules: {
                // делаем имена классов предсказуемыми в dev
                localIdentName: isProd
                  ? '[hash:base64:8]'
                  : '[name]__[local]__[hash:base64:5]',

                // ❗ вот это важно:
                // мы хотим использовать ровно то имя, которое записали в .module.css
                // т.е. classes.mainBanner__title должно существовать
                exportLocalsConvention: 'asIs', // НЕ camelCase

                // мы импортируем как default:
                // import classes from "./Advertisement.module.css"
                // поэтому namedExport должен быть false
                namedExport: false,
              },
              esModule: true, // по умолчанию true в новых версиях, но явно оставим
            },
          },
        ],
      },

      //
      // Глобальные CSS (все .css кроме *.module.css)
      //
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              modules: false, // важно: это НЕ модули
            },
          },
        ],
      },

      //
      // Картинки/шрифты (на всякий случай, чтобы не упасть при import img)
      //
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][hash][ext]',
        },
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][hash][ext]',
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',      // -> css/index.css
      chunkFilename: 'css/[name].css', // чанки если появятся
    }),
  ],

  optimization: {
    // Нам не нужны отдельные runtime/chunk файлы,
    // ты хочешь один index.js и один index.css
    splitChunks: false,
    runtimeChunk: false,
  },
};
