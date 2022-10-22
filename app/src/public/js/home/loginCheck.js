const db = require("../../../config/db");


// 로그인 체크 함수
const userCheck = (req, res, next) => {
  if (!req.session.id) {
    req.session.destroy();
    return res
      .clearCookie("connect.sid")
      .json({ status: 401, statusMessage: "로그인에 실패하였습니다." });
  }

  const SQL = `SELECT * FROM users WHERE id = '${req.session.id}'`;

    db.query(SQL, (err, row, filed) => {
    if (err) console.error(err);

    req.userInfo = row[0];
    req.session.userInfo = row[0];
    next();
  });
};

module.exports = userCheck;