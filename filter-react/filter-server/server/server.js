const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/sqlConnect');

// import express from 'express';
// const app = express();
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import mysql from 'mysql';

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(bodyParser.json());

/* db연동 api */
app.get('/api/place_detail', (req, res) => {
  let tableName = 'place_detail_3'; //가져올 테이블 이름 
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