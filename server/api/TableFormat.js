/**
 * Возвращает названия столбцов таблицы
 */
const checkTableRights = require('../libs/checkTableRights')

module.exports = async function(tableName) {
  // checkTableRights(tableName, this.userRole, 'read')

  return (await this.sql(`
    SELECT column_name FROM information_schema.columns
    WHERE information_schema.columns.table_name=$1
  `, tableName)).map(col => col.column_name)
}