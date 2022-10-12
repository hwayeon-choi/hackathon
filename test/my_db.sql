CREATE DATABASE my_db;

CREATE TABLE IF NOT EXISTS Users (
  id int NOT NULL,
  user_id varchar(50) NOT NULL,
  user_password varchar(50) NOT NULL,
  user_name varchar(50) NOT NULL,
  user_email varchar(50) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 
DEFAULT CHARSET=utf8;


-- 데이터 INSERT 테스트용
INSERT INTO Users (id, user_id, user_password, user_name, user_email) VALUES (1, 'test', 'test', 'test', 'test@test.com');