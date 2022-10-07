//mysql 모듈 불러오기
const mysql = require('mysql');
const fs = require('fs');

//mysql 연결 불러오기
const connetion = require('./mysql-connect-set');


//*특정 문자열 포함된 행 가져오기 & json 파일로 저장

let findTextToRow = '애견운동장'; //저장할 행의 문자열 지정
let fileName = 'pet_ground'; //저장할 파일명 지정

// connetion.query(`SELECT * FROM place_detail WHERE place_type LIKE '%${findTextToRow}%'`, function(error, results){
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(results);
//     //↓json파일로 저장하기
//     const exString = JSON.stringify(results);
//     if(fs.existsSync('./DB_filter_save_to_json')){
//       //↑하위에 해당 폴더가 존재한다면
//       fs.writeFileSync(`./DB_filter_save_to_json/${fileName}.json`, exString);
//       //↑지정한 이름으로 저장됨 
//     } else {
//       console.log('폴더가 존재하는지 확인하시오');
//     };
//   }
// });


//*테이블 전체 저장

let fileName2 = 'all'; //저장할 파일명 지정

connetion.query(`SELECT * FROM place_detail`, function(error, results){
  if(error) {
    console.log(error);
  } else {
    console.log(results);
    //↓json파일로 저장하기
    const exString = JSON.stringify(results);
    if(fs.existsSync('./DB_filter_save_to_json')){
      fs.writeFileSync(`./DB_filter_save_to_json/${fileName2}.json`, exString);
      //하위 폴더에 지정한 이름으로 저장됨 
    } else {
      console.log('폴더가 존재하는지 확인하시오');
    };
  }
});



connetion.end();
