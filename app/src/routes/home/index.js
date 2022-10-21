"use strict";

const router = require('express').Router();
// const multer = require('multer');/
// const app = require('../../../app');
const ctrl = require("./home.ctrl");

// controller file을 불러와서 해당하는 객체에 접근
// root 경로로 왔을 떄는 home controller로
// login 경로로 왔을 떄는 login controller로 넘어간다
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/profile", ctrl.output.profile);
router.get("/userDelete", ctrl.output.userDelete);
router.get("/userEdit", ctrl.output.userEdit);
router.get("/userUpload", ctrl.output.userUpload);

// server로 login data를 받는 API
// client로부터 url에 post 요청을 받으면 callback 함수 실행
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/userDelete", ctrl.process.userDelete);
router.post("/userEdit", ctrl.process.userEdit);
router.post("/profile", ctrl.process.getProfile);

// form 데이터나 태그를 통해 업로드한 이미지를 올리면 req.file로 정보가 들어온다
// upload.single('img') 미들웨어 : 이미지가 아닌 나머지 데이터는 그대로 req.body에 들어온다

module.exports = router;  