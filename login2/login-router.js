// login-router.js

const path = require("path");
var  express = require("express");
var router = express.Router();

var  controller_main = require("../controllers/login-controller");

// 로그인 라우터
router.get("/login", function(req,res){
  res.sendFile(path.join(__dirname , "../public/login.html"));
});

router.post("/login", async function(req,res){
  // 로그인 확인을 위해 컨트롤러 호출
  var result = await controller_main.SignIn(req,res);   
  res.send(result);
});

// 로그아웃
router.get("/logout", function(req,res){
  console.log("clear cookie");
  // 로그아웃 쿠키 삭제
  res.clearCookie('userid');
  res.clearCookie('username');

	 // 세션정보 삭제
	console.log("destroy session");
  req.session.destroy();
    
  res.sendFile(path.join(__dirname , "../public/login.html"));
});

// 회원가입
router.get("/signup", function(req,res){
  res.sendFile(path.join(__dirname , "../public/signup.html"));
});

router.post("/signup", async function(req,res){
  // 회원가입 컨트롤러 호출
  var result = await controller_main.SignUp(req,res);
  res.send(result);
});


module.exports = router;