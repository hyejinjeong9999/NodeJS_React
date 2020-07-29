//ejs 모듈 : 웹 페이지를 동적으로 처리하는 템플릿 엔진 모듈
//특정 형식의 문자열을 HTML 형식의 문자여롤 변경
const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    //ejs 파일 읽기
    fs.readFile('154_ejs_example.ejs', 'utf-8', (error, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        //ejs 문자열dls data를 HTML 형식으로 변경
        response.end(ejs.render(data));
    });

}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1.:50000')
});