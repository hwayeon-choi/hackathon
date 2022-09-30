//mysql 모듈 불러오기
const mysql = require('mysql');
const fs = require('fs');

//mysql 연결 불러오기
const connetion = require('./db-con-set');


//*특정 문자열 포함된 행 가져오기 & json 파일로 저장

let findTextToRow = '애견운동장';
let fileName = 'pet_ground';

connetion.query(`SELECT * FROM place_detail WHERE place_type LIKE '%${findTextToRow}%'`, function(error, results){
  if(error) {
    console.log(error);
  } else {
    console.log(results);
    //json파일로 저장하기
    const exString = JSON.stringify(results);
    if(fs.existsSync('./DB_filter')){
      fs.writeFileSync(`./DB_filter/${fileName}.json`, exString);
      //하위 폴더에 지정한 이름으로 저장됨 
    } else {
      console.log('폴더가 존재하는지 확인하시오');
    };
  }
});

connetion.end();
