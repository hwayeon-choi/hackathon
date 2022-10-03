//여기에 찍혀질 문서 어느 부분에 입력데이터를 받는 태그가 존재한다면 어떻게 처리될까요?
const element = {
    header: "<header> header </header>",
    body: "<body> body </body>",
    footer: "<footer> footer </footer>",
    form: `<form id="log-in-form" method="GET">
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="password" placeholder="password" />
        </form>
        <button type="submit" form="log-in-form"> login </button>`
}
const main = `
${element.header}
${element.form}
${element.body}
${element.footer}
`;

let http = require('http');
let fs = require('fs');

// import http from 'http';
// import fs from 'fs';
http.createServer(function(request, response) {
    const data = fs.readFileSync('./index.html');
    response.writeHead(200, {'content-type':'text/html; charset=utf-8'});
    response.write(main);
    response.end();
}).listen(5550, function(){
    console.log('서버테스트');
    
})
