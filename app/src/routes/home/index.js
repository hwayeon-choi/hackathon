"use strict";

const router = require('express').Router();
const ctrl = require("./home.ctrl");

// controller file을 불러와서 해당하는 객체에 접근
// root 경로로 왔을 떄는 home controller로
// login 경로로 왔을 떄는 login controller로 넘어간다
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/profile", ctrl.output.profile);

// server로 login data를 받는 API
// client로부터 url에 post 요청을 받으면 callback 함수 실행
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;
