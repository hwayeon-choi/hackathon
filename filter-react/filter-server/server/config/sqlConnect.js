const mysql = require('mysql');

/* sql connect */
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fullstack305',
    // port: '3305',
    database: 'place_category' 
  });

module.exports = db;