//express bodyparser 사용해보기

const express = require('express');
const bodyparser = require('body-parser')
//express 객체 생성
const app = express();

//application/x=www-form-urlencoded 파싱
app.use(bodyparser.urlencoded({extended:false}));

//application/json 파싱
app.use(bodyparser.json());
//login 폴더에 접근
//http://localhost:3000/login.html 로 접속하면 html 창이 보여진다
app.use(express.static(`${__dirname}/login`));

//아이디 비밀번호 값 저장
app.use((request,response)=>{
    const userId = request.body.userId || request.query.userId;
    const userPassword = request.body.password || request.query.password;
    
    response.writeHead('200',{'Content-Type': 'text/html;charset=utf8'});
    response.write('<h1>Login ID와 PW 결과 값입니다.</h1>');
    response.write(`<div><p>${userId}</p></div>`);
    response.write(`<div><p>${userPassword}</p></div>`);
    response.end(JSON.stringify(request.body,null,2));
});
app.listen(3000,()=>{
    console.log('Server is running port 3000!');
});
