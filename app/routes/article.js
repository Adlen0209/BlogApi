import { Router } from 'express'

const router = Router()

import { fetchOneArticle, fetchAllArticles, createArticle} from '../controller/articlesController.js'



router.get('/api/v1/articles', fetchAllArticles);

router.get('/api/v1/articles/:id(\\d+)', fetchOneArticle);

router.post('/api/v1/articles', createArticle);


export { router }