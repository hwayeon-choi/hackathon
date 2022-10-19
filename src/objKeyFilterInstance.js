import data from '../database/DB_filter_save_to_json/all.json' assert{type: "json"};

class CategoryObj {
  constructor(region, company_name, address){
    this.region = region; 
    this.company_name = company_name;
    this._address = address;
  }
}

//1. 객체 조회 후 생성자 함수에 따라 인스턴스를 반환하는 함수
//objName : 대상 객체 이름
//keyName : 객체에서 찾으려는 값의 키(key)이름
//typeName : 찾으려는 값의 이름(문자열)

// function objKeyFilterInstance(objName, keyName, typeName){
//   let set = []; 
//   let newArr = objName.filter(item => 
//     item[`${keyName}`] === typeName
//     );
//     console.log(newArr); //typeName에 해당하는 객체[] 전부 출력
// 인스턴스 생성
//   let temp = new CategoryObj(newArr[0].region, newArr[0].company_name, newArr[0]._address);
//   set.push(temp);
//   return set;
// }

//호출예시
// objKeyFilterInstance(data, 'place_type', "식당");



//2. 오브젝트(objName)의 특정 키(key)에 해당하는 값(vals)이 보이는 값(typeName)과 일치할 때 인스턴스를 만든다

function objKeyFilterInstance(objName, typeName){
  let set = []; 
  for(let i=0; i<objName.length; i++){
    let datas = objName[i];
    let vals = Object.values(datas);
    for (let j = 0; j < vals.length; j++) {
    if(typeName === vals[j]){
        // console.log(datas); 
        let temp = new CategoryObj(datas.region, datas.company_name, datas._address);
        set.push(temp);
        // return set;
    }
  }
}
// console.log(set); //typename 전체 출력
return set;
}

//호출예시
// objKeyFilterInstance(data, '식당');



export { CategoryObj, objKeyFilterInstance };