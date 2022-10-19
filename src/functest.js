import data from '../database/DB_filter_save_to_json/all.json' assert{type: "json"};

function objKeyFilter(objName, typeName){
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


//조건간의 교집합을 반환..
//조건이 없으면 무시하고 지나감
//원본이나 조건이 변경될 때 필터링을 처음부터 다시 
let test = []

const filteredList = data.reduce((acc, cur) => {
  // 진행중
})