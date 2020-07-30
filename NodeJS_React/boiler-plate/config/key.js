//process.env.NODE_ENV  : 환경변수
if(process.env.NODE_ENV === 'production'){
    //prod.js에서 가져옴
    module.exports = require('/prod');
}else{
    //dev.js에서 가져옴
    module.exports = require('/dev');
}