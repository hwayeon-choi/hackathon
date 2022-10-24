﻿// nodemon watch `파일명` 
// mysql -uroot -p
import express from 'express';
import mysql from 'mysql'
import cors from 'cors';

const app = express()
const port = 3000

// MySQL 가동 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12341234',
  database: 'favorite',
  multipleStatements: true
})

app.use(cors())

app.get('/likeOX', (req, res) => {
  let userId = req.query.userId;
  let placeId = req.query.placeId;
  let sql = `SELECT EXISTS(SELECT * FROM favorite WHERE userid=${userId} AND placeid=${placeId}) AS dup;`
  connection.query(sql, function(err, rows){
    if(err) console.log(err);
    let resData
    if(rows===1){
      resData = true
    } else {
      resData = false
    }
    res.send(resData)
  })
})

app.get('/like', (req, res) => {
  let userId = req.query.userId;
  let placeId = req.query.placeId;
  let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=${placeId};`
  let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(${userId}, ${placeId});`
  connection.query(sql1+sql2, function(err, rows){
      if(err) console.log(err);
      res.send(rows)
  });
})

app.get('/dislike', (req, res) => {
  let userId = req.query.userId;
  let placeId = req.query.placeId;
  let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=${placeId};`
  let sql2 = `DELETE FROM favorite WHERE userid=${userId} or placeid=${placeId} limit 1`
  connection.query(sql1+sql2, function(err, rows){
    if(err) console.log(err);
    res.send(rows)
  })
})

app.get('/wishlist', (req, res) => {
  let userId = req.query.userId;
  let sql = `SELECT placename FROM place WHERE placeid=any(SELECT placeid FROM favorite WHERE userid=${userId});`
  connection.query(sql, function(err, rows){
    if(err) console.log(err);
    res.send(rows)
  });
})

app.get('/popular', (req, res) => {
  let sql = `SELECT * FROM place ORDER BY favorite DESC LIMIT 10;`
  connection.query(sql, function(err, rows){
    if(err) console.log(err);
    res.send(rows)
  });
});

app.listen(port, () => console.log('서버가 작동되고 있습니다!'))