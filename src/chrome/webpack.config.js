const path = require('path');

const paths = {
  DIST: path.resolve(__dirname, '../../build/chrome'),
  JS: path.resolve(__dirname, '../app'),
  assets: path.resolve(__dirname, './assets'),
  manifest: path.resolve(__dirname, './manifest.json'),
  background: path.resolve(__dirname, './background.js'),
};

const CopyPlugin = require('copy-webpack-plugin');

const { EnvironmentPlugin } = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    'app': path.join(paths.JS, 'index.js'),
    'background': paths.background,
  },
  devServer: {
    writeToDisk: true,
  },
  plugins: [
    new EnvironmentPlugin(['RELOAD']),
    new CopyPlugin([
      { from: paths.assets, to: 'assets', force: true, cache: true },
      { from: paths.manifest, force: true },
    ]),
  ],
  output: {
    path: paths.DIST,
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        use: { loader: 'arraybuffer-loader' },
        type: 'javascript/auto',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}