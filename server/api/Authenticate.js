// Запрос регистрации пользователя

const md5 = require('md5')
const query = require('../query')

module.exports = function(login, password) {
  console.log(`Попытка аутентификации ${login}/${password}. Сгенерирован хеш: ${md5(password)}`);
  return true;
};
