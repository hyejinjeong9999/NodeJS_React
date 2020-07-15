console.log('=====.replace=====')
const greeting = 'hello';
let dateString = '2017-08-24T11:00:00';
const smallBracket = '()';

//replace : 특정 문자열을 바꿈
const replacedGreeting = greeting.replace('el','');
const replacedDateString = dateString.replace('T',' ');
const middleBracket = smallBracket.replace('(','{').replace(')','}');

//출력
console.log('el 없애기 : %s', replacedGreeting);
console.log('T를 공백으로 : %s', replacedDateString);
console.log('() => {} : %s', middleBracket);

console.log('=====.split()=====')
//split
dateString = '2017-08-24 11:00:00';
const date = dateString.split(' ')[0]; //공백을 기준으로 앞부부분
const time = dateString.split(' ')[1]; //공백을 기준으로 뒷부분

//print
console.log('date : %s', date);
console.log('time : %s', time);

//b를 기준으로나눔 => b를 기준으로 쪼개진 list가 출력됨
let result = 'aAbcC'.split('b');
console.log('result:', result); 

console.log('=====.subString=====')
const string = 'abcdefghijklmnopqrstuvwxyz'

const substring1 = string.substring(0,4);
const substring2 = string.substring(8,11);
const substring3 = string.substring(24,25);

console.log('0,4:',substring1);
console.log('8,11:',substring2);
console.log('24,25:',substring3);

console.log('=====Number()=====')
const order = {no:1, productName:'티셔츠',price:'30000'};
const order2 = {no:2, productName:'청바지',price:'45000'};
const order3 = {no:3, productName:'shoes',price:'55.70'};
const order4 = {no:4, productName:'sunglass',price:'120.80'};

//opreration
//변환 전 -> 덧셈 연산이 아니라 문자열이 붙음
const concatenate = order.price + order2.price;
// parseInt : string 숫자로 변환 , 소수점은 생략
const sum1 = parseInt(order.price, 10) + parseInt(order2.price,10);
const sumParseInt = parseInt(order3.price,10) + parseInt(order4.price,10);
// Number : 소수점을 포함해서 숫자로 변환
const sumNumber = Number(order3.price) + Number(order4.price);

//print
console.log("order1['price'] + order2['price'] :%s",concatenate);
console.log("parseInt(order1['price']) + parseInt(order2['price']) : %s", sum1);
console.log("parseInt(order3['price']) + parseInt(order4['price']): %s", sumParseInt);
console.log("Number(order3['price']) + Number(order4['price']) : %s", sumNumber);

