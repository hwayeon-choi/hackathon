import React, { useState } from "react";

//클릭 상태에 따라 스타일을 지정하는 함수
const ClickedStyle = (curClick, prevClick) => {  
  if (curClick !== null) {
    let getId = document.getElementById(curClick);
    getId.style.backgroundColor = "#6BB8D0";
    getId.style.border = "1px solid #6C6C6C";
  }

  if (prevClick !== null) {
    let prev = document.getElementById(prevClick);
    prev.style.backgroundColor = "#E5E5E5";
    prev.style.border = "1px solid #6C6C6C";
  }
};

// const ClickedStyle = (curClick) => {  
//   let getId = document.getElementById(curClick);
//     curClick !== null
//     ? getId.style.backgroundColor = "#6BB8D0"
//     : getId.style.backgroundColor = "#6c6c6c";
// }

export default ClickedStyle;
