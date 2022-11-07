import { findAll, findOne } from "../dataMapper/articlesDataMapper.js";

class Article {
    static async findAllArticles() {
        return findAll()
    }

    static async findOneArticle(articleId) {
        return findOne(articleId)

    }
}

export { Article}