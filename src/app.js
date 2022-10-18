// nodemon watch `파일명` 
// mysql -uroot -p
import http from 'http';
import fs from 'fs';
import mysql from 'mysql'
import url from 'url'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12341234',
  database: 'favorite',
  multipleStatements: true
})

http.createServer(function (req, res) {
  const data = fs.readFileSync('./index.html');
  let _url = req.url;
  let pathname = url.parse(_url, true).pathname;
  if(pathname === '/'){
    res.writeHead(200, {"content-type": "text/html; charset=utf-8"});
    res.write(data);
  /* 1 */  
  } else if(pathname === '/like1'){ // 찜하기
    let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=1;`
    let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(1, 1);`
    connection.query(sql1+sql2, function(err, rows, fields){
        if(err) console.log(err);
        console.log(rows);
    });
  } else if(pathname === '/dislike1'){ // 찜 취소
    let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=1;`
    let sql2 = `DELETE FROM favorite WHERE userid = 1 or placeid = 1 limit 1`
    connection.query(sql1+sql2, function(err, rows, fields){
        if(err) console.log(err);
        console.log(rows);
    });
  /* 2 */
  } else if(pathname === '/like2'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=2;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(2, 2);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike2'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=2;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 3 */
}  else if(pathname === '/like3'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=3;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(3, 3);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike3'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=3;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 4 */
} else if(pathname === '/like4'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=4;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(4, 4);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike4'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=4;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 5 */
} else if(pathname === '/like5'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=5;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(5, 5);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike5'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=5;`
  //id 값이 1인 place의 favorite을 기존 값에서 1 더한다.
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 6 */
} else if(pathname === '/like6'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=6;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(6, 6);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike6'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=6;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 7 */
} else if(pathname === '/like7'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=7;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(7, 7);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike7'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=7;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 8 */
} else if(pathname === '/like8'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=8;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(8, 8);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike8'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=8;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 9 */
} else if(pathname === '/like9'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=9;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(9, 9);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike9'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=9;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 10 */
} else if(pathname === '/like10'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=10;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(10, 10);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike10'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=10;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 11 */
} else if(pathname === '/like11'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=11;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(11, 11);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike11'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=11;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
  /* 12 */
} else if(pathname === '/like12'){ // 찜하기
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=12;`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(12, 12);`
  connection.query(sql1+sql2, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
} else if(pathname === '/dislike12'){ // 찜 취소
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=12;`
  connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
  });
}
  res.end()
}).listen(3020, function(){
  console.log('서버가 작동되고 있습니다!');
});