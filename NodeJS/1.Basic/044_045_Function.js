//함수 제작
function printHello() {
    console.log('hello');
}
printHello();

//ES6에서 사용하는 방법 function 대신 () => 를 이용한다
const printBye = () => {
    console.log('bye');
}
printBye();

console.log('====매개변수와 인자====')

//매개변수(파라미터)를 그대로 출력하는 함수
function printMessage(pMessage) {
    console.log(pMessage);
}
//함수매개변수에 hello를 넣음
printMessage('hello');

//매개변수를 그대로 출력하는 함수2
const printMessage2 = (pMessage) => {
    console.log(pMessage);
}

//함수매개변수에 bye를 넣음
printMessage2('bye');

console.log('====함수의 값 반환====')
//매개편수에 a,b를 받아 더한 값을 반환하는 함수
function sum(a, b) {
    const r = a + b;
    return r;
}

const result = sum(100, 200);
console.log(result);

console.log('======등급만드는 함수======')
const students = [
    { name: 'aaaa', age: 31, score: 85 },
    { name: 'bbbb', age: 31, score: 95 },
    { name: 'cccc', age: 35, score: 76 },
];

//학생의 등급을 결정하는 함수
function getDegree(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    }
    return 'F';

}
//학생 list를 받아 이름과 평균등급을 출력하는 for each문
students.forEach((student) => {
    //name : student.name score : 평균점수 함수 호출
    const result = `name : ${student.name}, score: ${getDegree(student.score)}`;
    console.log(result);

});

console.log('====여러가지 함수 선언 방법====')
//함수 선언식
//function으로 선언하고 파라미터 이름을 지정하는 방식
function printMessage(message) {
    console.log(message);
}
//함수표현식
//변수를 선언하고 변수에 익명함수를 지졍하는 형태
//익명함수 : 변수에 넣지 않은 이름이 없는 함수
const printWelcome = function () {
    console.log('welcome');
}

printMessage('bye');
printWelcome();

console.log('typeof printMessage : %s', typeof printMessage);
console.log('typeof printWelcome : %s', typeof printWelcome);

//함수를 미리 선언하고 변수에 할당
const pm = printMessage;
pm('good morning');

console.log('typeof pm : %s', typeof pm);

console.log('====자바스크립트의 함수성질====')
//자바스크립트의 함수는 일급객체 - first-class citizen
//변수에 넣거나 함수에 파라미터로 전달할 수 있는 객체
function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

let p = plus;
console.log("typeof plus: %s", typeof plus);
console.log("typeof p :%s", typeof p);
console.log("10 + 20 = %d", p(10, 20));

//함수를 파라미터로 받는 함수
function calculate(a, b, func) {
    return func(a, b);
}

console.log(calculate(10, 20, minus));
console.log(calculate(10, 20, plus));

console.log('=========화살표 함수=========')
//중괄호를 사용하지 않아도 됨
const printHello2 = () => console.log('hello');
const printHello3 = () => 'hello2';
//매개변수가 한개인 경우 ()빼도 됨
const printMessage10 = message => console.log(message)
//연산과 return을 한꺼번에 할 수 있음
const plus2 = (a, b) => a + b;
const minus2 = (a, b) => a - b;

printMessage2('message');
console.log('plus : %d', plus(10, 20));
console.log('minus : %d', minus(10, 20));


//원래 함수
function sumAndPrint2(a, b) {
    const result = a + b;
    return `결과는 ${result}입니다`
}
//화살표함수
const sumAndPrint = (a, b) => {
    const result = a + b;
    return `결과는 ${result}입니다`;

}

const result2 = sumAndPrint(10, 20);
console.log(result2);


const studentList = [
    {name: 'aaaa', age:31, math:85,science:75},
    {name: 'bbbb', age:31, math:95,science:83},
    {name: 'cccc', age:35, math:76,science:98},

];

const plus3 = (a,b) => a+b;
studentList.forEach(student => 
    console.log(`${student.name} totla: ${plus3(student.math,student.science)}`));

console.log('--------');

studentList.forEach((student) => {
    console.log(`${student.name} total: ${plus3(student.math,student.science)}`)
});