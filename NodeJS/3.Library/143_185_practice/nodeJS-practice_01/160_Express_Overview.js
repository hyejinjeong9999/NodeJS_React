const express = require('express');
//메소드로 app 생성
const app=express();
//get으로 / 가 호출되었을 경우
//해당 로직을 실행하고
//app.listen으로 서버를 동작시킴
app.get('/',(request,response)=>{
    response.send('Hello express module');
});

app.listen(3000,()=>{
    console.log('Server is running port 3000!');
});