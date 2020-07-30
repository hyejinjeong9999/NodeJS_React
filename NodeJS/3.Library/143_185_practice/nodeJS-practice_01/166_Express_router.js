//router : 라우팅을 지원하는 라이브러리
//라우팅 : URI의 정의, URI가 클라이언트 요청에 응답하는 방식
//express 모듈 내 페이지 라우팅 기능이 기본적으로 내장되어 있음

const express = require('express');
const app = express();
//라우터를 지정하기 위해 get메소드 사용
app.get('/one', (request, response)=>{
    response.send('<a href="/two">Street 200</a>');

});

app.get('/two', (request, response)=>{
    response.send('<a href="/one">Street 100</a>');

});
//매개변수를 전달해 출력
app.get('/three/:number', (request, response)=>{
    const streetNumber = request.params.number
    response.send(`${streetNumber}Street`);
});

app.get('/four/:number', (request, response)=>{
    const aveNumber = request.params.number
    response.send(`${aveNumber}Ave`);
});

app.listen(3000,()=>{
    console.log('Server is running port 3000!');
});