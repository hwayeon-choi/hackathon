import data from '../database/DB_filter_save_to_json/all.json' assert{type: "json"};

// let test = data.filter();
// console.log(test); //보이지 않는 index 출력

// console.log(data[0]); 

let testStr = 'company_name';

for(let i=0; i<data.length; i++){
  let datas = data[i];
  let keys = Object.keys(datas);
  for(let j=0; j<keys.length; j++){
    // console.log(keys[j]);
    if(testStr === keys[j]){
      console.log(data[i]);
    };
  }
}
//진행중...



// console.log(Object.getOwnPropertyNames(data));
let testTwo = Object.values(data);
// console.log(testTwo); //객체 전체 출력됨

// console.log(Object.values(testTwo));

// console.log(test.filter());

//Object.keys = 숫자(index) 나열
//Object.values = 객체(본체들) 나열
//Object.entries = 각 객체가 배열에 담김

let testThree = Object.entries(data);
// console.log(testThree);
// console.log(Array.isArray(testTwo)); //true 




