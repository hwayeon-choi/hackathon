"use strict";

// module
const express = require("express");
const app = express();

// routing
const home = require("./src/routes/home");

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

// login.js 와 login.ejs를 연결해주는 middleware 세팅: 정적경로 추가
// __dirname: 현재 파일 위치를 반환
app.use(express.static(`${__dirname}/src/public`));

// json을 위한 middleware
// express(new version)에 body-parser 포함됨
app.use(express.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended : true })); 

// middleware 등록
app.use("/", home); // use => 미들웨어를 등록해주는 메서드

module.exports = app;