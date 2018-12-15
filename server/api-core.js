/**
 * Ядро API
 * Загружает все методы бизнес логики из папки /api
 * Один js-файл = 1 метод бизнес логики
 * Название файла является названием метода бизнес логики
 */

const fs = require('fs')
const sql = require('./query')
const exists = async filename => new Promise(resolve => fs.exists(filename, resolve))
const MAX_ARGS_SERIALIZED_LENGTH = 10000

module.exports = async function(req, res) {
  // Убираем '/api/' из url запроса
  const query = decodeURIComponent(req.url).slice(5)
  const separatorIndex = query.indexOf('?')

  if (separatorIndex < 0) {
    return res.send({error: 'Не найден разделитель между названием метода и его аргументами'})
  }

  // Чтобы не вышли за пределы папки api
  const methodName = query.slice(0, separatorIndex)
  if (methodName.includes('.')) {
    return res.send({error: 'В названии метода не может содержаться точки'})
  }

  if (!await exists(`server/api/${methodName}.js`)) {
    return res.send({error: `Метод БЛ с названием '${methodName}' не найден`})
  }

  // Защита от DDoS'а бесполезными запросами, которые нужно парсить
  let args = query.slice(separatorIndex + 1, query.length)
  if (args.length > MAX_ARGS_SERIALIZED_LENGTH) {
    return res.send({error: 'В аргументе передано слишком много информации'})
  }

  // Парсим аргменты, пришедшие в формате JSON
  try {
    args = JSON.parse(args)
  } catch (err) {
    return res.send({error: 'Аргументы должны быть переданы в формате JSON'})
  }

  const config = {}
  try {
    config.result = await require(`./api/${methodName}.js`).apply({
      request: req,
      response: res,
      sql: sql,
      userRole: 'admin' // TODO: передавать роль текущего пользователя
    }, args)
  } catch(errMessage) {
    if (errMessage instanceof Error) {
      config.error = 'Внутренняя ошибка сервера'
      console.log(errMessage)
    } else {
      config.error = errMessage;
    }
  }

  res.send(config)
}
