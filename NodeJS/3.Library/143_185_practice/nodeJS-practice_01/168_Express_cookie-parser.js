//cookie-parser : 쿠키 추출

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set',(request,response)=>{
    console.log('Set Cookie 호출');
    response.cookie('user',{
        id: '0070',
        name: 'brain',
        autorized: true,
    });
    response.redirect('/get');

});//set으로 들어가면 쿠키를 저장하고 바로 쿠키값을 꺼냄

app.get('/get',(request,response)=>{
    console.log('Get Cookie 호출');
    response.send(request.cookies);
});

app.listen(3000,()=>{
    console.log('Server is running port 3000!')
})
