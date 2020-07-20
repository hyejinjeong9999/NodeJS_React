/*
함수형 프로그래밍 : 프로그램을 만드는 방법 중 하나

Node.js는 명령형 프로그래밍의 성격을 가지고 있지만 함수형 프로그래밍을 지향,권장함
함수형 프로그래밍 : 외부효과(side effect)가 없는 함수만의 조합을 이용해 프로그래밍 하는 방법
외부세계의 값을 읽어오지 않고 영향을 지치지도 않는 함수만을 만드는 것을 목표로 함
for문과 변수의 사용을 줄임 => for문대신 재귀함수 사용함
*/


//return
//(a,b) => a+b 함수를 리턴
//returnFunction 함수는 파라미터를 가지고 있지 않은 함수
//내부적으로 두 파라미터를 받아 그 합을 리턴하는 함수 => curring 방식
const returnFunction =() => (a,b) => a+b;

//plus 변수에 returnFunction를 넣음
//returnFunction을 통해 두 파라미터를 갖는 함수가 된다
const plus = returnFunction();

//결과 값 리턴
console.log(plus(10,20));