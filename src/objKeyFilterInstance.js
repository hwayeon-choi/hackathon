// import textObj from '../data/placeDatas.js'

class CategoryObj {
  constructor(region, company_name, address){
    this.region = region; 
    this.company_name = company_name;
    this._address = address;
  }
}

//객체 조회 후 생성자 함수에 따라 인스턴스를 반환하는 함수
//objName : 대상 객체 이름
//keyName : 객체의 키(key)
//typeName : 화면에 표시되는 카테고리명

function objKeyFilterInstance(objName, keyName, typeName){
  let set = []; 
  let newArr = objName.filter(item => 
  item[`${keyName}`] === typeName
  );
  let temp = new CategoryObj(newArr[0].region, newArr[0].company_name, newArr[0]._address);
  set.push(temp);
  return console.log(set);
}

//호출예시
// objKeyFilterInstance(placeData, 'place_type', "식당");

export { CategoryObj, objKeyFilterInstance };