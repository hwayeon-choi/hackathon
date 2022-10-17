const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/register',(req, res) => {
    const mysql = require('./database.js')();
    const connection = mysql.init();
    mysql.db_open(connection);
    const userid = req.body.id;
    const userpw = req.body.pw;
    const userpw2 = req.body.pw2;
    const username = req.body.uname;
    if (userid && userpw && userpw2 && username){
        connection.query('SELECT * FROM Users WHERE id = ? OR uname = ?',[userid, username], (err, results, fields) => {
            if (err){
                throw err;
            } else if (results.length <= 0 && userpw == userpw2){
                connection.query('INSERT INTO USERS (id, pw, uname) VALUES(?,?,?)',[userid, userpw, username], (err,data) => {
                    if (err) {
                        console.log(err);
                    }
                });
                res.send(`<script type="text/javascript">alert("${username}님 환영합니다!"); document.location.href="/";</script>`);
            } else if (userpw != userpw2) {
                res.send(`<script type="text/javascript">alert("비밀번호가 다릅니다."); document.location.href="/register";</script>`);
            } else if (userid == results[0].ID) {
                res.send('<script type="text/javascript">alert("이미 존재하는 아이디입니다."); document.location.href="/register";</script>');
            } else if (username == results[0].UNAME) {
                res.send('<script type="text/javascript">alert("이미 존재하는 닉네임입니다."); document.location.href="/register";</script>');
            } else{
                res.send('<script type="text/javascript">alert("이미 존재하는 유저입니다."); document.location.href="/register";</script>');
            }
            connection.end();
        });
    } else {
        res.send('<script type="text/javascript">alert("정보를 모두 입력해주세요."); document.location.href="/register";</script>');
        connection.end();
    }   
})

module.exports = router;