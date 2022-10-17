//객체 조회 후 생성자 함수에 따라 인스턴스를 반환하는 함수
//objName : 대상 객체 이름
//keyName : 객체의 키(key)
//typeName : 화면에 표시되는 카테고리명

export default function objKeyFilterInstance(objName, keyName, typeName){
  let set = []; 
  let newArr = objName.filter(item => 
  item[`${keyName}`] === typeName
  );
  let temp = new CategoryObj(1, newArr[0].region, newArr[0].company_name, newArr[0].wish);
  set.push(temp);
  return console.log(set);
}

//호출
// objKeyFilterInstance(textObj, 'place_type', `${findStr}`);




//예전거 백업
//*해당 객체 전체를 조회한 뒤 생성자 함수에 따라 인스턴스를 반환하는 함수 -> core

// function placeTypeFilter(objName, keyName, typeName){
//   //기존 객체에서 키가 placae_type인 오브젝트의 이름이 카테고리명과 일치할 때 
//   let newArr = objName.filter(item => 
//   item[`${keyName}`] === typeName
//   );
//     // console.dir(newArr[0]);
//     let categoryobj = new CategoryObj(1, newArr[0].region, newArr[0].company_name, newArr[0].wish);
//     console.log(categoryobj);
//   }

//   placeTypeFilter(textObj, 'place_type', `${findStr}`);