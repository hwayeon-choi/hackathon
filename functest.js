import mysql from 'mysql'; 
let databaseName = 'place_category';

//mysql연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: `${databaseName}` 
});
connection.connect(); 

//필요한 기능1. 컬럼명을 문자열로 추출
function findStr(tableName, strName){
  connection.query(`SELECT place_type FROM ${tableName} WHERE place_type LIKE '%${strName}%'`, function(error, results){
    if(error) {
      console.log(error);
    } else {
      console.log(results);
    }
  });
}
console.log(findStr('place_detail', '동물병원'));
//해결해야할 것 : 1개만 출력되게..