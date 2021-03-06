CREATE TABLE sessions 
( 
  id SERIAL PRIMARY KEY,
  expired TIMESTAMP NOT NULL,
  user_id INTEGER REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  session_id TEXT NOT NULL
);
