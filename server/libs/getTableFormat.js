/**
 * Возвращает названия столбцов таблицы
 */
const sql = require('../query')

module.exports = async function(tableName) {
  return (await sql(`
    SELECT column_name FROM information_schema.columns
    WHERE information_schema.columns.table_name=$1
  `, tableName)).map(col => col.column_name)
}