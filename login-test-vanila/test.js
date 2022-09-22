let mysql = require('mysql'); //mysql 모듈 가져오기

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: 'userdata2'
});

console.log(db);

db.connect();

db.query('SELECT * FROM topic', function(err, result){
  if(err){
    console.log(error);
  }
  console.log(result);
});

db.end();