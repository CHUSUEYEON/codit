-- Active: 1707101282439@@127.0.0.1@3306@codit
show DATABASES;
USE codit;

show tables;

CREATE TABLE file(
    id int PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL
);

DESC file;

SELECT * from file;