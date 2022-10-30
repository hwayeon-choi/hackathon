const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'fullstack305',
    port: '3305',
    database: 'testdb' 
});

//서버에서 데이터 테이블에 넣기
app.get('/', (req, res) =>{
  // const sqlQuery = "INSERT INTO test_tb VALUES(1,'t','e','st')";
  const sqlQuery = "SELECT * FROM test_db"
  db.query(sqlQuery, (err, result) => {
    res.send('성공');
  });
});

//서버에서 db데이터 조회하기

app.listen(PORT, ()=> {
  console.log(`server running : ${PORT}`);
});