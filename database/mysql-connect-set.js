//mysql 모듈 불러오기
const mysql = require('mysql');

//데이터베이스 설정
let databaseName = 'place_category';

//연결 설정
const connetion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: `${databaseName}` 
});
connetion.connect();

module.exports = connetion;