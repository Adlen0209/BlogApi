import { Article} from '../models/articles.js'

async function fetchAllArticles(req, res) {
    try {
        const articles = await Article.findAllArticles()

        if(articles) res.status(200).json(articles)
        else throw new Error('no articles found')
    } catch(err) {
        res.status(500).json({'error 500': err.message})
    }
}

async function fetchOneArticle(req, res) {
    try {
        const articleId = +req.params.id
        const article = await Article.findOneArticle(articleId)

        if(article) res.status(200).json(article)
        else throw new Error('no article found')
    } catch(err) {
        res.status(500).json({ 'Error 500': err.message})
    }
}

export {fetchAllArticles, fetchOneArticle}