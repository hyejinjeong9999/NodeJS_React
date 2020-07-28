//cheerio2 실행
//모듈 불러오기
const cheerio = require('cheerio');
//작성한 crawler 모듈 불러오기
const crawler = require('./crawler');

const parse = (decodedResult)=>{
   // console.log(decodedResult);
    const $ = cheerio.load(decodedResult);
    //div 안에 a태그인 값을 찾아 titles에 저장
    const titles = $('div').find('a');
    for(let i = 0; i< titles.length; i+=1){
        const title =$(titles[i]).text();
        console.log(title);
    }
};

//네이버 경제를 입력해 호출
crawler.crawl(parse)({query:'네이버경제'})
