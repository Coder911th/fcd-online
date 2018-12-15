const method = require('../api/ReadTable')
const sql = require('../query')

method.call({
  userRole: 'admin',
  sql: sql
}, 'products').then(console.log, console.log)
