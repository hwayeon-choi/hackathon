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

const express = require('express');
const router = express();
const db = require('../config/db')

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get('/test', (req,res) => {
    db.query('SELECT * FROM table1', (err, data) => {
        if(!err) res.send({ products : data});
        else res.send(err);
    })
})

module.exports = router;