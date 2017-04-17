/**
 * Created by noodles on 2016/12/16.
 * description
 */

import { Router } from 'express';

const router = new Router();

router.use('/plugin', require('./plugin').default);
router.use('/log', require('./log').default);
router.use('/account', require('./account').default);

export default router;
