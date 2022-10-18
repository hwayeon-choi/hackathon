/* 위시리스트 */
else if(pathname === '/wishlist'){
  let sql1 = `SELECT placename FROM place WHERE placeid=any(SELECT placeid FROM favorite WHERE userid=1);`
  connection.query(sql1, function(err, rows, fields){
    if(err) console.log(err);
    /* 파일로 저장 */
    fs.writeFile('./inquiry-log/user-1.json', JSON.stringify(rows), 'utf-8',(error)=> {
      if(error === true) {
        console.error('this is error');
      }
    })
  });
  /* 다시 호출 */
  fs.readFile('./inquiry-log/user-1.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
    res.writeHead(200, {"content-type": "application/json; charset=utf-8"});
    res.write(JSON.stringify(data))
  })
}