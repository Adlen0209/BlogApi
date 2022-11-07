import { client } from '../services/database.js'

const TABLE_NAME = 'category';
const TABLE_ARTICLE = 'article'

async function findAll() {
    const result = await client.query(`SELECT * FROM "${TABLE_NAME}";`)
    return result.rows
}

async function findArticleByCategory(categorId) {
    const result = await client.query(`SELECT * FROM "${TABLE_ARTICLE}" WHERE "category_id" = $1;`, [categorId])
    return result.rows
}

export {findAll, findArticleByCategory}