let mysql = require('mysql'); //mysql 모듈 가져오기

// console.log(mysql); //조회됨


let connetion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: 'opentutorials' 
});

connetion.connect(); //디버깅: _connectCalled: true

connetion.query('SELECT * FROM topic', function(error, results){
  if(error) {
    console.log(error);
  } else {
    console.log(results);
  }
});

connetion.end();