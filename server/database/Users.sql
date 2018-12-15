CREATE TABLE roles
(
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE users
(
	id SERIAL PRIMARY KEY,
	login TEXT NOT NULL,
	hash TEXT NOT NULL,
	full_name TEXT NOT NULL,
	role_id INTEGER REFERENCES roles(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

INSERT INTO roles VALUES(1, 'cashier');
INSERT INTO roles VALUES(2, 'admin');

INSERT INTO roles(login, hash, full_name, role_id) VALUES('admin', '098f6bcd4621d373cade4e832627b4f6', 'Тестовый Администратор', 2);
