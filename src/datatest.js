import data from "../database/DB_filter_save_to_json/all.json" assert { type: "json" };

export default function keyName() {
  let set = [];
  for (let i = 0; i < data.length; i++) {
    let datas = data[i];
    // let keys = Object.keys(datas);
    // console.log(keys); //키
    let vals = Object.values(datas);
    for (let j = 0; j < vals.length; j++) {
      let test = "동물병원";
      if (test === vals[j]) {
        set.push(vals);
        // console.log(vals); //값
      }
    }
  }
  return set;
}
// console.log(keyName());





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
