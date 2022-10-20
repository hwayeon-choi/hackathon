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
  } 
  /* 위시리스트 */
  else if(pathname === '/wishlist'){
    let sql1 = `SELECT placename FROM place WHERE placeid=any(SELECT placeid FROM favorite WHERE userid=${userId});`
    connection.query(sql1, function(err, rows, fields){
      if(err) console.log(err);
      /* 파일로 저장 */
      fs.writeFile('./inquiry-log/user-${userId}.json', JSON.stringify(rows), 'utf-8',(error)=> {
        if(error === true) {
          console.error('this is error');
        }
      })
    });
    /* 다시 호출 */
    fs.readFile('./inquiry-log/user-1.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
      res.writeHead(200, {"content-type": "application/json; charset=utf-8"});
      res.write(JSON.stringify(data))
    })
  } res.end();
}).listen(3020, function(){
  console.log('서버가 작동되고 있습니다!');
});