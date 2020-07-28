//http 요청을 보내 응답 받아보기
//request({옵션}, 호출한 후 실행할 함수)을 이용해 웹에서 데이터 받을 수 있음
//qs를 통해 파라미터 요청 가능

//설치한 request 모듈 가져오기 => http 요청
const request = require('request');
//설치한 iconv-liet 모듈 가져오기 => 인코딩 변경
const iconv = require('iconv-lite');

//url, get 
request(
    {
        url: 'https://search.naver.com/search.naver',
        method: 'GET',
        qs: { query: '신사역맛집' },
        //인코딩 설정 (한글일땐 null을 해줘야함)
        encoding: null,
        //요청에 대한 응답처리 => body
    }, (error, response, body) => {
        //body를 출력하면 한글이 깨짐
        //디코드 후 출력
        const decodeResult = iconv.decode(body, 'utf-8');
        console.log(decodeResult);
    });