//request 객체의 url 속성을 활용해 페이지 구분해보기

const fs = require('fs');
const http = require('http');
const url = require('url');

//서버 생성
http.createServer((request, response) => {
    //요청한 url정보
    let pathname = url.parse(request.url);
    pathname = url.parse(request.url).pathname;

    //만약 요청한게 '/'면 138_index.html 열기
    if (pathname === '/') {
        fs.readFile('./138_index.html', (error, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
            //요청한 rul 값 보여주기
            console.log(url.parse(request.url));
        });
        //요청한 값이 /example 이면 163_example 열기
    } else if (pathname === '/example') {
        fs.readFile('./136_example.html', (error, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
             //요청한 rul 값 보여주기
            console.log(url.parse(request.url));
        });
    }
}).listen(50000,()=>{
    console.log('서버가 동작 중입니다 : http://127.0.0.1:5000')
})