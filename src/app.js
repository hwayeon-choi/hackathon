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
  console.log(pathname);
  if(pathname === '/'){
    res.writeHead(200, {"content-type": "text/html; charset=utf-8"});
    res.write(data);
  } else if(pathname === '/popular'){ //top 10 모듈
    let sql = `SELECT * FROM place ORDER BY favorite DESC LIMIT 10;`
    connection.query(sql, function(err, rows, fields){
      if(err) console.log(err);
      let timeNow = `./inquiry-log/popular${Math.floor(Date.now()/1000)}.json`
      console.log(timeNow)
        /* 파일로 저장 */
      fs.writeFile(timeNow, JSON.stringify(rows), 'utf-8',(error)=> {
        if(error === true) {
          console.error('this is error');
        } else {
          return
        }
      })
      /* 다시 호출 */
      fs.readFile(timeNow, 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(timeNow)
        console.log(data)
        res.writeHead(200, {"content-type": "application/json; charset=utf-8"});
        res.write(JSON.stringify(data))
      })
    });
  } res.end();
}).listen(3000, function(){
  console.log('서버가 작동되고 있습니다!');
});