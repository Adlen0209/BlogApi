import { client } from '../services/database.js'

const TABLE_NAME = 'article'


async function findAll() {
    const result = await client.query(`SELECT * FROM "${TABLE_NAME}";`)
    return result.rows
}

async function findOne(articleId) {
    const result = await client.query(
        `SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`,
        [articleId]
    )
    return result.rows[0]
}

// A FAIRE :  add CREATE UPTADE DELETE methods

export { findAll, findOne}