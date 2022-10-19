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
  } res.end();
}).listen(3000, function(){
  console.log('서버가 작동되고 있습니다!');
});