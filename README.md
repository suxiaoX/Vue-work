# bmw-sem

> mobile sem vue
> Node > 6.x

## Build Setup
### dev
* `npm install`
  - install dependencies
* `npm run dev`
  - 后启动后台服务，dev做api中转，prod做服务器
  
### prod
* `npm run build -- --release`
  - build for production with minification
* `npm run build --report`
  - build for production and view the bundle analyzer report
* `npm run e2e`
  - run unit tests
* `npm test`
  - run all tests

## 组件书写规范和注意点
### 组件内部使用图片时
* 父容器参数传递，**不能使用绝对/相对地址**，应当使用 `**require('xx')**`;
* xx 图片会根据大写自动使用`data:image`, 超过限制请使用 拼接cdn前缀

## framework7 使用说明
### 引用样式说明
* 默认入口文件使用ios样式
```javascript
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css';
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css';  可选
```
* 使用material样式
```javascript
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css';
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css';  可选
```
* 按需引用说明

### 组件内部使用 例如ajax，dom操作
* [内置访问说明](http://framework7.io/vue/init-app.html#initialized-instances)
* 使用 `this.$$|this.Dom7|window.Dom7` 获取内置的DOM类库
* `this.$$.get()` 等就可以使用内部的方法了 具体方法参考[dom说明](http://framework7.io/docs/dom.html)

```javascript
this.$$.get('http://crpapi.shunshunliuxue.com:9000/offers/list/', data => {
  console.log(data);
});
```

## vue-resource 使用说明
### 由内f7内置了ajax方式，此库只做习惯promise方式处理的同学
* 使用 `this.$http` 可以获取内部api, 具体参考[vue-resource文档](https://github.com/pagekit/vue-resource)

```javascript
const data = await this.$http.get/post('http://crpapi.shunshunliuxue.com:9000/offers/list/', {});
console.log(data.body);
```
  
## 文件说明
### `src`
* 项目主干
#### `assets`
* 资源文件目录，图片，字体，样式
* `images` 使用说明
  - 组件内部使用的图片请内置到 `components` 对应 组件子目录下
  - 组件内部公共图片请内置到 `components` 目录下
  - 个页面所属图片 请内置于 `images` 对应 子目录下

#### `components`
* 组件目录

### `build`
* 编译相关代码

### `config`
* 相关编译配置选项

### `static`
* 该文件夹将会在 生产build时复制到 `dist/static` 目录下
