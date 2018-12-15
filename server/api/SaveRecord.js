/**
 * Создаёт и обновляет записи в таблицах согласно назначенным правам
 */
const checkTableRights = require('../libs/checkTableRights')
const getTableFormat = require('../libs/getTableFormat')

module.exports = async function(tableName, item) {
  checkTableRights(tableName, this.userRole, 'write')

  if (item instanceof Object == false) {
    throw 'Не передана обновляемая запись!'
  }

  const format = await getTableFormat(tableName)
  let columns = []
  let values = []
  let keyValues = []

  let nextIndex = 2;
  for (let col of format) {
    let value = item[col]
    if (value === undefined) {
      throw `В формате записи не хватает поля "${col}"`
    }
    if (col != 'id') {
      columns.push(col)
      values.push(value)
      keyValues.push(`"${col}" = $${nextIndex}`)
      nextIndex++;
    }
  }

  if (item.id === null) {
    // Вставляем новую запись
    await this.sql(`
      INSERT INTO ${tableName}(${columns.join(',')})
      VALUES(${values.map((_, index) => `$${index + 1}`).join(',')})
    `, ...values)
  } else if (typeof item.id == 'number') {
    await this.sql(`
      UPDATE ${tableName}
      SET ${keyValues.join(',')}
      WHERE "id" = $1
    `, item.id, ...values)
  } else {
    throw 'Передайте идентфикатор записи в виде числа'
  }

  return true
}