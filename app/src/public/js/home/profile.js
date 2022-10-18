"use strict";

const editBtn = document.querySelector("#editBtn"),
  updateBtn = document.querySelector("#updateBtn");

editBtn.addEventListener("click", profile);
updateBtn.addEventListener("click", profile);

function profile() {

  // fetch(" profile", {
  //   method : "POST",
  //   headers : {
  //     "Content-Type" : "application/json"
  //   },
  //   body : JSON.stringify(req)
  // })
  // .then((res) => res.json())
  // .then((res) => {
  //   if(res.success) {
  //     location.href = "/login";
  //   } else {
  //     alert(res.msg);
  //   }
  // })
  // .catch((err) => {
  //   console.error("회원가입 중 에러 발생");
  // });
}