import { createData, findAll, findOne, updateData } from "../dataMapper/articlesDataMapper.js";

class Article {
    static async findAllArticles() {
        return findAll()
    }

    static async findOneArticle(articleId) {
        return findOne(articleId)

    }

    static async createArticle(articleData) {
        return createData(articleData)
    }

    static async updateArticle(articleId, articleData) {
        return updateData(articleId, articleData)
    }
}

export { Article }