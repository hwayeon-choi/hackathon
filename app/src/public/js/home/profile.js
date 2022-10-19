"use strict";

const editBtn = document.querySelector("#editBtn"),
  updateBtn = document.querySelector("#updateBtn"),
  deleteBtn = document.querySelector("#deleteBtn");

editBtn.addEventListener("click", userEdit);
// updateBtn.addEventListener("click", profile);
deleteBtn.addEventListener("click", userDelete);

function userEdit() {
  location.href = "/userEdit";
}

function userDelete() {
  location.href = "/userDelete";
}