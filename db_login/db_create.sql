CREATE TABLE IF NOT EXISTS userdata (
  id int(12) NOT NULL,
  username varchar(50) NOT NULL,
  _password varchar(255) NOT NULL,
  email varchar(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 
DEFAULT CHARSET=utf8;


INSERT INTO userdata (id, username, _password, email) VALUES (1, 'test', 'test', 'test@test.com');
