show DATABASES;
USE codit;

show tables;

CREATE TABLE file(
    id int PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL
);

DESC file;

SELECT * from file;