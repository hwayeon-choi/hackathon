let mysql = require('mysql'); //mysql 모듈 가져오기

// console.log(mysql); //조회됨


let connetion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: 'userdata' 
});

// console.log(connetion); //조회됨

connetion.connect(); //디버깅: _connectCalled: true

//테이블에서 전체 데이터 가져오기
connetion.query('SELECT * FROM userInfo', function(error, results){
  if(error) {
    console.log(error);
  } else {
    console.log(results);
  }
});


//테이블에서 특정 데이터 가져오기 
connetion.query('SELECT user_id, password FROM userInfo', function(error, results){
  if(error) {
    console.log(error);
  } else {
    console.log(results);
  }
});

//fields 객체

connetion.end();
//객체 확인
