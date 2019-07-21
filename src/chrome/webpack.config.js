const path = require('path');

const paths = {
  DIST: path.resolve(__dirname, '../../build/chrome'),
  JS: path.resolve(__dirname, '../app'),
  assets: path.resolve(__dirname, './assets'),
  manifest: path.resolve(__dirname, './manifest.json'),
  background: path.resolve(__dirname, './background.js'),
};

const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: "production",
  entry: {  
    'app': path.join(paths.JS, 'index.jsx'),
    'background': paths.background,
  },
  devServer: {
    writeToDisk: true,
  },
  resolve: {
    extensions: ['.wasm', '.jsx', '.js', '.json'],
  },
  plugins: [
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
        test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader?name=[name].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}

module.exports = config;