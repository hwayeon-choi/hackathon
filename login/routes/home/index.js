//index.js

"use strict"; // 엄격 모드 / 디버깅이 쉬워지고 발생 가능한 에러들을 예방한다.

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.hello); // .연산자를 통해서 간단히 변경 가능

router.get("/login", ctrl.login);

module.exports = router;
