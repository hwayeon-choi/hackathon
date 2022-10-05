const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World Express');
});

app.listen(8005);