CREATE TABLE runway (
	id SERIAL PRIMARY KEY,
	designation VARCHAR (50) NOT NULL,
	width INTEGER,
	length INTEGER
);

CREATE TABLE aerodrome (
	id SERIAL PRIMARY KEY,
	name varchar (50) NOT NULL,
	city varchar (50) NOT NULL,
	description varchar (255) NOT NULL,
	created_at DATE NOT NULL,
	runway_id INT NOT NULL REFERENCES runway(id)
);

