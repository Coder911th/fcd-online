const RIGHTS = require('../config').RIGHTS

/**
 * Проверяет имеет ли роль (role) прямой доступ к таблице (tableName) на
 * чтение/запись (operation)
 * Выбрасывает ошибку, если нет прав
 */
module.exports = function(tableName, role, operation) {
  const tableRights = RIGHTS[tableName]
  if (!tableRights) {
    throw 'У вас недостаточно прав'
  }

  const availableRoles = tableRights[operation]
  if (!availableRoles) {
    throw 'Для указанной таблицы права на запрашиваемую операцию не назначены'
  }

  if (!availableRoles.includes(role)) {
    throw 'У вас недостаточно прав'
  }
}