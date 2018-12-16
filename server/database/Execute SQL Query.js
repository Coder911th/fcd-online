const query = require('../query');

(async function() {
  console.log((await query(`
		select now()
  `)))
})();
