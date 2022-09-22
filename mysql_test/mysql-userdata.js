let mysql = require('mysql'); //mysql 모듈 가져오기

console.log(mysql); //조회됨


let connetion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: 'userdata2' 
});

console.log(connetion); //조회됨

