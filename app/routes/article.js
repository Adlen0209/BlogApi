import { Router } from 'express'

const router = Router()

import { fetchOneArticle, fetchAllArticles, createArticle, updateArticle, deleteArticle} from '../controller/articlesController.js'
import { authorization } from '../middlewares/authMiddleware.js';



router.get('/api/v1/articles',authorization, fetchAllArticles);

router.get('/api/v1/articles/:id(\\d+)', fetchOneArticle);

router.post('/api/v1/articles',authorization, createArticle);

router.patch('/api/v1/articles/:id(\\d+)',authorization, updateArticle);

router.delete('/api/v1/articles/:id(\\d+)', authorization, deleteArticle)


export { router }