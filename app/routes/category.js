import { Router} from 'express'

const router = Router()

import { fetchAllCtegories, fetchArticleByCategorieId } from '../controller/categoryController.js'

router.get('/api/v1/categories', fetchAllCtegories)
router.get('/api/v1/posts/category/:id(\\d+)', fetchArticleByCategorieId)

export { router}