// Impor Router

import { Router} from 'express';

const router = Router();

// ROUTER MAIN
router.get('/api/v1', (_req, res) => {
    res.json('Welcome ')
  })

  // IMPORT CATEGORY ROUTER
import { router as categoryRouter } from './category.js'
router.use('/', categoryRouter)

import { router as articlesRouter } from './article.js'
router.use('/', articlesRouter)

import { router as userRouter } from './user.js';
router.use('/', userRouter)

export { router };