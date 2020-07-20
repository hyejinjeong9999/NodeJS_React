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

//path와 fileName을 파라미터로 넘기는 커링함수
//두 파라미터를 받아 파일로 읽고 내용이 에러이면(파일존재x, 빈 내용) throw err 로 에러처리
//data.toString을 통해 파일에서 읽어들인 data를 콘솔로 출력
//파일에서 읽어들인 data를 콘솔로 출력
const openFileAndPrint = path => fileName => fs.readFile(path + fileName, (err,data)=>{

    if (err) throw err;
    console.log(data.toString());
});

//커링함수 openFileAndPrint에 path를 추가함 
//fs.readFile( ./ + filename, (err,data)=>{}) 까지 완성 
// './' 현재위치
// '../' 상위 디렉토리
const thisDirOpenFileAndPrint = openFileAndPrint('./2.FunctionalProgramming/');
const otherDirOpenFileAndPrint = openFileAndPrint('./');

//thisDirOpenFileAndPrint에 파일명을 넘겨줌
//fs.readFile(./ + test.js , (err,data)=>{} ) 까지 완성되어
//fs.readFile를 실행 
thisDirOpenFileAndPrint('test.js');
otherDirOpenFileAndPrint('test2.js');