-- route.js에서 사용한 데이터베이스&테이블 기반입니다. 
-- 에러가 발생한다면 컬럼명을 적절하게 변경한 뒤 사용할 것 
CREATE DATABASE userdata;

CREATE TABLE IF NOT EXISTS userinfo (
  id int(12) NOT NULL,
  user_id varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 
DEFAULT CHARSET=utf8;


-- 데이터 INSERT 테스트용
INSERT INTO userinfo (id, user_id, name, password, email) VALUES (1, 'test', 'test', 'test@test.com');
