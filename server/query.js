const { Pool } = require('pg');
const DATABASE = require('./config').DATABASE;

// Пул для подключения к базе данных
const pool = new Pool(DATABASE);

/**
 * Функция выполняет полученный SQL запрос и возвращает результаты его работы.
 *
 * @param executableQuery SQL запрос к базе данных
 * @param args            Значения для запроса
 * @returns {Promise<T | never | void>}
 */
module.exports = function (executableQuery, ...args) {
  return pool.query(executableQuery, args)
    .then(res => res.rows);
};