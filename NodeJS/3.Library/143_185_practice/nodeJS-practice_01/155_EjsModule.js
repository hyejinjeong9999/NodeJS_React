
const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    //ejs 파일 읽기
    fs.readFile('155_ejs_example.ejs', 'utf-8', (error, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        //ejs 문자열dls data를 HTML 형식으로 변경
        response.end(ejs.render(data, {
            table_name: 'Multiplication table 19 X ?',
            number: '19',

        }));
    });

}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1.:50000')
});