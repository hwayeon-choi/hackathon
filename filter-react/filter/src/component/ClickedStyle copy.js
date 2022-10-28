import React, { useState } from "react";

//클릭 상태에 따라 스타일을 지정하는 함수
const ClickedStyle = (curClick) => {  
  if (curClick !== null) {
    let getId = document.getElementById(curClick);
    getId.style.backgroundColor = "#6BB8D0";
    getId.style.border = "1px solid #6C6C6C";
    if(curClick == null) {
      getId.style.backgroundColor = 'black';
    }
  }
};

export default ClickedStyle;
