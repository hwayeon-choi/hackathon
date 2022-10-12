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

//필요기능 : 테이블 전체를 조회해 
function findStr2(tableName){
  connection.query(`SELECT * FROM ${tableName}`, function(err, results){
    if(err) {
      console.log(err);
    } else {
      // console.log(results);
      // console.log(typeof(results)); //obj
      const objToStr = JSON.stringify(results);
      // console.log(objToStr);
      let str = objToStr.match('동물병원');
      console.log(str);
    }
  });
}
// findStr2('place_detail');



