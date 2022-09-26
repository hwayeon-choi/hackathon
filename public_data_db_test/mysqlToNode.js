//mysql 모듈 불러오기
let mysql = require('mysql');

// console.log(mysql);

//연결 설정
let connetion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: 'gyonggi_db' 
});

connetion.connect(); //디버깅: _connectCalled: true

//테이블에서 전체 데이터 가져오기
// connetion.query('SELECT * FROM gyeonggi2', function(error, results){
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(results);
//   }
// });


//전체 데이터에서 특정 데이터만 콘솔로 출력하기 
connetion.query('SELECT * FROM gyeonggi2', function(error, results){
  if(error) {
    console.log(error);
  } else {
    console.log(results[1].adress); //2번째 필드의 adress출력
    console.log(results[2]); //3번째 필드 객체꾸러미 출력
  }
});


//테이블에서 특정 데이터 가져오기 
// connetion.query('SELECT user_id, password FROM gyeonggi2', function(error, results){
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(results);
//   }
// });


//fields 객체
//각 필드에 대한 정보를 객체로 포함하는 배열
// connetion.query('SELECT * FROM gyeonggi2', function(err, results, fields) {
//   if(err) throw err;
//   //return the fields object:
//   console.log(fields);

//   console.log(fields[1].name); //두 번째 필드의 이름 반환 : region
//   console.log(fields[3].length); //네 번째 필드의 길이 반환 : 300
// });



connetion.end();