const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const url = require('url');
const port = 3000;

http.createServer( (req,res)=> {
  
      let _url = req.url;
      let pathname = url.parse(_url, true).pathname;
      let urlObject = url.parse(_url, true).query // Object
      let urlString = url.parse(_url, false).query // String
      

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
          // console.dir(pathname);
          console.log(urlObject);
          // console.log(typeof urlString);
          console.log(qs.parse(urlString));

          
          fs.writeFile('./memo.txt', urlObject.id  , (err,data) => {
            if(err) throw err;
          })
          
        });
      }
      
      else if(pathname === '/postlogin') {
        req.on('data', function(chunk) {
            console.log(chunk);
            console.log(chunk.toString());
            let chunkString = chunk.toString();

            console.log(qs.parse(chunkString))

            let chunkObject = qs.parse(chunkString)

            // res.writeHead(200,{'Content-Type' : 'text/html'});
            fs.writeFile('./postmemo.json', JSON.stringify(Object(chunkObject),null) , (err) => {
              if(err) throw err;
            });
            res.end();
          });
        }
      }).listen(port, function() {
        console.log('server is running >>>')
      })