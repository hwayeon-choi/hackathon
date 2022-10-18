import http from 'http';
// import fs from 'fs';
import query from 'querystring';
import url from 'url';
const port = process.env.PORT || 3010
import mysql from 'mysql'; 

import checkboxMaker from './src/checkboxMaker.js';
import is_checked from './src/is_checked.js';
import placeTypeName from './data/placeTypeNames.js';

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
const app = http.createServer(function(req, res) {
  let _url = req.url;
  let pathname = url.parse(_url, true).pathname;
  //url.parse(): url문자열을 입력하면 url객체를 만든다. 
  //url.parse(String, (boolean), (boolean)) => true일때 object, false일때 문자열

  if(pathname === '/'){
    //로컬 첫페이지일 때 보이는 화면
    res.writeHead(200);
    res.end(`
      <!doctype html>
        <html>
        <head>
          <title>filter-test</title>
          <meta charset="utf-8">
        </head>
        <body>` 
        + 
        checkboxMaker(placeTypeName, 'is_checked()')
        +
        `
        </body>
        </html>`
    );

  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(port, () => console.log(`server started on port ${port};` + 'press Ctrl-C to terminate...'));