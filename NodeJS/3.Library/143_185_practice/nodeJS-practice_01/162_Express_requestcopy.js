//express 사용해보기

const express = require('express');

const app = express();

app.use((request,response)=>{
    //heager로 요청 헤더 추출하기
    //웹 브라우저로 HTTP요청시 User-Agent 속성값을 가지고 있음
    const agent = request.header('User-Agent');
    const paramName = request.query.name;
    const browserChrome = 'Hello Chrome';
    const browserOthers = 'Hello Others';


    console.log(request.headers);
    console.log(request.baseUrl);
    console.log(request.hostname);
    console.log(request.protocol);

    //agent의 속성값을 확인해
    //크롬이면 'Hello Chrome출력
    if(agent.toLowerCase().match(/chrome/)){
        response.write(`<div><p>${browserChrome}</p></div>`);
        //아니면 Hello others 출력
    }else{
        response.write(`<div><p>${browserOthers}</p></div>`);
    }
    //요청 header 추출 결과를 출력
    response.write(`<div><p>${agent}</p></div>`);
    //매개변수 출력
    response.write(`<div><p>${paramName}</p></div>`);
    response.end();

});

app.listen(3000,()=>{
    console.log('Server is running port 3000!');
});