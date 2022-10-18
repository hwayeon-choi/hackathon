// html 문서와 연결된 파일 = front단에서 동작하는 js
"use strict";

// 파라미터로 넘어오는 선택자로부터 html data를 가져올 수 있다
const id = document.querySelector("#id"),
  password = document.querySelector("#pw"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", register);

function register() {
  // request data
  const req = {
    id : id.value,
    password : password.value
  };
  // server에 전달
  fetch("/login", {
    // body로 전달 시, POST 메소드 사용
    method : "POST",
    // 전달하는 data가 JSON 형식
    headers : {
      "Content-Type" : "application/json"
    },
    // key : body, value : req
    // 객체를 JSON(문자열)로 감싼 뒤 전달
    body : JSON.stringify(req)
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.success) {
      location.href = "/";
    } else {
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error("로그인 중 에러 발생");
  });
}