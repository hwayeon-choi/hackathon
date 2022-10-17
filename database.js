const mysql = require('mysql'); 

module.exports = function () {
    return {
      init: function () {
        return mysql.createConnection({
          host: 'localhost',
          port: '3306',
          user: 'root',
          password: 'pass',
          database: 'user_db'
        })
      },
      
      db_open: function (con) {
        con.connect(function (err) {
          if (err) {
            console.error('mysql connection error :' + err);
          } else {
            console.info('mysql is connected successfully.');
          }
        })
      }
    }
  };