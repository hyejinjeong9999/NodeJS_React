//cheerio를 활용해 필요한 부분 추출

//모듈 불러오기
const request = require('request');
const charset = require('charset');
const iconv = require('iconv-lite');


const crawl = callback => queryString =>request({
    url:'https://search.naver.com/search.naver',
    //인코딩 해결하기 위해 null값으로
    encoding : null,
    method : 'GET',
    qs : queryString,
    //10초가 지나면 응답 포기
    timeout : 1000,
    //리다이렉션할 경우 사이트 이동을 허용할지
    followRedirect : true,
    //리다이렉션을 최대 몇번 할 지
    maxRedirects:10,

},
(error, response, body)=>{
    //200 : 서버가 요청을 제대로 처리해 다운로드가 완료되었을 경우
    if(!error && response.statusCode===200){
        //헤더 정보의 인코딩 정보를 받아온다
        const enc = charset(response.headers, body);
        //인코딩 방식으로 body를 디코딩함
        const decodeResult = iconv.decode(body,enc);
        //해당 결과 콜백
        callback(decodeResult);
    }else{
        console.log(`error${response.statusCode}`);
    }
});
//다른 곳에서 사용할 수 있도록 모듈 추출
module.exports.crawl = crawl;