// //서버 생성과 실행
let http = require('http');

let server = http.createServer();

server.listen(50000, () =>{
    console.log('서버가 동작중입니다, http://127.0.0.1:50000');
});

//웹서버 종료
let testClose = function(){
    server.close();
    console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
};

//5초후 종료
setTimeout(testClose,5000);

// console.log('========event=======')

http = require('http');
server = http.createServer();
//요청받을 때
server.on('request',() =>{
    console.log('Request');
});
//접솔될때
server.on('connection', () =>{
    console.log('Connection');
})
//서버 종료될때
server.on('close',() => {
    console.log('Close');
});

server.listen(50000, ()=>{
    console.log('서버가 동작중입니다, http://127.0.0.1:50000');

});

testClose = function() {
    server.close();
    console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
}

setTimeout(testClose,10000);

