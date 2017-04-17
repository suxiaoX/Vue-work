var path = require('path');
var webpack = require('webpack')
var glob = require('glob');
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var WriteFilePlugin = require('write-file-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

var pages = {};
glob.sync('./src/views/**/*.html').forEach(function (entry) {
  var basename = path.basename(entry, path.extname(entry)); //  au, usa
  var tmp = entry.split('/').splice(-3);  //  [ 'views', 'au', 'au.js' ]
  var pathname = tmp.splice(0, 1) + '/' + basename; // views/au
  pages[pathname] = entry;
});

var devConfig = merge(baseWebpackConfig, {
  module: {
    /**
    [{ test: /\.css$/,      use: [ 'vue-style-loader', { minimize: false, sourceMap: false }  ] },
     { test: /\.postcss$/,  use: [ 'vue-style-loader', [Object] ] },
     { test: /\.less$/,     use: [ 'vue-style-loader', { loader: 'css-loader',options: { minimize: false, sourceMap: false } },{ loader: 'less-loader', options: { sourceMap: false }  ] },
     { test: /\.sass$/,     use: [ 'vue-style-loader', [Object], [Object] ] },
     { test: /\.scss$/,     use: [ 'vue-style-loader', [Object], [Object] ] },
     { test: /\.stylus$/,   use: [ 'vue-style-loader', [Object], [Object] ] },
     { test: /\.styl$/,     use: [ 'vue-style-loader', [Object], [Object] ] } ]
     */
    rules: utils.styleLoaders({ sourceMap: false })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"development"'
    }),
    // 使用 ProvidePlugin 加载使用率高的依赖库
    // new webpack.ProvidePlugin({
    //   $: 'webpack-zepto',
    // }),
    new webpack.HotModuleReplacementPlugin(), // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new WriteFilePlugin({ log: false }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ]
})

for (var pathname in pages) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname + '.html',   //  view/au.html
    template: pages[pathname],   // 模板路径  ./src/views/au/au.html
    inject: true              // js插入位置
  };
  if (pathname in devConfig.entry) {
    conf.chunks = ['vendor', pathname];
    conf.hash = true;
  }
  /**
   * HtmlWebpackPlugin {
      options:
       { template: './src/views/usa/usa.html', filename: 'views/usa.html',
         hash: true, inject: true, compile: true, favicon: false, minify: false,
         cache: true, showErrors: true, chunks: [ 'vendors', 'views/usa' ],
         excludeChunks: [], title: 'Webpack App',xhtml: false }
     }
   */
  devConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

module.exports = devConfig;
