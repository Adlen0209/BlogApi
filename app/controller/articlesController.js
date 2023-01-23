import { request, response } from 'express'
import { Article } from '../models/articles.js'

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

async function createArticle(req, res) {
    try {
    console.log(req.body);
    await Article.createArticle(req.body);
    return res.status(200).json("post has been successfully created");
    } catch (err) {
        console.log(err);
        res.status(500).json('erreur 500:' + err.message);
    }
}

async function updateArticle(req, res) {
    try {
        const articleId = +req.params.id;
        let articleInfo = await Article.findOneArticle(articleId);
       
        //userId a géré apres connxion
        // if (!(articleInfo.user_id === +req.userId)) {
        //     return res.status(403).json('Unautorized action');
        // }
        for (const key in articleInfo) {
            req.body[key] ? req.body[key] : (req.body[key] = articleInfo[key]);
        }

        await Article.updateArticle(articleId, req.body);
        return res.status(200).json('your post has been successfully edited');

    } catch (err) {
        console.log(err);
        res.status(500).json('erreur 500' + err.message)
    }
}

async function deleteArticle(req, res) {
    
        
        //userId a géré apres connxion
        // if (!(articleInfo.user_id === +req.userId)) {
        //     return res.status(403).json('Unautorized action');
        // }
    try {
        const articleId = +req.params.id;
        await Article.deleteArticle(articleId);
        return res.status(200).json('your post has successfully been deleted');
    } catch (err) {
        console.log(err);
        res.status(500).json('erreur 500 delete article ' + err.message);
    }
}

export {fetchAllArticles, fetchOneArticle, createArticle, updateArticle, deleteArticle}