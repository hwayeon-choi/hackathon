import mysql from 'mysql'
import express from 'express'

const app = express()
const port = 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12341234',
  database: 'favoritetest'
})
connection.connect();

app.get('/', (req, res) => {
  if(pathname === '/'){
    res.send(`<!doctype html>
    <html>
    <head>
      <title>like</title>
      <meta charset="utf-8">
    </head>
    <body>
      <p>댕댕펜션</p>
      <button type="button" action="/post_test" method="POST">찜하기</button>
    </body>
    </html>`)
  } else if(pathname === '/post_test'){
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

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})