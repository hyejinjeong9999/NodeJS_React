const http = require('http');
const fs = require('fs');

//get. post 요청 방식 확인해보기
http.createServer((request, response) => {


    //request.method : get인지 post 방식인지 확인
    //만약 get 방식이라면
    if (request.method === 'GET') {
        fs.readFile('./140_example_2.html', (error, data) => {
            response.writeHead(200, { 'Context-Type': 'text/html' });
            //get 형식으로 들어온 값을 출력
            response.end(data);
            console.log(`${request.method}방식의 요청입니다`);

        });

    } else if (request.method === 'POST') {
        request.on('data', (data) => {
            response.writeHead(200, { 'Context-Type': 'text/html' });
            //post 형식으로 들어온 값을 출력
            response.end(data);
            console.log(`${require.method}방식의 요청입니다`);

        })

    }
}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:5000')
});