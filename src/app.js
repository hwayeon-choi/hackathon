// nodemon watch `파일명` 
// mysql -uroot -p
import express from 'express';
import fs, { appendFile } from 'fs';
import mysql from 'mysql'
import url from 'url'

const app = express()
const port = 3000

// MySQL 가동 
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12341234',
  database: 'favorite',
  multipleStatements: true
})

app.get('/likeOX', (req, res) => {
  let userId = req.query.userId;
  let placeId = req.query.placeId;
  let sql = `SELECT EXISTS(SELECT * FROM favorite WHERE userid=${userId} AND placeid=${placeId}) AS dup;`
  con.query(sql, function(err, rows, fields){
    if(err) console.log(err);
    let resData
    if(rows===1){
      resData=true
    } else {
      resData = false
    }
    res.send(resData)
    
  })
})

/* 
   if(pathname === '/') { // 찜 여부 확인
    let req.query = url.parse(_url, true).query;
    let userId = req.query.userId;
    let placeId = req.query.placeId;
    let sql = `SELECT EXISTS(SELECT * FROM favorite WHERE userid=${userId} AND placeid=${placeId}) AS dup;`
    connection.query(sql, function(err, rows, fields){
      if(err) console.log(err);
      console.log(rows);
      let timeNow = Math.floor(Date.now()/1000)
      // 파일로 저장
      fs.writeFile(`./inquiry-log/favoriteOX${timeNow}.json`, JSON.stringify(rows), 'utf-8',(error)=> {
        if(error === true) {
          console.error('this is error');
        } else {
          return
        }
      })
      // 다시 호출
      fs.readFile(`./inquiry-log/favoriteOX${timeNow}.json`, 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(timeNow)
        console.log(data)
        res.writeHead(200,{
          "Access-Control-Allow-Origin":"*",
          "content-type":"application/json; charset=utf-8",
        });
        res.write(JSON.stringify(data))
      })
    });
  }  */

/*   // 찜하기 
   else if(pathname === '/like') {
    let sql1 = `UPDATE place SET favorite=favorite+1 WHERE placeid=${placeId};`
    let sql2 = `INSERT INTO favorite(userid, placeid) VALUES(${userId}, ${placeId});`
    connection.query(sql1+sql2, function(err, rows, fields){
        if(err) console.log(err);
        console.log(rows);
    });
  } 
   
  // 찜 취소하기 
   else if(pathname === '/dislike'){
    let sql1 = `UPDATE place SET favorite=favorite-1 WHERE placeid=${placeId};`
    let sql2 = `DELETE FROM favorite WHERE userid=${userId} or placeid=${placeId} limit 1`
    connection.query(sql1+sql2, function(err, rows, fields){
        if(err) console.log(err);
        console.log(rows);
    })
  } 

  // 위시리스트 
   else if(pathname === '/wishlist'){
      let sql = `SELECT placename FROM place WHERE placeid=any(SELECT placeid FROM favorite WHERE userid=${userId});`
      connection.query(sql, function(err, rows, fields){
        if(err) console.log(err);
        let timeNow = Math.floor(Date.now()/1000)
        // 파일로 저장
        fs.writeFile(`./inquiry-log/user${userId}-${timeNow}.json`, JSON.stringify(rows), 'utf-8',(error)=> {
          if(error === true) {
            console.error('this is error');
          }
        })
        // 다시 호출
        fs.readFile(`./inquiry-log/user${userId}-${timeNow}.json`, 'utf8', (err, data) => {
          if (err) {
            console.error(err)
            return
          }
          console.log(data)
          res.writeHead(200, {"content-type": "application/json; charset=utf-8"});
          res.write(JSON.stringify(data))
        })
      });
    } 

    // top 10 
   else if(pathname === '/popular'){ 
    let sql = `SELECT * FROM place ORDER BY favorite DESC LIMIT 10;`
    connection.query(sql, function(err, rows, fields){
      if(err) console.log(err);
      let timeNow = Math.floor(Date.now()/1000)
      console.log(timeNow)
      // 파일로 저장
      fs.writeFile(`./inquiry-log/popular${timeNow}.json`, JSON.stringify(rows), 'utf-8',(error)=> {
        if(error === true) {
          console.error('this is error');
        } else {
          return
        }
      })
      // 다시 호출
      fs.readFile(`./inquiry-log/popular${timeNow}.json`, 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(timeNow)
        console.log(data)
        res.writeHead(200, {"content-type": "application/json; charset=utf-8"});
        res.write(JSON.stringify(data))
      })
    });
  }  */

app.listen(port, () => console.log('서버가 작동되고 있습니다!'))