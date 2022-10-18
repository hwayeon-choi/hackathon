import checkboxMaker from './checkboxMaker.js';
import { CategoryObj, objKeyFilterInstance } from './objKeyFilterInstance.js';
import placeTypeName from '../data/placeTypeNames.js';
import data from '../database/DB_filter_save_to_json/all.json' assert{type: "json"};


//선택 여부를 확인하는 함수
//결과 여부 : boolean


export default function is_checked() {

  const root = document.getElementById('root');
  const append = `${checkboxMaker(placeTypeName)}`;
  root.innerHTML = append;

  checkboxMaker(placeTypeName);//마크업용 업체명 출력

  for (let j = 0; j < 11; j++) {
    const checkbox = root.children[j].children[0];
    // console.dir(checkbox); 
    const label = root.children[j].children[1]; 
    // console.dir(label); 
    
    checkbox.addEventListener('click', function() {
      const is_checked = checkbox.checked; //체크박스의 체크여부(값 : boolen)
      // console.log(is_checked); 
      if(is_checked === true) {
        label.style.backgroundColor = "cadetblue";
        
        let findStr = label.innerText; //string 추출
        console.log('select' + findStr);
      
        objKeyFilterInstance(data, 'place_type', `${findStr}`);
        /**
         * 객체의 키값이 문자열과 일치한다면 인스턴스를 생성해줌
         * findStr는 text로만 출력되어서 백틱을 붙여줘야 문자열로 처리됨
         */
      } else {
        label.style.backgroundColor = "transparent";
      }
    });
  }
}