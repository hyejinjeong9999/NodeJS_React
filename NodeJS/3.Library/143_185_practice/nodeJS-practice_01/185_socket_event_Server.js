
//express 모듈추출, 객체 생성 한번에
const app = require('express')();
//http 모듈 추출, createServer 메소드 호출한 후 express 서버 생성
const server = require('http').createServer(app);

//183_Socket_HTML 파일 읽어오기
app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/185_Socket_event.html`)

});

//socket.io를 서버와 연결
const io = require('socket.io')(server);

//"connection" : 웹클라이언트가 웹 소켓 서버에 접속할때 발생하는 이벤트
io.on('connection', (client) => {
    console.log('Client connection');
//html에서 'clinetmsg' 로 data가 들어오면 그걸 출력
    client.on('clientmsg', (data) => {
        console.log('This is client Data:',data);
        //data를 다시보냄 => 클라이언트 콘솔에 출력
        client.emit('msg',data);
    });
    //status 로 들어오면 3초에 한번씩 hello socekt.io 출력
    client.on('status', () => {
        console.log('Status event(Server)');
        setInterval(()=>{
            //msg2 라는 이름으로 hello socket io 전송
            //html에 써짐
            client.emit('msg2','Hello socket.io');
        },3000);
        
    });

});



server.listen(3000, ()=>{
    console.log('Server is running port 3000!')
});