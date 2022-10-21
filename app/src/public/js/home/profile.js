"use strict";

const profileImage = document.querySelector("#profile-img"), 
  editBtn = document.querySelector("#editBtn"),
  updateBtn = document.querySelector("#updateBtn"),
  deleteBtn = document.querySelector("#deleteBtn");

editBtn.addEventListener("click", userEdit);
deleteBtn.addEventListener("click", userDelete);
updateBtn.addEventListener("click", userUpload);

function userEdit() {
  location.href = "/userEdit";
}

function userDelete() {
  location.href = "/userDelete";
}

function userUpload() {
  location.href = "/userUpload";
}

function showImage() {
  const newImage = document.createElement("img");
  newImage.setAttribute("class", 'img');
  newImage.src = URL.createObjectURL("blob:http://localhost:3000/a374bb6e-4353-4992-bf5e-0534cb73ca70");   

  newImage.style.width = "50%";
  newImage.style.height = "50%";
  newImage.style.objectFit = "contain";

  const container = document.querySelector('#profile-img');
  container.appendChild(newImage); 
}

function getProfile() {
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
      return showImage();
    } else {
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error("로그인 중 에러 발생");
  });
}