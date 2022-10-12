import http from 'http';
import fs from 'fs';
import query from 'querystring';
import url from 'url';
const port = process.env.PORT || 3000;
import mysql from 'mysql';
const conn = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'pass',
  database: 'my_db'
};
const connection = mysql.createConnection(conn);
connection.connect();

// const testQuery = "SELECT * FROM Users";
// connection.query(testQuery, function (err, results, fields) { 
//     if (err) {
//         console.log(err);
//     }
//     console.log(results);
// });

// connection.end();

// 서버 시작
const app = http.createServer(function (req, res) {
  let _url = req.url;
  let pathname = url.parse(_url, true).pathname;
  // url.parse() : url문자열을 입력하면 url객체를 만든다. 
  // url.parse(String, (boolean), (boolean)) 
  // => true일때 object, false일때 string
  if (pathname === '/') {
    // localhost 시작 페이지
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
          <input type="text" name="user_id" placeholder="user_id" /><br><br>
          <input type="text" name="user_password" placeholder="user_password" /><br><br>
          <input type="text" name="user_name" placeholder="user_name" /><br><br>
          <input type="text" name="user_email" placeholder="user_email" /><br><br>
          <button type="submit"> SIGN-UP </button>
        </form>
        <button type="button" onclick="location.href='/login'">LOGIN</button>
      </body>
      </html>`);
  } else if (pathname === '/post_test') {
    // 회원가입 폼 제출시 표시 화면
    let body = '';
    req.on('data', function (data) {
      body = body + data;
    });
    req.on('end', function () {
      let post = query.parse(body);
      console.log(post);
      let user_id = post.user_id;
      let user_password = post.user_password;
      let user_name = post.user_name;
      let user_email = post.user_email;

      // 객체 결과를 JSON 파일로 파싱
      const obj = JSON.parse(JSON.stringify(post));
      let keys = Object.keys(obj);
      // Object.Keys(obj)메서드는 객체의 '키'만 담은 배열을 반환한다. 

      // 만들어둔 DB 테이블에 값 insert하기 
      let sql = 'INSERT INTO Users(user_id, user_password, user_name, user_email) VALUES(?, ?, ?, ?)';
      let params = [obj[keys[0]], obj[keys[1]], obj[keys[2]], obj[keys[3]], obj[keys[4]]];
      // Users 테이블의 user_id, user_password, user_name, user_email
      connection.query(sql, params, function (err, row, fields) {
        if (err) {
          console.log(err);
        } else {
          console.log(row);
        }
      });
      // connection.end(); 

      // res.writeHead(302, {Location: '/'});
      // 폼 제출 후, user_id, user_password, user_name, user_email 화면에 표시
      res.end(`
      <!doctype html>
      <html>
      <head>
        <title>POST</title>
        <meta charset="utf-8">
      </head>
      <body>
        <p>user_id : ${user_id}</p>
        <p>user_password : ${user_password}</p>
        <p>user_name : ${user_name}</p>
        <p>user_email : ${user_email}</p>
      </body>
      </html>
      `);
    });
  } else if (pathname === '/login') {
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
          <input type="text" name="user_id" placeholder="user_id" /><br>
          <input type="text" name="user_password" placeholder="user_password" /><br>
          <button type="submit"> LOGIN </button>
        </form>
      </body>
      </html>
    `;
    res.writeHead(200);
    res.end(html);
  } else if (pathname === '/login_test') {
    let body = '';
    req.on('data', function (data) {
      body = body + data;
    });
    req.on('end', function (req) {
      let post = query.parse(body);
      const obj2 = JSON.parse(JSON.stringify(post));
      let keys = Object.keys(obj2);
      let sql = 'SELECT user_id, user_password FROM Users WHERE user_id = ?';
      // Users 테이블에서 id, pw값 일치하는 id값 조회
      let params = [obj2[keys[1]]];
      connection.query(sql, params, function (err, result) {
        try {
          let input_id = obj2[keys[1]];
          let input_pw = obj2[keys[2]];
          let valid_id = result[1].user_id; //DB의 user_id 데이터값
          let valid_pw = result[2].user_password; //DB의 user_password 데이터값

          if (input_id === valid_id) {
            if (input_pw === valid_pw) {
              console.log('로그인에 성공하였습니다.');
              // connection.end();
              res.writeHead(302, {
                Location: '/login_after'
              });
              res.end();
            } else {
              console.log('비밀번호를 확인해주세요.');
              // connection.end();
              res.writeHead(302, {
                Location: '/login'
              });
              res.end();
            }
          }
        } catch (error) {
          console.log('등록되지 않은 회원입니다.');
          // connection.end();
          res.writeHead(302, {
            Location: '/'
          });
          res.end();
        }
      });
    });
  } else if (pathname === '/login_after') {
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