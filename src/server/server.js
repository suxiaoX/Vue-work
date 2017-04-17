/**
 * Created by noodles on 2017/4/7.
 * description
 */
/* no-unused-vars: 0 */
import path from 'path';
import express from 'express';
import partials from 'express-partials';
import session from 'express-session';
import errorhandler from 'errorhandler';
import csurf from 'csurf';
import helmet from 'helmet';
import compress from 'compression';
import bodyParser from 'body-parser';
import connectRedis from 'connect-redis';
import busboy from 'connect-busboy';
import bytes from 'bytes';
import favicon from 'serve-favicon';
import connectFlash from 'connect-flash';
import cors from 'cors';

const app = express();
const RedisStore = connectRedis(session);
const systemConfig = {
  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
  },
};

app.use(compress());

app.set('views', path.join(__dirname, 'server/views'));
app.engine('.html', require('ejs').__express);

app.set('view engine', 'html');
app.enable('trust proxy');

app.use('/static', express.static(path.join(__dirname, 'static'), { maxAge: 3600000 * 24 * 365 }));
// app.use(favicon(path.join(__dirname, 'static/images', 'hot-major.png'), { maxAge: 2592000000 }));

app.use(require('response-time')());

app.use(partials());
app.use(helmet.frameguard('sameorigin')); //  make sure before router---Only let me be framed by people of the same origin:
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(require('method-override')());
app.use(require('cookie-parser')(''));

app.use(session({
  secret: '',
  cookie: {
    domain: '.liuxue.com',
    path: '/',
  },
  store: new RedisStore({
    port: systemConfig.redis.port,
    host: systemConfig.redis.host,
  }),
  resave: true,
  saveUninitialized: true,
}));
app.use(connectFlash());

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
app.use(busboy({
  limits: {
    fileSize: bytes('20MB'),  //  1M
  },
}));

/**
 * -------------------for cors  X-Frame-Options: Allow-From http://www.growingio.com---------------------
 */
app.all('*', (req, res, next) => {
  res.header('X-Frame-Options', 'ALLOW-FROM http://www.growingio.com');
  next();
});
app.use(cors());
//  -----------------------growingio header and cors settings end-----------------------------


app.get('/m/au', async (req, res) => {
  res.sendFile(path.join(__dirname, './views/au.html'));
});

// catch 404 and forward to error handler
app.use((req, res) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.send(err);
});

if (systemConfig.debug) {
  app.use(errorhandler());
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

export default app;
