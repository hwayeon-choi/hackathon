import mysql from 'mysql'; 
import dbconfig from '../config/database';

const connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query ('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.users_table + '` (\
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,\
  `user_id` VARCHAR(50) NOT NULL,\
  `user_password` VARCHAR(50) NOT NULL,\
  `user_name` VARCHAR(50) NOT NULL,\
  `user_email` VARCHAR(50) NOT NULL,\
  PRIMARY KEY(`id`)\
  )');

console.log('Success : Database Created!');

// connection.end();