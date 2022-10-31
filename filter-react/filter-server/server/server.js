const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

/* sql connect */
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fullstack305',
    // port: '3305',
    database: 'place_category' 
});
db.connect();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(bodyParser.json());

/* db연동 api */
app.get('/api/place_detail', (req, res) => {
  let tableName = 'place_detail_2';
  db.query(`SELECT * FROM ${tableName}`,(err, result) => {
    if(err){
      console.log('데이터를 가져올 수 없음');
    } else {
      res.send(result);
    }
  });
});

/* 렐렐렐 */
// app.post('/api/place_datas', (req, res) => {
//   // 데이터 받는 곳
//   const requestCompanyName = req.body.
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`)
});