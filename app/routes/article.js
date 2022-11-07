import { Router } from 'express'

const router = Router()

import { fetchOneArticle, fetchAllArticles} from '../controller/articlesController.js'



router.get('/api/v1/articles', fetchAllArticles)

router.get('/api/v1/articles/:id(\\d+)', fetchOneArticle)



export { router }