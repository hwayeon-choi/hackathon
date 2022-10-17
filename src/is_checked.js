import objKeyFilterInstance from './objKeyFilterInstance.js';
import CategoryObj from './classfunc_category.js';

//선택 여부를 확인하는 함수
//결과 여부 : boolean
export default function is_checked() {
  for (let i = 0; i < 11; i++) {
    // const checkbox = document.body.children[0]; //체크박스
    // const is_checked = checkbox.checked; //체크박스의 체크여부(값 : boolen)
    // const checkboxText = document.body.children[1];
    // if (is_checked === true) {
      //   checkboxText.style.backgroundColor = "cadetblue";
      
      //   let findStr = checkboxText.innerText; //string 추출
      //   console.log('select ' + findStr);
      
      //   objKeyFilterInstance(textObj, 'place_type', `${findStr}`);
      //   //↑ 함수 호출(findStr는 text로만 출력되어서 백틱을 붙여줘야 문자열로 처리됨)
      // } else {
        //   checkboxText.style.backgroundColor = "transparent";
        // }
      // console.log('test'+[i]);
  }
}
is_checked(CategoryObj);