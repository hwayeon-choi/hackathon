import http from 'http';
// import fs from 'fs';
import query from 'querystring';
import url from 'url';
const port = process.env.PORT || 3010
import mysql from 'mysql'; 

import placeTypeName from './placeTypeNames.js';


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

  let boxName1 = placeTypeName.eng[0];
  let boxVal1 = placeTypeName.eng[0];
  let labelText1 = placeTypeName.kor[0];
  let boxName2 = placeTypeName.eng[1];
  let boxVal2 = placeTypeName.eng[1];
  let labelText2 = placeTypeName.kor[1];
  let boxName3 = placeTypeName.eng[2];
  let boxVal3 = placeTypeName.eng[2];
  let labelText3 = placeTypeName.kor[2];

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
      <body>
        <form id="filters" action="/filter_test" method="POST">
        <input type="checkbox" id="${boxName1}" name="${boxName1}" value="${boxVal1}">
        <label for="${boxName1}"> ${labelText1} </label><br>
        <input type="checkbox" id="${boxName2}" name="${boxName2}" value="${boxVal2}">
        <label for="${boxName2}"> ${labelText2} </label><br>        <input type="checkbox" id="${boxName3}" name="${boxName3}" value="${boxVal3}">
        <label for="${boxName3}"> ${labelText3} </label><br><br>
        <input type="submit" value="Submit">
        </form>
      </body>
      </html>`);


  // } else if(pathname === '/filter_test'){
  //   //필터 체크 후 보이는 화면
  //   let body = '';
  //   req.on('data', function(data){
  //     body = body + data;
  //   });
  //   req.on('end', function() {
  //     let post = query.parse(body);
  //     console.log(post);

  //     // let boxName = post.boxName;
  //     // let boxVal = post.boxVal;
  //     // let labelText = post.labelText;
      
  //     //객체 결과를 문자열로 변환
  //     const obj = JSON.parse(JSON.stringify(post));
  //     let keys = Object.keys(obj);
  //     //Object.Keys(obj)메서드는 객체의 '키'만 담은 배열을 반환한다. 
  //     //만들어둔 DB테이블에 insert하기 
  //     let sql = 'INSERT INTO userinfo(user_id, name, password, email) VALUES(?,?,?,?)';
  //     let params = [obj[keys[0]], obj[keys[1]], obj[keys[2]], obj[keys[3]]];
  //     //userinfo테이블의 user_id, name, password, email
  //     connection.query(sql, params, function(err, row, fields) {
  //       if(err) {
  //         console.log(err);
  //       } else {
  //         console.log(row);
  //       }
  //     });
  //     // connection.end(); 
      
  //     // res.writeHead(302, {Location: '/'});
  //     //폼 제출 후 id, username, pw, email 화면에 출력됨
  //     res.end(`
  //     <!doctype html>
  //     <html>
  //     <head>
  //       <title>POST</title>
  //       <meta charset="utf-8">
  //     </head>
  //     <body>
  //       <p>id : ${id}</p>
  //       <p>username : ${username}</p>
  //       <p>pw : ${pw}</p>
  //       <p>email : ${email}</p>
  //     </body>
  //     </html>
  //     `
  //     );
  //   });

  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(port, () => console.log(`server started on port ${port};` + 'press Ctrl-C to terminate...'));