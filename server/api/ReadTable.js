/**
 * Читает таблицу согласно назначенным правам
 * Если не передать id, вычитывает всю таблицу
 */
const checkTableRights = require('../libs/checkTableRights')

module.exports = async function(tableName, id) {
  checkTableRights(tableName, this.userRole, 'read')

  let query = `
    SELECT *
    FROM ${tableName}
  `;

  if (!id) {
    query += 'WHERE id = $1'
  }

  return await this.sql(query, id)
}
