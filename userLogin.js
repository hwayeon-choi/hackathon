const express = require('express');
const router = express.Router();
const path = require('path');


router.post('/login', (req, res) => {
    // res.render("registOK");
    const mysql = require('./database.js')();
    // console.log(mysql);
    const connection = mysql.init();
    mysql.db_open(connection);
    const userid = req.body.id;
    const userpw = req.body.pw;
    connection.query('SELECT * FROM Users WHERE id = ? AND pw = ? ',[userid, userpw], (err, results, fields)  => {
        if (err){
            throw err;
        } else if (results.length > 0) {
            // console.log("환영합니다.");
            res.send('<script type="text/javascript">alert("환영합니다!");</script>');
            // res.send(`id : ${id}, pw : ${pw}`);
        } else {
            // console.log("로그인 정보가 틀렸습니다.");
            res.send('<script>alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>');
        }
        connection.end(); // DB 연결 끊기
    });
    
})

module.exports = router;
