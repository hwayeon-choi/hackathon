//mysql 모듈 불러오기
const mysql = require('mysql');
const fs = require('fs');
//mysql 연결 불러오기
const connetion = require('./mysql-connect-set');

//DB에서 데이터를 조회(mysql쿼리)해 json파일로 저장하는 함수
function conAndqsToJson(sqlQs, fileName){
  connetion.query(sqlQs, function(error, results){
    if(error) {
      console.log(error);
    } else {
      console.log(results);
      //↓json파일로 저장하기
      const exString = JSON.stringify(results);
      if(fs.existsSync('./DB_filter_save_to_json')){
        //↑하위에 해당 폴더가 존재한다면
        fs.writeFileSync(`./DB_filter_save_to_json/${fileName}.json`, exString);
        //↑지정한 이름으로 저장됨 
      } else {
        console.log('폴더가 존재하는지 확인하시오');
      }
    }  
  });
}

//* 특정 문자열 포함된 행 가져오기 & json파일로 저장
conAndqsToJson(`SELECT * FROM place_detail WHERE place_type LIKE '%동물병원%'`, 'pet_hospital');

//* 테이블 전체 데이터 json파일로 저장
conAndqsToJson(`SELECT * FROM place_detail`, 'all_test');


connetion.end();
