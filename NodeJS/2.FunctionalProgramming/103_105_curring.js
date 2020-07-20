/*
커링 curring
여러개의 파라미터를 갖는 함수가 있을 때 그 중의 일부의 파라미터만 필요로 하는 함수를 만드는 기법
함수를 재사용할 때 유용함
*/
//화살표 개수만큼 파라미터로 값을 넘겨주어야 함
//x는 숫자 y는 함수.. 이런식으로 변형이 가능하기 때문에 curring을 사용함

console.log('=====curring=====')
const add = x => y => x+y;
const add10 = add(10);

console.log(add10(20));
console.log(add(10)(20));

console.log('=====curring 예제1=====')
// liquid와 espresso라는 두개의 파라미터를 받아 함치는 기능을 하는 화살표 함수
const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`;

//liquid에 water/milk를 넣어서 만듦
//아직 한개의 인자만 받았기 때문에 값을 리턴하지 않고 함수를 리턴함
const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');

//앞에서 선언한 함수에 coffe bean을 넣어서 최종적으로 값 반환 
const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte)

console.log('=====curring 예제2=====')

const fs = require('fs');

const openFileAndPrint = path => fileName => fs.readFile(path + fileName, (err,data)=>{

    if (err) throw err;
    console.log(data.toString);
});

const thisDirOpenFileAndPrint = openFileAndPrint('./');
const otherDirOpenFileAndPrint = openFileAndPrint('../');

thisDirOpenFileAndPrint('104_curring_example.js');
otherDirOpenFileAndPrint('package.json');