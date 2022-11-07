import { findAll, findArticleByCategory } from "../dataMapper/categoryDataMapper.js";


class Category {
    static async findAllCategories() {
        return findAll();
    }

    static async findArticleByCategory(categorId) {
        return findArticleByCategory(categorId)
    }
}

export { Category };