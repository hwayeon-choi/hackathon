LOAD DATA LOCAL INFILE 'D:/2022_CHOY/github-team-project/hackathon/database/public-datas/place_category_detail_input.csv'
INTO TABLE place_detail
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

//infile의 출처는 바꾸는데 꼭 주의할 것 