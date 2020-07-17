//정규표현식
console.log('=====\이스케이프=====');
// 내가 필요한 부분만 골라낼 수 있다.
// '/<정규표현식>/g' 을 통해 문자열 전체에서 해당 부분을 찾음 
// '\'는 연산자, 특수문자, 예약어 앞에 사용해서 연산자가 아닌 문자열이라고 알려주는 용 

let string = '<h1>:::특별가 =99,000원:::</h1>';
//<h1>을찾아서 없애기
let result1 = string.replace(/<h1>/g,'');

console.log('result1 : ',result1);
//<h1>과 </h1> 없애기 '/' 가 연산자가 아님을 알려주기 위해 '\'을 사용
let result2 = string.replace(/<h1>/g,'').replace(/<\/h1>/g,'');
console.log('result2 : ',result2);

console.log('=====점=====');

//'.' : 한개의 글자를 의미
string = '<h1>특별가 - </h1><h2>99,000원</h2>';
//<> 안의 두글자짜리 없애기 ;<h1>, <h2>가 사라짐
result1 = string.replace(/<..>/g,'');
//< 로시작하는 3글자 없애기 <h1>, </h1 , <h2>,</h2 가 사라짐 
result2 = string.replace(/<.../g,'');
console.log('<..> :', result1);
console.log('<...> :', result2);


console.log('=====.{0,1}=====');
//.{0,1} : 임의의 단어가 0~1글자 사이이다
//임의의 단어들을 지울때 사용한다

string = '<h1>특별가 - </h1><h2>99,000원</h2>';
let stringDiv = '<div>특별가 - </div><h2>99,000원</h2>';
//< + 0~1글자 짜리 단어 + h1> 인 단어들을 없애기
// => <h1> , </h1> 이 사라짐
const replaceH1 = string.replace(/<.{0,1}h1>/g,'');
//<+ 0~4글자 짜리 단어 +> 인 단어들을 없애기
//<div>, </div>가 사라짐
const replaceTags = stringDiv.replace(/<.{0,4}>/g,'');

console.log(replaceH1);
console.log(replaceTags);

console.log('=====[]=====');
//[문자] -> 안에 들어있는 문자들 모두 바꾸기

string = '(<h1>:::특별가 - 99,000원:::</h1>)';
//()를 찾아서 없애기
const replacedBracket = string.replace(/[()]/g,'');
//(),/,-없애기
const replaceBracketOrSlachHypernComma = string.replace(/[()/\-,]/g,'');
console.log('바꾸기 전 ---->', string);
console.log('()없애기 ---->',replacedBracket);
console.log('/-없애기 ---->',replaceBracketOrSlachHypernComma);

console.log('=====.match=====');
//.match(정규표현식) : 정규표현식에 맞는 데이터 추출 
let text = 'hello my name is hyejin';
//알파벳 a~l 사이에서 1개이상 3개이하의 문자열 추출하기
let matched = text.match(/[a-l]{1,3}/g);
console.log(matched);
