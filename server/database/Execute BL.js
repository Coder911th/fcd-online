const method = require('../api/TableFormat')
const sql = require('../query')

method.call({
  userRole: 'admin',
  sql: sql
}, 'sessions').then(console.log, console.log)
