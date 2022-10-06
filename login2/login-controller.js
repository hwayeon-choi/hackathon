// login-controller.js

var  service_main = require("../services/login-service");

// 회원로그인 컨트롤러
exports.SignIn =  async function(req,res){
  //console.log( req.body);
  var result =  await service_main.SignIn(req);     
  if(result.code ==0) {
    // 로그인 성공시 쿠키 생성
    res.cookie('userid', result.data.userid);
    res.cookie('username', result.data.name, {
      maxAge:60*60*1000,
      path:"/"
    });
          
    //  로그인 후 사용자 정보를 세션에 저장
    // req.session.user = result;
  }

  return result;
};

// 회원가입 컨트롤러
exports.SignUp =  async function(req,res){
  //console.log( req.body);

  var result =  await service_main.SignUp(req);     

  var msg = "가입완료";
    if(result ==100) {
          msg = "이미 존재하는 ID 입니다.";
    }
    
  var json = {code:result, msg:msg};
  console.log(json);

  return json;
};