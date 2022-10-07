import http from 'http';
// import fs from 'fs';
import query from 'querystring';
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
        <title>POST</title>
        <meta charset="utf-8">
      </head>
      <body>
        <form id="signup" action="/post_test" method="POST">
          <input type="text" name="id" placeholder="id" /><br><br>
          <input type="text" name="username" placeholder="username" /><br><br>
          <input type="text" name="pw" placeholder="pw" /><br><br>
          <input type="text" name="email" placeholder="email" /><br>
          <button type="submit"> sign-up </button>
        </form>
        <button type="button" onclick="location.href='/login'">Login</button>
      </body>
      </html>`);

  } else if(pathname === '/post_test'){
    //회원가입 폼 제출시 넘어가는 화면 
    let body = '';
    req.on('data', function(data){
      body = body + data;
    });
    req.on('end', function() {
      let post = query.parse(body);
      console.log(post);
      let id = post.id;
      let username = post.username;
      let pw = post.pw;
      let email = post.email;
      
      //객체 결과를 JSON파일로 파싱
      const obj = JSON.parse(JSON.stringify(post));
      let keys = Object.keys(obj);
      //Object.Keys(obj)메서드는 객체의 '키'만 담은 배열을 반환한다. 

      //만들어둔 DB테이블에 insert하기 
      let sql = 'INSERT INTO userinfo(user_id, name, password, email) VALUES(?,?,?,?)';
      let params = [obj[keys[0]], obj[keys[1]], obj[keys[2]], obj[keys[3]]];
      //userinfo테이블의 user_id, name, password, email
      connection.query(sql, params, function(err, row, fields) {
        if(err) {
          console.log(err);
        } else {
          console.log(row);
        }
      });
      // connection.end(); 
      
      // res.writeHead(302, {Location: '/'});
      //폼 제출 후 id, username, pw, email 화면에 출력됨
      res.end(`
      <!doctype html>
      <html>
      <head>
        <title>POST</title>
        <meta charset="utf-8">
      </head>
      <body>
        <p>id : ${id}</p>
        <p>username : ${username}</p>
        <p>pw : ${pw}</p>
        <p>email : ${email}</p>
      </body>
      </html>
      `
      );
    });

  } else if(pathname === '/login') {
    //로그인 페이지
    let html = `
    <!doctype html>
      <html>
      <head>
        <title>LOGIN</title>
        <meta charset="utf-8">
      </head>
      <body>
        <form id="login" action="/login_test" method="POST">
          <input type="text" name="id" placeholder="id" /><br>
          <input type="text" name="pw" placeholder="pw" /><br>
          <button type="submit"> login </button>
        </form>
      </body>
      </html>
    `;
    res.writeHead(200);
    res.end(html);

  } else if(pathname === '/login_test'){
    let body = '';
    req.on('data', function(data){
      body = body + data;
    });
    req.on('end', function(req){
      let post = query.parse(body);

      const obj2 = JSON.parse(JSON.stringify(post));
      let keys = Object.keys(obj2);

      let sql = 'SELECT user_id, password FROM userinfo WHERE user_id = ?';
      //userinfo테이블에서 id, pw값 일치하는 id값 조회
      let params = [obj2[keys[0]]];
      connection.query(sql, params, function(err, result) {
      try{
        let input_id = obj2[keys[0]];
        let input_pw = obj2[keys[1]];

        let valid_id = result[0].user_id; //DB의 user_id 데이터값
        let valid_pw = result[0].password; //DB의 password 데이터값

        if(input_id === valid_id){
          if(input_pw === valid_pw){
          console.log('로그인 성공');
          // connection.end();
          res.writeHead(302, {Location:'/login_after'});
          res.end();
          } else {
            console.log('비밀번호를 확인');
            // connection.end();
            res.writeHead(302, {Location:'/login'});
            res.end();
            }
          }
        } catch(error) {
          console.log('등록되지 않은 회원입니다 ');
          // connection.end();
          res.writeHead(302, {Location:'/'});
          res.end();
        }
      });
    });

  } else if(pathname === '/login_after'){
    res.writeHead(200);
    res.end(`
    <!doctype html>
      <html>
      <head>
        <title>Welcome</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h2>환영합니다!</h2>
      </body>
      </html>`);

  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});


app.listen(port, () => console.log(`server started on port ${port};` + 'press Ctrl-C to terminate...'));