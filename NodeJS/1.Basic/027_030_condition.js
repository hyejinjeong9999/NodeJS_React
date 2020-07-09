
console.log('===if===')

if (true) {
    console.log('조건이 ture 일 때 실행');
}

const number = 100;

if (number >= 100) {
    console.log('number는 100보다 큽니다');
}
//false : 실행되지 않음
if (number >= 200) {
    console.log('number는 200보다 큽니다');
}

if (true) {
    console.log('1 : ture');
} else {
    console.log('1 : false');
}

if (false) {
    console.log('2 : ture');
} else {
    console.log('2 : false');
}

const score = 85;
let degree = '';
if (score >= 90) {
    degree = 'A';
} else if (score >= 80) {
    degree = 'B';
} else if (score >= 60) {
    degree = 'C';
} else {
    degree = 'F';
}

console.log('degree : ', degree);


console.log('====switch=====')
const number2 = 3;
let msg = '';
switch (number2) {
    case 1:
        msg = '값이 아닙니다';
        break;
    case 2:
        msg = '값이 아닙니다';
        break;
    case 3:
        msg = '찾는 값입니다';
        break;
    case 4:
        msg = '값이 아닙니다';
        break;
    case 5:
        msg = '값이 아닙니다';
        break;
    default:
}

console.log(msg);