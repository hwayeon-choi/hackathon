"use strict";

const editBtn = document.querySelector("#editBtn"),
  updateBtn = document.querySelector("#updateBtn"),
  deleteBtn = document.querySelector("#deleteBtn");

// editBtn.addEventListener("click", profile);
// updateBtn.addEventListener("click", profile);
deleteBtn.addEventListener("click", profile);

function profile() {
  location.href = "/userDelete";
}