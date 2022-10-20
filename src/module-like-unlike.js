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
  } else if(pathname === '/like'){ // 찜하기
    console.log(req.params)
/*     let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=${placeId};`
    let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(${userId}, ${placeId});`
    connection.query(sql1+sql2, function(err, rows, fields){
        if(err) console.log(err);
        console.log(rows);
    });
  } else if(pathname === '/dislike1'){ // 찜 취소
    let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=${placeId};`
    let sql2 = `DELETE FROM favorite WHERE userid = ${userId} or placeid = ${placeId} limit 1`
    connection.query(sql1+sql2, function(err, rows, fields){
        if(err) console.log(err);
        console.log(rows);
    }); */
} res.end();
}).listen(3001, function(){
  console.log('서버가 작동되고 있습니다!');
});