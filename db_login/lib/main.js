// 참고 작성 진행중

let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring');
let template = require('./lib/web_temp.js.js');
let path = require('path');
let mysql = require('mysql');
const connetion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fullstack305',
  database: `${databaseName}` 
});
connetion.connect(); 


let app = http.createServer((request, response) => {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  if(pathname === '/'){
    if(queryData.id === undefined){
      connetion.query(`SELECT * FROM table`, function(err, table){
        let title = 'login-test';
        let html = template.HTML(title, list);
        response.writeHead(200);
        response.end(html);
      });
    }else {
      connetion.query(`SELECT * FROM table`, function(err, table){
        if(err){
          throw err;
        }
      })
    }
  }
});
// 진행중