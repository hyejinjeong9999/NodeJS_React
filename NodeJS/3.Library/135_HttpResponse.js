
/**
 * response :  사용자의 요청에 응답을 줄 때 사용함
 * writeHead : 응답헤더 작성
 * end : 응답 본문 작성
 */
require('http').createServer((request, response)=>{
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('hello World');
}).listen(50000,()=>{
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});