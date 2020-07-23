//fs를 이용해 파일 일어오기
const fs = require('fs');
const http = require('http');

http.createServer((request,response)=>{
    //request 요청이 들어오면 html 파일 읽기
    fs.readFile('./136_example.html',(error, data)=>{
        response.writeHead(200,{'Content-Type':'text/html'})
        response.end(data);
    });

}).listen(50000,()=>{
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});