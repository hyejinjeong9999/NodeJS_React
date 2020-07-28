//http 요청을 보내 응답 받아보기
//request({옵션}, 호출한 후 실행할 함수)을 이용해 웹에서 데이터 받을 수 있음

const request = require('request');
request(
    {
        url: 'https://www.google.com/',
        method: 'GET',
    }, (error, response, body) => console.log(body));