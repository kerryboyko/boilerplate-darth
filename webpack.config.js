const path = require('path')

const jsSourcePath = path.resolve(__dirname, './src/js');
const buildPath = path.join(__dirname, './build');
const imgPath = path.join(__dirname, './src/assets/img');
const sourcePath = path.join(__dirname, './src');
const nodePath = path.resolve(__dirname, 'node_modules');

let nodeExternals = require('webpack-node-externals');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const devtool = isProduction ? 'eval' : 'source-map';

const context = jsSourcePath;

const entry = require('./webpack/entry');
const output = require('./webpack/output')({buildPath});
const resolve = require('./webpack/resolve')({nodePath, jsSourcePath})
const plugins = require('./webpack/plugins')({isProduction, sourcePath, buildPath})
const devServer = require('./webpack/devServer')({isProduction});
const rules = require('./webpack/rules')({sourcePath, jsSourcePath, nodePath, isProduction});

module.exports = {
  devtool,
  context,
  entry,
  output,
  resolve,
  plugins,
  devServer,
  module: {
    rules
  }
}
