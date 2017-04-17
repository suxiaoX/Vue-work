/**
 * Created by noodles on 2017/4/7.
 * description
 */
var path = require('path');
var webpack = require('webpack');
var WriteFilePlugin = require('write-file-webpack-plugin');

var isDebug = !process.argv.includes('--release');

module.exports = {
  entry: { server: ['babel-polyfill', './src/server/server.js'] },
  output: {
    pathinfo: false,
    path: path.join(__dirname, '../dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, '../src/server')],
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            ['env',
              {
                targets: { node: 6.5 },
                modules: false,
                useBuiltIns: false,
                debug: false
              }],
            'stage-0'
          ]
        }
      },
      {
        test: /\.md$/,
        loader: '/Users/company/github/msds-sempc/tools/lib/markdown-loader.js'
      },
      { test: /\.txt$/, loader: 'raw-loader' },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        options: { name: '[path][name].[ext]?[hash:8]' }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url-loader',
        options: { name: '[path][name].[ext]?[hash:8]', limit: 10000 }
      }
    ]
  },
  bail: false,
  cache: true,
  stats: {
    colors: true,
    reasons: true,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false
  },
  name: 'server',
  target: 'node',
  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
  externals: [
    /^\.\/assets\.json$/,
    (context, request, callback) => {
      const isExternal = request.match(/^[@a-z][a-z/.\-0-9]*$/i) && !request.match(/\.(css|less|scss|sss)$/i);
      callback(null, Boolean(isExternal));
    },
  ],
  plugins: [
    new WriteFilePlugin({ log: false }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': false,
      __DEV__: isDebug,
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  devtool: 'cheap-module-source-map'
}
