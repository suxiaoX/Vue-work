/**
 * Created by noodles on 2016/12/29.
 * description account
 */

import { Router } from 'express';

const router = new Router();

router.post('/login', async (req, res, next) => {
  res.json('login');
});

router.get('/register', async (req, res, next) => {
  res.json('register');
});

export default router;
