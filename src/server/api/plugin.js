/**
 * Created by noodles on 2016/12/16.
 * description
 */

import { Router } from 'express';

const router = new Router();

router.get('/browser', async (req, res, next) => {
  res.send('b');
});

router.get('/browser.error.js', async (req, res, next) => {
});

router.post('/browser/error', async (req, res, next) => {

});

export default router;
