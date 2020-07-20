//합성함수 : 함수 여러개를 합쳐서 사용
//hello(world()) -> world()의 함수 결과를 hello()에 넘겨줌
//밥먹고 이닦기 : 밥먹기 + 이닦기 의 합성함수
const multiple5 = x => x * 5;
const add10 = x=> x+10;

const plus = (a,b) => a+b;
const minus = (a,b) => a-b;

//add10(20)의 결과인 30을 multiple5에 넣음 =>150
console.log(multiple5(add10(20)));
//plus(10,20)의 결과인 30과 40을 뺌 => -10
console.log(minus(plus(10,20),40));