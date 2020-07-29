//express 사용해보기

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const result = [];
    const multipleNumber = 9;
    for (let i = 1; i < 5; i++) {
        //9*1~ 9*4 까지 result에 저장
        result.push({
            number: `${multipleNumber}X${i}`,
            multiple: multipleNumber * i,
        });
    }
    //객체로 입력 => json 형태로 전송되어 출력
    response.send(result);
});
//404에러를 전송한다
app.get('/error', (request, response) => {
    response.status(404).send('404 ERROR');
});

app.listen(3000, () => {
    console.log('Server is running port 3000!')
});