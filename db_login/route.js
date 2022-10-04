import http from 'http';
import fs from 'fs';
import query from 'querystring';
import url from 'url';
// import connetion from './lib/db_template_test.js';
const port = process.env.PORT || 3000

// let mysql = require('mysql');
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

const element = {
  header: "<header> login </header>",
  br: "<br>",
  body: "<body></body>",
  form: `<form id="log-in-form" method="GET">
    <input type="text" name="username" placeholder="username" /><br><br>
    <input type="text" name="password" placeholder="password" />
    </form>
    <button type="submit" form="log-in-form"> login </button>`,
  signup: `<form id="sign-up-form" action="/form" method="POST">
    <input type="text" name="id" placeholder="id" /><br><br>
    <input type="text" name="username" placeholder="username" /><br><br>
    <input type="text" name="password" placeholder="password" />
    </form>
    <input type="text" name="email" placeholder="email" /><br><br>
    <button t
    ype="submit" form="log-in-form"> sign-up </button>`,
}
const main = `
${element.header}
${element.form}
${element.br}
${element.body}
`;
const signUp = `
${element.signup}
`

// const server = http.createServer((req, res) => {
  //쿼리스트링, 옵션인 마지막 슬래시를 없애고 소문자로 바꿔서 url을 '정규화'합니다.
//   const path = req.url.replace(/\/?(?:\?.)?$/, '').toLowerCase()
//   switch(path){
//     case '':
//       res.writeHead(200, {'content-type': 'text/plain'})
//       res.end('homepage')
//       break
//     case '/about':
//       res.writeHead(200, {'content-type': 'text/plain'})
//       res.end('about')
//       break
//     case '/login':
//       res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
//       res.write(main);
//       res.end();  
//       break
//     case '/signup':
//       let body = '';
//       res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
//       res.write(signUp);
//       res.end();
//       break
//     default:
//       res.writeHead(404, {'content-type': 'text/plain'})
//       res.end('Not pound')
//       break
//   }
// })

const app = http.createServer(function(req, res) {
  let _url = req.url;
  let pathname = url.parse(_url, true).pathname;
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
        <input type="text" name="pw" placeholder="pw" /><br>
        <input type="text" name="email" placeholder="email" /><br>
        <button type="submit"> sign-up </button>
        </form>
      </body>
      </html>`);

  } else if(pathname === '/post_test'){
    //폼 제출시 넘어가는 화면 
    let body = '';
    req.on('data', function(data){
      body = body + data;
    });
    req.on('end', function(req) {
      let post = query.parse(body);
      console.log(post);
      let id = post.id;
      let username = post.username;
      let pw = post.pw;
      let email = post.email;
      
      //객체 결과를 JSON파일로 파싱
      const obj = JSON.parse(JSON.stringify(post));
      let keys = Object.keys(obj);

      //만들어둔 DB테이블에 insert하기 
      let sql = 'INSERT INTO userinfo(user_id, name, password, email) VALUES(?,?,?,?)';
      let params = [obj[keys[0]], obj[keys[1]], obj[keys[2]], obj[keys[3]]];
      connection.query(sql, params, function(err, row, fields) {
        if(err) {
          console.log(err);
        } else {
          console.log(row);
        }
      });
      // connection.end(); 
      
      // res.writeHead(302, {Location: '/'});

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
    `
    res.writeHead(200);
    res.end(html);

  } else if(pathname === '/login_test'){
    let body = '';
    req.on('data', function(data){
      body = body + data;
    });
    req.on('end', function(req){
      let post = query.parse(body);
      const obj = JSON.parse(JSON.stringify(post));
      let keys = Object.keys(obj);
    });

  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});


app.listen(port, () => console.log(`server started on port ${port};` + 'press Ctrl-C to terminate...'));