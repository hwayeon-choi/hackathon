// const router = require('express').Router();
const loginRouter = require('./userLogin.js');
const registerRouter = require('./userRegister.js');
const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./user.js');
const port = 5000;

app.use(express.json()); 
app.use(express.urlencoded({extended : true})) 
app.use(userRouter);

app.get('/',(req, res) => res.sendFile(path.resolve('./info.html')));

//res.sendFile(__dirname+'index.html');

app.use('/login', loginRouter); // 라우터 객체를 app객체에 등록
app.use('/register', registerRouter); // 라우터 객체를 app객체에 등록

// app.all('*', function(req, res){ // 등록되지 않은 패스에 대해 페이지 오류 응답
//     res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
// })

app.listen(port, ()=> console.log(`Server Start. Port : ${port}`))

const mysql = require('./database.js')();
const connection = mysql.init();
mysql.db_open(connection);
