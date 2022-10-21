"use strict";

const previewBtn = document.querySelector('#previewBtn');
const uploadBtn = document.querySelector('#uploadBtn');
// previewBtn 클릭 시 이미지 보여주기
previewBtn.onclick = showImage;     
uploadBtn.onclick = uploadImage;     

function showImage() {
    const newImage = document.querySelector('#image-show').lastElementChild;
    console.log(newImage);
    newImage.style.visibility = "visible";
}

function loadFile(input) {
    const file = input.files[0];
    // console.log(file.name);

    const newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);   

    newImage.style.width = "50%";
    newImage.style.height = "50%";
    newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지 숨기기
    newImage.style.objectFit = "contain";

    const container = document.querySelector('#image-show');
    container.appendChild(newImage);
};

function uploadImage() {
    location.href = "/profile";
}