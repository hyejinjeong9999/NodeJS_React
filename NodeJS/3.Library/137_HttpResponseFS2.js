const fs = require('fs');
const http = require('http');
//이미지, 동영상 파일 올려보기

//서버 1 => img 파일
http.createServer((request,response)=>{
    //read 파일로 cat.jfif 파일 가져오기
    fs.readFile('./cat.jfif',(error,data)=>{
        //타입은 image이다
        response.writeHead(200,{'Content-Type': 'image/jpeg'});
        //읽은 파일을 응답객체에 쓴다
        response.end(data);

    });
}).listen(50001,()=>{
    console.log('서버가 동작 중입니다 , http://127.0.0.1:50001')
});
//서버2 =>vedio 파일
http.createServer((request,response)=>{
    //readFile로 dog.mp4 파일 가져오기
    fs.readFile('./dog.mp4',(error,data)=>{
        //타입은 video다
        response.writeHead(200,{'Content-Type':'video/mp4'});
        //읽은 파일을 응답객체이 쓴다
        response.end(data);
    });

}).listen(50002,()=>{
    console.log('서버가 동작 중입니다 , http://127.0.0.1:50002')
    
});