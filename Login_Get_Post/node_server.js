const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');
const port = 3000;

http.createServer( (req,res)=> {
  
      let _url = req.url;
      let pathname = url.parse(_url, true).pathname;
      let urlObject = url.parse(_url, true).query
      
      if(pathname === '/') {
        fs.readFile('./index.html' ,'utf8' ,function(error, data) {
          res.writeHead(200, {'Content-Type' : 'text/html'});
          res.end(data);
        });
      }
      else if(pathname === '/getlogin') {
        fs.readFile('./index.html' ,'utf8' ,function(error, data) {
          res.writeHead(200, {'Content-Type' : 'text/html'});
          res.end(data);
          console.dir(pathname);
          console.log(urlObject)

          fs.writeFile('./memo.txt', urlObject.id  , (err,data) => {
            if(err) throw err;
          })

        });
      }
      
    else if(pathname === '/postlogin') {
      // req.on('data', function(chunk) {
      //   console.log(chunk.toString());
      //   let data = querystring.parse(chunk.toString());
      //   res.writeHead(200,{'Content-Type' : 'text/html'});
      //   res.end('ID :' + data.id + ' ' + 'PW :' + data.pw);
      // });
      fs.readFile('./index.html' ,'utf8' ,function(error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
        console.dir(pathname);
        console.log(urlObject)

        fs.writeFile('./postmemo.txt', urlObject.id  , (err,data) => {
          if(err) throw err;
        })

      });
    }
  }).listen(port, function() {
    console.log('server is running >>>')
  })