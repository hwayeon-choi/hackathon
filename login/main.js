const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('서버 가동');
});

app.listen(8005);
