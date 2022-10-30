CREATE DATABASE place_category;

-- 장소별 카테고리
CREATE TABLE place_type (
  id INT NOT NULL AUTO_INCREMENT,
  place_type_id INT NOT NULL COMMENT '고유 id 설정',
  restaurant VARCHAR(100) NOT NULL COMMENT '맛집',
  cafe VARCHAR(100) NOT NULL COMMENT '카페',
  accommondation VARCHAR(100) NOT NULL COMMENT '숙소',
  park VARCHAR(100) NOT NULL COMMENT '공원',
  pet_ground VARCHAR(100) NOT NULL COMMENT '애견운동장',
  grooming_shop VARCHAR(255) NOT NULL COMMENT '미용',
  pet_hospital VARCHAR(255) NOT NULL COMMENT '동물병원',
  photo_spot VARCHAR(255) NOT NULL COMMENT '포토스팟',
  pet_rest VARCHAR(255) NOT NULL COMMENT '애견휴식',
  PRIMARY KEY (id)
);

-- 상세(place_detail)
CREATE TABLE place_detail (
  place_detail_id INT NOT NULL AUTO_INCREMENT,
  region VARCHAR(100) NOT NULL COMMENT '지역명',
  city VARCHAR(100) NOT NULL COMMENT '시,군명',
  place_type VARCHAR(100) NOT NULL COMMENT '업체유형',
  company_name VARCHAR(100) NOT NULL COMMENT '업체명',
  call_num VARCHAR(100) NULL COMMENT '연락처',
  _address VARCHAR(100) NULL COMMENT '주소',
  open_time VARCHAR(255) NULL COMMENT '이용시간',
  homepage VARCHAR(255) NULL COMMENT '홈페이지',
  parking VARCHAR(10) NOT NULL COMMENT '주차',
  wifi VARCHAR(10) NOT NULL COMMENT 'wifi',
  reservation VARCHAR(100) NULL COMMENT '예약방법',
  PRIMARY KEY (place_detail_id)
);


-- 견종
CREATE TABLE dog_type (
  dog_type_id INT NOT NULL AUTO_INCREMENT,
  small VARCHAR(100) NOT NULL COMMENT '소형견',
  middle VARCHAR(100) NOT NULL COMMENT '중형견',
  big VARCHAR(100) NOT NULL COMMENT '대형견',
  PRIMARY KEY (dog_type_id)
);

-- 해시태그
CREATE TABLE hashtag (
);

-- 테스트
CREATE TABLE test_tb (
  id INT NOT NULL AUTO_INCREMENT,
  cul1 VARCHAR(100) NOT NULL,
  cul2 VARCHAR(100) NOT NULL,
  cul3 VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);