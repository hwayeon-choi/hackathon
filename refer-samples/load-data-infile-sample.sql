; 데이터 파일의 값을 연산해서 테이블의 칼럼에 저장하려는 경우
; 사용자 변수에 값을 담은 후 SET절로 가공

; sample#1
LOAD DATA INFILE '/tmp/employees.csv'
IGNORE
INTO TABLE employees
FIELDS
	TERMINATED BY ','
	OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"'
LINES
	TERMINATED BY '\n'
	STARTING BY ''
(emp_no, birth_date, first_name, @middle_name, @last_name, gender, hire_date)
SET last_name=concat(@middle_name, ' ', @last_name);

; sample#2
LOAD DATA INFILE [파일경로]
INTO TABLE [테이블명]
CHARACTER SET euckr (한글 깨짐 방지)
FIELDS TERMINATED BY ',' (csv는 ,로 열 구분)
LINES TERMINATED BY '\N' (csv는 줄바꿈으로 행 구분)
IGNORE 1 ROWS (첫번째 행은 컬럼명이므로 무시)
(@csv파일의 컬럼1, @csv파일의 컬럼2 ...)
SET 테이블의 컬럼1 = @csv파일의 컬럼1,
테이블의 컬럼2 = @csv파일의 컬럼2,