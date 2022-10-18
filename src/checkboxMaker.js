// import placeTypeName from '../data/placeTypeNames.js';

// 체크박스를 만드는 함수
export default function checkboxMaker(objKey) {
  let temp = [];
  for(let i =0; i< 11; i++){
  //체크박스 이름 지정을 위한 데이터 기입
  let ckboxId = 'ckbox-'+[i+1];
  let boxName = objKey.eng[i];
  let boxVal = objKey.eng[i];
  let labelText = objKey.kor[i];
  let clickFunc = "";

  let tagTemp = `<div><input type="checkbox" id="${ckboxId}" name="${boxName}" onclick="${clickFunc}" "value="${boxVal}">
  <label for="${boxName}"> ${labelText} </label></div>`;

  temp.push(tagTemp);
  }
  return temp.join('');
}
// checkboxMaker(placeTypeName);

// document.body.children[i].children[0].type = checkbox