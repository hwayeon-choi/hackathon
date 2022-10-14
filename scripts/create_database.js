import mysql from 'mysql'; 
import dbconfig from '../config/database.js';

const connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query ('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.users_table + '` (\
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,\
  `userId` VARCHAR(50) NOT NULL,\
  `password` VARCHAR(50) NOT NULL,\
  PRIMARY KEY(`id`)\
  )');

console.log('Success : Database Created!');

connection.end();