
//스키마 생성

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now  }
});

/*1. 첫번째 인자 : 해당 collection의 단수적 표현을 나타내는 문자열
                실제로는 Books로 자동 변환되어 사용한다
*/
module.exports = mongoose.model('Book', bookSchema);