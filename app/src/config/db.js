const mysql = require("mysql");

const db =  mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'pass',
  database: 'user_db'
});

db.connect();

module.exports = db;