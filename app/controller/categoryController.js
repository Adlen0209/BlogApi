import { Category } from "../models/category.js";


// fetch all

async function fetchAllCtegories(_req, res) {
    try {
        const categories = await Category.findAllCategories()

        if(categories) res.status(200).json(categories)
        else throw new Error('no categories found')
        } catch (err) {
            res.status(500).json({'error 500' : err.message })
        }
}

async function fetchArticleByCategorieId(req, res) {
    try {
        const categorId = +req.params.id
        console.log(categorId)

        const articles = await Category.findArticleByCategory(categorId)
        if (articles) res.status(200).json(articles)
        else throw new Error('no article found')
    } catch (err) {
        res.status(500).json({ 'Error 500 ': err.message})
    }
}



export { fetchAllCtegories , fetchArticleByCategorieId}