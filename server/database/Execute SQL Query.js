const query = require('../query');

(async function() {
  console.log((await query(`
  CREATE TABLE products
(
	id SERIAL PRIMARY KEY,
	barcode TEXT NOT NULL,
	name TEXT NOT NULL,
	price REAL NOT NULL,
	discount REAL NOT NULL,
	amount_type_id INTEGER REFERENCES amount_types(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
  `)))
})();
