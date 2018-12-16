const method = require('../api/ReadTable')
const sql = require('../query')

method.call({
  userRole: 'admin',
  sql: sql
}, 'users').then(console.log, console.log)
