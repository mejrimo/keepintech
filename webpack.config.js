const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const config = {
  entry: './src/assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name]-[hash][ext]',
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      meta: {
        'og:title': { property: 'og:title', content: 'Keep in Tech' },
        'og:description': {
          property: 'og:description',
          content:
            'News Site focusing on computer science and entrepreneurship. Created using API from Hacker News.',
        },
        'og:type': { property: 'og:type', content: 'website' },
        'og:url': {
          property: 'og:url',
          content: 'https://keep-in-tech.netlify.app/',
        },
        'og:image': {
          property: 'og:image',
          content: 'https://i.ibb.co/GCYQWPC/ImgMeta.png',
        },
        'og:image:alt': {
          property: 'og:image:alt',
          content: 'Keep in Tech Logo',
        },
        'twitter:card': {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        'twitter:title': { name: 'twitter:title', content: 'Keep in Tech' },
        'twitter:description': {
          name: 'twitter:description',
          content:
            'News Site focusing on computer science and entrepreneurship. Created using API from Hacker News.',
        },
        'twitter:image': {
          name: 'twitter:image',
          content: 'https://i.ibb.co/GCYQWPC/ImgMeta.png',
        },
        'twitter:image:alt': {
          name: 'twitter:image:alt',
          content: 'Keep in Tech Logo',
        },
      },
    }),

    // Add your plugins here
    new Dotenv({
      systemVars: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        // exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },

      // Add your rules for custom modules here
      {
        test: /\.(s[ac]ss)$/,
        use: [
          {
            loader: stylesHandler,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name]-[hash][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = 'development';
  }
  return config;
};
