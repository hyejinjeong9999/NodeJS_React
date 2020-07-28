
const http = require('http');

http.createServer((request, response) => {
    //클라이언트에게 cookie를 할당
    //set-Cookie 속성을 이용
    if (request.headers.cookie) {
        //쪼개기 => 이후에 expess 모듈로 처리할 예정
        const cookie = request.headers.cookie.split(';').map((element) => {
            element = element.split('=');

            return {
                name: element[0],
                value: element[1],
            };
        });

        response.end(`<h1>${JSON.stringify(cookie)}</h1>`);
    } else {
        //set Cookie : 처음에 쿠키 값 설정
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['soju = grilledPork', 'beer = chicken'],
        });
        //cookie output
        //맨 처음 보여질 화면
        response.end(`<h1>${'Create Cookie'}</h1>`);
    }

}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:5000');
});