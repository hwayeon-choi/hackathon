import http from 'http';
import fs from 'fs';
// import query from 'querystring';
import url from 'url';
const port = process.env.PORT || 3000
import mysql from 'mysql'; 


let databaseName = 'userdata';
//mysql연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: `${databaseName}` 
});
// connection.connect(); 

//서버 시작
const server = http.createServer(function(req, res) {
  // let _url = req.url;
  // let pathname = url.parse(_url, true).pathname;
  //url.parse(): url문자열을 입력하면 url객체를 만든다. 
  //url.parse(String, (boolean), (boolean)) => true일때 object, false일때 문자열

  if(req.method === 'GET'){
    //로컬 첫페이지일 때 보이는 화면
    fs.readFile('./public/index.html', function(err, data){
      //해당 폴더의 html파일을 읽어온다.
      if(err) { console.log('file read fail');
        } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(port, () => console.log(`server started on port ${port};` + 'press Ctrl-C to terminate...'));