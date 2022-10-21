"use strict";

// module
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

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

// express로 하여금 /uploads url에서 "uploads" 폴더 내에 접근 권한 부여
app.use("/uploads", express.static("uploads"));

// session 유지를 위한 middleware
app.use(cors({
  origin : true,
  credentials : true
}))
app.use(cookieParser());
app.use(
  session({
    key : "loginData", // session이 저장될 key값
    secret : "testSecret", // 서명에 필요한 값
    resave : false, // 수정이 일어나지 않아도 resave를 할건지
    saveUninitialized : false, // 권한이 필요한 법률 준수에 유용
    cookie : { // 세션 관리
      expires : 60 * 60 * 24, // 쿠키가 얼마나 지속될 것인지 설정
    },
  })
);

// middleware 등록
app.use("/", home); // use => 미들웨어를 등록해주는 메서드

module.exports = app;