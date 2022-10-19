"use strict";

const id = document.querySelector("#id"),
  oldPassword = document.querySelector("#pw-old"),
  newPassword = document.querySelector("#pw-new"),
  confirmPassword = document.querySelector("#pw-confirm"),
  editBtn = document.querySelector("button");

  editBtn.addEventListener("click", userEdit);

  function userEdit() {
    // request data
    const req = {
      id : id.value,
      oldPassword : oldPassword.value,
      newPassword : newPassword.value,
      confirmPassword : confirmPassword.value
    };
    // server에 전달
    fetch("/userEdit", {
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
        alert(res.msg);
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원탈퇴 중 에러 발생");
    });
  }