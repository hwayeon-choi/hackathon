//mysql 모듈 불러오기
import mysql from 'mysql';

//데이터베이스 설정
let databaseName = 'place_category';

//연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: `${databaseName}` 
});
connection.connect();

export default connection;


