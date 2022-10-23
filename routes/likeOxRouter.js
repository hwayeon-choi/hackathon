import express from 'express';
const router = express.Router()

router.get('/likeOX', (req, res) => {
  let userId = req.query.userId;
  let placeId = req.query.placeId;
  let sql = `SELECT EXISTS(SELECT * FROM favorite WHERE userid=${userId} AND placeid=${placeId}) AS dup;`
  con.query(sql, function(err, rows, fields){
    if(err) console.log(err);
    let resData
    if(rows===1){
      resData = true
    } else {
      resData = false
    }
    res.send(resData)
  })
})

import express from 'express';
module.exports = router;