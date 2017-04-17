/**
 * Created by noodles on 2016/12/16.
 */

import { Router } from 'express';

const router = new Router();

router.get('/', async (req, res, next) => {
  const page = req.query.page;
  const limit = req.query.limit || 10;
  const offset = (page - 1) * 10;
  const order = `${req.query.order || 'time'} DESC`;
  const logs = await Log.findAndCountAll({
    limit,
    offset,
    order,
  });
  res.json(logs);
});

router.get('/:id', async (req, res, next) => {
  const logId = req.params.id;
  const log = await Log.findById(logId);  // 别名 findByPrimary
  res.json(log);
});

export default router;
