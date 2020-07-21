//모듈별로 개발할 때 모듈을 분리하는 방법
//exports.이름 = 함수 이름
//함수 자체를 export할 때는 {} 사용 안함

/*
코드의 재사용을 위해 모듈별 분리가 필요하다
모듈을 분리하고 다른 곳에서 사용하기 위해 'exports'사용
exports한 모듈을 불러오려면 require를 사용해야 한다

사용방법
exports.함수이름 = 위에서 선언한 함수이름
exports.함수이름 = (message) => { console.log(message); }

*/

//exports할 함수 선언
const printHello = () => console.log('hello');
//experts.받는쪽에서 호출할 함수명 = 함수이름
//함수 자체를 넘기는 것이기 때문에 printHello()아님
//익명함수 exports
exports.printHello = printHello;
exports.printMessage = (message) => {
    console.log(message);
};