SELECT *
INTO OUTFILE '저장할 경로/저장할 이름.확장자'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'ESCAPED BY '\\'
LINES TERMINATED BY '\n'
FROM 저장할 테이블;

# ----------------------------------------------------------

SELECT *
INTO OUTFILE 'C:/Users/Administrator/Desktop/export-test.json'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'ESCAPED BY '\\'
LINES TERMINATED BY '\n'
FROM place_detail;
# 위 방법에서는 보안 에러 발생 

SELECT "place_detail_id","region","city","place_type","company_name", "call_num","_address","open_time","homepage","parking","wifi","reservation"
UNION SELECT * FROM place_detail
INTO OUTFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/export-test2.json'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'ESCAPED BY '\\'
LINES TERMINATED BY '\n';

