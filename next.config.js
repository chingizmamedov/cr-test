const path = require('path');
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const withImages = require('next-images')

require('dotenv').config();

const Dotenv = require('dotenv-webpack');

module.exports = withImages()
module.exports = withPlugins([withCSS, withSass], {
  webpack: (config, { dev }) => {
    config.resolve.alias['~'] = path.join(__dirname, 'src');

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf)$/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        outputPath: 'static/',
        publicPath: '/_next/static/'
      }
    });

    config.module.rules.push({
      test: /\.(sass|scss$)/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./src/static/styles/base/mixins.scss', './src/static/styles/base/vars.scss']
          },
        }
      ]
    });

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-sprite-loader'
    });

    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: dev
        }
      });

      // Use stylelint
      config.plugins.push(new StyleLintPlugin({
        emitErrors: false,
        syntax: 'scss'
      }));
    }
    
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    );
    
    return config;
  }
});
