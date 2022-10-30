const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fullstack305',
    port: '3305',
    database: 'testdb' 
});
db.connect();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cors());
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  let tableName = 'test_tb';
  db.query(`SELECT * FROM ${tableName}`,(err, result) => {
    if(err){
      console.log('데이터를 가져올 수 없음');
    } else {
      res.send(result);
    }
  });
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`)
});