import { Router } from 'express'

const router = Router()

import { fetchOneArticle, fetchAllArticles, createArticle, updateArticle} from '../controller/articlesController.js'



router.get('/api/v1/articles', fetchAllArticles);

router.get('/api/v1/articles/:id(\\d+)', fetchOneArticle);

router.post('/api/v1/articles', createArticle);

router.patch('/api/v1/articles/:id(\\d+)', updateArticle);


export { router }