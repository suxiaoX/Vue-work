require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_partials__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_partials___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express_partials__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_errorhandler__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_errorhandler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_errorhandler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_csurf__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_csurf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_csurf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_helmet__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_compression__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_redis__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_redis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_connect_redis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_connect_busboy__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_connect_busboy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_connect_busboy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bytes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bytes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_bytes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_serve_favicon__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_connect_flash__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_cors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_cors__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by noodles on 2017/4/7.
 * description
 */
/* no-unused-vars: 0 */
















const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();
const RedisStore = __WEBPACK_IMPORTED_MODULE_9_connect_redis___default()(__WEBPACK_IMPORTED_MODULE_3_express_session___default.a);
const systemConfig = {
  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 0
  }
};

app.use(__WEBPACK_IMPORTED_MODULE_7_compression___default()());

app.set('views', __WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'server/views'));
app.engine('.html', __webpack_require__(11).__express);

app.set('view engine', 'html');
app.enable('trust proxy');

app.use('/static', __WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'static'), { maxAge: 3600000 * 24 * 365 }));
// app.use(favicon(path.join(__dirname, 'static/images', 'hot-major.png'), { maxAge: 2592000000 }));

app.use(__webpack_require__(19)());

app.use(__WEBPACK_IMPORTED_MODULE_2_express_partials___default()());
app.use(__WEBPACK_IMPORTED_MODULE_6_helmet___default.a.frameguard('sameorigin')); //  make sure before router---Only let me be framed by people of the same origin:
app.use(__WEBPACK_IMPORTED_MODULE_8_body_parser___default.a.json({ limit: '1mb' }));
app.use(__WEBPACK_IMPORTED_MODULE_8_body_parser___default.a.urlencoded({ extended: true, limit: '1mb' }));
app.use(__webpack_require__(17)());
app.use(__webpack_require__(8)(''));

app.use(__WEBPACK_IMPORTED_MODULE_3_express_session___default()({
  secret: '',
  cookie: {
    domain: '.liuxue.com',
    path: '/'
  },
  store: new RedisStore({
    port: systemConfig.redis.port,
    host: systemConfig.redis.host
  }),
  resave: true,
  saveUninitialized: true
}));
app.use(__WEBPACK_IMPORTED_MODULE_13_connect_flash___default()());

/**
 * csurf token
 */
app.use((req, res, next) => {
  res.locals.csrf = req.csrfToken ? req.csrfToken() : '';
  next();
});

/**
 * files upload limits
 */
app.use(__WEBPACK_IMPORTED_MODULE_10_connect_busboy___default()({
  limits: {
    fileSize: __WEBPACK_IMPORTED_MODULE_11_bytes___default()('20MB') }
}));

/**
 * -------------------for cors  X-Frame-Options: Allow-From http://www.growingio.com---------------------
 */
app.all('*', (req, res, next) => {
  res.header('X-Frame-Options', 'ALLOW-FROM http://www.growingio.com');
  next();
});
app.use(__WEBPACK_IMPORTED_MODULE_14_cors___default()());
//  -----------------------growingio header and cors settings end-----------------------------


app.get('/m/au', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    res.sendFile(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, './views/au.html'));
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

// catch 404 and forward to error handler
app.use((req, res) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.send(err);
});

if (systemConfig.debug) {
  app.use(__WEBPACK_IMPORTED_MODULE_4_errorhandler___default()());
}

app.use((err, req, res) => {
  console.log(`server 500 error: url:  + ${req.url}`);
  console.log('............////////////////...................////////////////////...........');
  return res.status(500).send('500 status');
});

app.listen(3001, () => {
  console.log(`The server is running at http://localhost:${3001}/`);
});

process.on('exit', code => {
  console.log('About to exit with code:', code);
});

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("bytes");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("connect-busboy");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("connect-redis");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express-partials");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("response-time");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map