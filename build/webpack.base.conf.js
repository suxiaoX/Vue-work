var path = require('path')
var glob = require('glob');
var utils = require('./utils')

var resolve = dir => path.join(__dirname, '..', dir)
var isProduction = process.env.NODE_ENV === 'production'
/**
 * { 'views/au': './src/views/au/au.js','views/usa': './src/views/usa/usa.js' }
 */
var entries = {};
glob.sync('./src/views/**/*.js').forEach(function (entry) {
  var basename = path.basename(entry, path.extname(entry)); //  au, usa
  var tmp = entry.split('/').splice(-3);  //  [ 'views', 'au', 'au.js' ]
  var pathname = tmp.splice(0, 1) + '/' + basename; // views/au
  entries[pathname] = entry;
});

var config = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' //  输出解析文件的目录，url 相对于 HTML 页面
      ? '/' //  /
      : '/' //  /
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
/**
 * { css:   [ { loader: '/Users/company/github/works/bmw-sem/node_modules/extract-text-webpack-plugin/loader.js',options: { omit: 1, remove: true }  },
                { loader: 'vue-style-loader' },{ loader: 'css-loader', options: { minimize: false, sourceMap: false }  ],
    postcss:[ { loader: 'loader.js',options: { omit: 1, remove: true } },{ loader: 'vue-style-loader' },{ loader: 'css-loader', options: [Object] } ],
    less:   [ { loader: 'loader.js',options: [Object] },{ loader: 'vue-style-loader' },{ loader: 'css-loader', options: [Object] },{ loader: 'less-loader', options: [Object] } ],
    sass:   [ { loader: 'loader.js',options: [Object] },{ loader: 'vue-style-loader' },{ loader: 'css-loader', options: [Object] },{ loader: 'sass-loader', options: [Object] } ],
    scss:   [ { loader: 'loader.js',options: [Object] },{ loader: 'vue-style-loader' },{ loader: 'css-loader', options: [Object] },{ loader: 'sass-loader', options: [Object] } ],
    stylus: [ { loader.js',options: [Object] },{ loader: 'vue-style-loader' },{ loader: 'css-loader', options: [Object] },{ loader: 'stylus-loader', options: [Object] } ],
    styl:   [ { loader: 'loader.js',options: [Object] },{ loader: 'vue-style-loader' },{ loader: 'css-loader', options: [Object] },{ loader: 'stylus-loader', options: [Object] } ] }
 */
          loaders: utils.cssLoaders({
            sourceMap: !!isProduction,
            extract: isProduction, // isProduction  将样式提取到单独的css文件中，而不是打包到js文件或使用style标签插入在head标签中
          })
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

module.exports = config;
