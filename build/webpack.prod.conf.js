var path = require('path')
var glob = require('glob')
var webpack = require('webpack')
var merge = require('webpack-merge')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var WriteFilePlugin = require('write-file-webpack-plugin');
var ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
var utils = require('./utils')
var config = require('../config')
var baseWebpackConfig = require('./webpack.base.conf')

var pages = {};
glob.sync('./src/views/**/*.html').forEach(function (entry) {
  var basename = path.basename(entry, path.extname(entry)); //  au, usa
  var tmp = entry.split('/').splice(-3);  //  [ 'views', 'au', 'au.js' ]
  var pathname = tmp.splice(0, 1) + '/' + basename; // views/au
  pages[pathname] = entry;
});

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: true
    })
  },
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: path.posix.join('static', 'js/[name].[chunkhash].js'),
    chunkFilename: path.posix.join('static', 'js/[id].[chunkhash].js')
  },
  plugins: [
    new WriteFilePlugin({ log: false }),
    new webpack.DefinePlugin({
      'process.env': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: path.posix.join('static', 'css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
    //  https://github.com/Klathmon/imagemin-webpack-plugin
    new ImageminWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '95-100'
      }
    })
  ]
})

for (var pathname in pages) {
  var conf = {
    filename: pathname + '.html',
    template: pages[pathname],
    inject: true,
    // minify: {
    //   removeComments: true,
    //   collapseWhitespace: true,
    //   removeAttributeQuotes: true
    // },
    // chunksSortMode: 'dependency'
  };
  if (pathname in webpackConfig.entry) {
    conf.chunks = ['vendor', pathname];
    conf.hash = true;
  }
  webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
