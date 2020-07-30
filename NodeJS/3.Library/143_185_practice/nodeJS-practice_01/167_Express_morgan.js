//morgan 미들웨어
//로그출력

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan(':method+:date'));
app.use(morgan(':status+:url'));
app.use((request,response)=>{
    response.send('express morgan');
});

app.listen(3000,()=>{
    console.log('Server is running port 3000!');
});