/**
 * Удаляет запись из таблицы согласно назначенным правам
 */
const checkTableRights = require('../libs/checkTableRights')

module.exports = async function(tableName, id) {
  checkTableRights(tableName, this.userRole, 'write')

  if (typeof id != 'number') {
    throw 'Передайте идентификатор удаляемой записи'
  }

  await this.sql(`
    DELETE FROM ${tableName}
    WHERE id = $1;
  `, id);
  return true
}
