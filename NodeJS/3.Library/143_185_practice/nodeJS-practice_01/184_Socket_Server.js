
//express 모듈추출, 객체 생성 한번에
const app = require('express')();
//http 모듈 추출, createServer 메소드 호출한 후 express 서버 생성
const server = require('http').createServer(app);

//183_Socket_HTML 파일 읽어오기
app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/183_Socket_HTML.html`)

});

//socket.io를 서버와 연결
const io = require('socket.io')(server);
//"connection" : 웹클라이언트가 웹 소켓 서버에 접속할때 발생하는 이벤트
io.on('connection', (client) => {
    console.log('Client connection');
    client.on('disconnect', () => {
        console.log('Client disconnection');
    });

});

server.listen(3000, ()=>{
    console.log('Server is running port 3000!')
});