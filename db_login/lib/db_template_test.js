let mysql = require('mysql');
//연결 설정
const connetion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: `${databaseName}` 
});
connetion.connect(); 
module.exports = connetion;