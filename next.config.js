const withSass = require('@zeit/next-sass');
const withManifest = require('next-manifest');
const withCSS = require('@zeit/next-css');


require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = withManifest(withSass(withCSS({
  // target: 'serverless',
  webpack(config, options) {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    return config;
  },

  manifest: {
    icons: {
      src: './src/assets/icons/icon.png',
      cache: true,
    },
  },
})));
