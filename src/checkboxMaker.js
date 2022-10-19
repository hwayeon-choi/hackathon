// import placeTypeName from '../data/placeTypeNames.js';
import region from '../data/regionNames.js';


// 체크박스를 만드는 함수
function checkboxMakerEngKor(objKey, id) {
  let temp = [];
  for(let i =0; i< 28; i++){
  //체크박스 이름 지정을 위한 데이터 기입
  let ckboxId = id+[i+1];
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
// console.log(checkboxMakerEngKor(region));


// function checkboxMaker(objKey) {
//   let temp = [];
//   for(let i =0; i< objKey.length; i++){
//   //체크박스 이름 지정을 위한 데이터 기입
//   let ckboxId = 'ckbox2-'+[i+1];
//   let boxName = objKey[i];
//   let boxVal = objKey[i];
//   let labelText = objKey[i];
//   let clickFunc = "";

//   let tagTemp = `<div><input type="checkbox" id="${ckboxId}" name="${boxName}" onclick="${clickFunc}" "value="${boxVal}">
//   <label for="${boxName}"> ${labelText} </label></div>`;

//   temp.push(tagTemp);
//   }
//   return temp.join('');
// }
// console.table(checkboxMaker(region));

export default checkboxMakerEngKor;