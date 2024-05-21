CREATE DATABASE web_test;

CREATE TABLE note(
    noteID SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    dataTime DATE
);

CREATE TABLE test(
    noteID SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);


INSERT INTO test (title) VALUES ('New Title 00') RETURNING *;
INSERT INTO test (title) VALUES ('New Title 01') RETURNING *;
SELECT * FROM test;
SELECT * FROM test WHERE noteid = 1;
DELETE FROM test WHERE noteid = 2 RETURNING *;
UPDATE test SET title = 'Update title 01' WHERE noteid = 1 RETURNING *;
