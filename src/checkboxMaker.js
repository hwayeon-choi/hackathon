import is_checked from './is_checked.js';
import placeTypeName from '../data/placeTypeNames.js';

// 체크박스를 만드는 함수
export default function checkboxMaker(objKey, clickFunc) {
  let elem = [];
  for(let i =0; i< 11; i++){
  //체크박스 이름 지정을 위한 데이터 기입
  let ckboxId = 'ckbox-'+[i+1];
  let boxName = objKey.eng[i];
  let boxVal = objKey.eng[i];
  let labelText = objKey.kor[i];

  //엘리먼트 만들기
    let temp = `<div><input type="checkbox" id="${ckboxId}" name="${boxName}" onclick="${clickFunc}" "value="${boxVal}">
    <label for="${boxName}"> ${labelText} </label></div>`;
    elem.push(temp);

    let test = `<div><input type="checkbox" id="${ckboxId}" name="${boxName}" onclick="${clickFunc}" "value="${boxVal}">`;
    let test2 = test.innerHTML;
    console.log(test2);
  }
  return elem.join('');
}
checkboxMaker(placeTypeName, is_checked());
