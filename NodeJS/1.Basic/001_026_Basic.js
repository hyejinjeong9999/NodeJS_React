
//다양한 출력 방법
//Es5버전
function printHelloEs5(){
    console.log('hello ex5');
}
//Es6버전
const printHelloEs6 = () => {
    console.log('hello es6');
}

printHelloEs5();
printHelloEs6();

console.log('=========console.log========');

console.log('hello');
//두개 같이 사용 가능
console.log('hello','bye');

//formatting해서 출력하기
console.log('name:%s', 'hyejin');
//문자 : %s
console.log('age:%d', 27);
//숫자 : %d
console.log('pi:%d', 3.14);
console.log('math:%d science:%d', 92,84);
//여러개 사용 가능
console.log('name:%s age:%d', 'hyejin',27);
console.log('name:%s math:%d science:%d', 'hyejin',92,84);
console.log('name:%s math:%s science:%s', 'hyejin','92','84');

console.log('=========backtick formatting========');

//변수 선언
const greeting1 = 'hello';
const greeting2 = 'bye';
const name1 = 'jeong';
const name2 = 'hyejin';

//변수 합쳐서 새로운 변수만들기
const statement = `${greeting1}! my name is ${name2}`;
const statement2 = `${greeting2}! my name is ${name2}`;

//합쳐서 출력하기
console.log(`${greeting1}! my name is ${name1}`);
console.log(`${greeting2}! my name is ${name1}`);

// 합쳤던 변수 출력하기
console.log('statment : ',statement);
console.log('statment2 : ',statement2);

console.log('===========변수 선언하기============')
let fruit = 'apple';
console.log('fruit:', fruit);
//fruit의 값을 변경
fruit = 'grape';
console.log('fruit:', fruit);

//var는 변수 중복선언이 가능하다
var variable1 = 'hello';
var variable1 = 'bye';
console.log(variable1);

//let은 변수 중복선언이 불가능 하다 => 오류
// let variable2 = 'hello';
// let variable2 = 'bye';
// console.log(variable2);

console.log('=======상수=======')
let fruit1 = 'apple';
fruit1 = 'banana';
const pi  = 3.14;
console.log ('fruit : ' , fruit1);
console.log('pi : ', pi);
//pi = 3.15 <= 오류!!

console.log('========문자/숫자=========')
const string10 = '10';
const string20 = '20';

const number10 = 10;
const number20 = 20;

//String의 경우 문자열의 합이다
console.log('string:%s', string10 + string20);
//number의 경우 연산이 된다
console.log('number:%d', number10 + number20);
//String과 number의 합은 문자열로 변경되어 합쳐진다
console.log('String + number:%s', string10 + number20);

const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN('234');
const isNaNHello = isNaN('hello');

console.log('isNaN123 : ' , isNaN123);
console.log('isNaNMinus123 : ' , isNaNMinus123);
console.log('isNaN234 : ' , isNaN234);
console.log('isNaNHello : ' , isNaNHello);


console.log("==========문자열=========")
const string = 'hello';
const string2 = 'The method then selects elements from the start argument, and up to (but not including) the end argument.';

console.log('string : ', string.length);
console.log('string2 : ', string2.length);
//문자열은 0부터 시작한다
console.log('string[0] :', string[0])
console.log('string2[104] :', string2[104]);

const string3 = 'hello';
const string4 = 'helelelelelelelelello';
const string5 = 'The method then select elements from the start argument.';

console.log('hel:', string3.indexOf('hel'));
console.log('el:', string3.indexOf('el'));
console.log('elelelel : ',string4.indexOf('el'));
console.log('method : ', string5.indexOf('method'));
console.log('bye : ', string5.indexOf('bye'));

console.log("============배열==========")
//배열 선언 방법 1 <<- 이걸 사용하는 것이 좋음
const numbers = [1,2,3];
const strings = ['hello','bye', 'welcome'];

//배열 선언 방법 2
const numbers2 = new Array (1,2,3);
const strings2 = new Array ('hello', 'bye', 'welcome');

console.log("numbers : " ,numbers );
console.log("numbers2 : " ,numbers2 );
console.log("strings : " ,strings );
console.log("strings2 : " ,strings2 );

//순서대로 넣는 방법
const arNumbers = [];
arNumbers.push(1);
arNumbers.push(2);
arNumbers.push(3);

//한꺼번에 넣는 방법
const arTexts=  [];
arTexts.push('hello','welcome','bye');

console.log(arNumbers);
console.log(arTexts);

//배열이 하나도 없을때 출력할 경우
const arCoffee = [];
console.log(arCoffee.length);
console.log(arCoffee[0]);

//배열에 값이 들어있을 때 출력
arCoffee.push('아메리카노','라떼','카푸치노');
console.log(arCoffee.length);
console.log(arCoffee[0]);
console.log(arCoffee[1]);

console.log('=========JSON===========')
//선언 방식1 : 나중에 추가하는 방식
const user={};
user.name = 'kyeongrok';
user.age = 31;
console.log(user);

//선언방식 2 : 한번에 선언하는 방식
const user2 = {name : 'kyeongrok', age :31};
console.log(user2);

//값 일부분 출력해보기
console.log('user.name : ' , user.name);
console.log('user.age : ' , user.age);
//필드 추가해보기
user.job = 'developer';
user.nation = 'korea';
console.log(user);
//변수로 출력해보기
const memberName = 'age';
console.log(user[memberName]);

console.log('======typeof======')

const pi2 = 3.14;
const name3 = 'kyeongrok';
console.log('hello : %s', typeof 'hello');
console.log('"20" : %s', typeof '20');
console.log('pi : %s', typeof pi);
console.log('name : %s', typeof name3);
console.log('30 : %s', typeof 30);
console.log('[] : %s', typeof[]);
console.log('{} : %s', typeof{});

console.log('=========boolean=========');
console.log('10>20 : ', 10 > 20);
console.log('30>20 : ', 30 > 20);

const isTrue = true;
const isFalse = false;

console.log('isTrue : ', isTrue);
console.log('isFalse : ', isFalse);

console.log('typeof (ture) : ', typeof(true));
console.log('typeof (flase) : ', typeof(false));

const number = !1;
console.log(number);

console.log('======증감연산자======');
let number4 = 1;
console.log('number : ', number4);
//기존의 값 +1
number4 +=1;
console.log('after number +=1: ', number4);
//기존의 값 -1
number4 -=1;
console.log('after number -=1: ', number4);
//기존의 값 +10
number4 +=10;
console.log('after number +=10 : ', number4);
//기존의 값 -5
number4 -=5;
console.log('after number -=5 : ', number4);

console.log('=====비교연산자=====')
const a = 5;
const b = 6;

//type 신경없이 비교한다
if(a == 5){
    console.log('1 : ',a==5);
    console.log('2 : ', a==b);
    //a는 number 5고 '5'는 문자형이지만 같게 나옴
    console.log('3 : ', a=='5');
}
//type 값까지 같이 비교한다
if (a===5){
    console.log('4 : ',  a===5);
    console.log('5 : ',  a===b);
    //a는 number고 '5'는 문자형이기 때문에 다름
    console.log('6 : ',  a==='5');

}
//5>6이 false기 때문에 출력이 안된다
if(a>b){
    console.log('7 : ', a>b);
}
if(a<b){
    console.log('8 : ', a<b);
}

if(a >=5){
    console.log('9 : ', a >=5);
    console.log('10 : ', a >=b);
}

if( a<=5){
    console.log('11 : ', a <=5);
    console.log('12 : ', a <=b);
}

console.log('===논리연산자===')
const value30 = 30;
const value50 = 50;
//and : 둘다 true여아 true
const andTrueTrue = value30 >=30 && value50 >=30;
const andTrueFalse = value30 >=30 && value50 >=100;
const andFalseFalse = value30 >=40 && value50 >=100;
//or :  둘 중 하나만 true여도 ture
const orTrueTrue = value30 >=30 || value50 >=30;
const orTrueFalse = value30 >=30 || value50 >=100;
const orFalseFalse = value30 >=40 || value50 >=100;

console.log('======and=====');
console.log('andTrueTrue : ',andTrueTrue);
console.log('andTrueFalse : ',andTrueFalse);
console.log('andFalseFalse : ',andFalseFalse);
console.log('======or=====');
console.log('orTrueTrue : ',orTrueTrue);
console.log('orTrueFalse : ',orTrueFalse);
console.log('orFalseFalse : ',orFalseFalse);

console.log('===삼항연산자===')

const num1 = 1;
const num2 = 2;
const list = [1,2,3,4];
const emptyList = [];
//삼항연산자 : 변수에 값넣기
//false이기 때문에 num2 가 나온다
const result = num1 > num2 ? 'num1' : 'num2';
console.log(result, '이가 더 큽니다');
//삼항연산자 : 결과로 출력하기
//ture기 때문에 list가 출력된다
list.length >0 ? console.log(list) : console.log('list 가 비었습니다');
//flase기 때문에 list가 비었습니다 출력
emptyList.length >0 ? console.log(list) : console.log('list가 비었습니다');