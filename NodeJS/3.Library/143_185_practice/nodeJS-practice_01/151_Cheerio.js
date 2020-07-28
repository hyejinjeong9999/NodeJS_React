//cheerio 모듈 불러오기
const cheerio = require('cheerio')
//$변수에 <html~> 로드함
const $ = cheerio.load('<html><h2 class="title">hello</h2></html>');
//$에 로드된 값을 처리
//JQuery문법 : title을 포함하는 h2요소를 가져오기
const titleText = $('h2.title').text();
//받아온 내용 출력
console.log('titleTest:', titleText);
