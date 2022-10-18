"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#pw"),
  submitBtn = document.querySelector("button");

  submitBtn.addEventListener("click", userDelete);

  function userDelete() {
    // request data
    const req = {
      id : id.value,
      password : password.value
    };
    // server에 전달
    fetch("/userDelete", {
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
      console.error("회원탈퇴 중 에러 발생");
    });
  }