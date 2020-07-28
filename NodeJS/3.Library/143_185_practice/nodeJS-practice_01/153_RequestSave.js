const crawler = require('./crawler');
const cheerio = require('cheerio');
const fs = require('fs');

const parse = (decodedResult) => {
    // console.log(decodedResult);
    const $ = cheerio.load(decodedResult);
    //div 안에 a태그인 값을 찾아 titles에 저장
    const titles = $('div').find('a');

    titles.each((index, element) => {
        const title = $(element).text();
        console.log(title);
        fs.appendFile('./titles.txt', `${title}\n`,(error)=>{
            console.log(error);
        })
    });

};

//네이버 경제를 입력해 호출
crawler.crawl(parse)({ query: '샤로수길 맛집' })
