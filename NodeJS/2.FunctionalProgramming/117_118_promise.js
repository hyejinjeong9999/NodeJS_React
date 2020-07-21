/*
비동기 처리 : 자원을 효율적으로 사용, 속도 높일 수 있음
비동기로 실행할 땐 리턴 값이 없는 콜백함수를 주로 사용
=> 함수형 프로그래밍과 유사
함수형 프로그래밍
return이 없는 프로그래밍 방식
callback을 사용해 다음에 실행할 함수를 파라미터로 넘겨줌
call back에 callback이 이어져 가독성이 떨어짐
=> promise 등장
promise를 이용하면 callback 중점을 좀 더 쉽게 작성할 수 있음
코드의 가독성을 높이고 에러처리와 디버깅 작업이  수월함

const promiseResult = new Promise((resolve) =>{
    resolve(1);
}).then((result) =>{})
*/



//roslve에 넣는 값이 return이라고 생각하기 
let promiseFirst = new Promise(resolve => resolve(1))
//다음에 실행되는 코드 result에 1이 들어옴
.then(result => `${result + 10}`);

let promiseSecond = new Promise(resolve => resolve(1))
.then(result => `${result}hello`);
//resolve에 1, 뒤에 hello를 붙이는 연산

Promise.all([promiseFirst,promiseSecond]).then(result=>console.log(result));
//promise(첫번째연산, 두번째연산) => 이 값을 result에 담에 result에 출력

console.log('====promise.all()을 이용해 후처리====')

//Promise.all([프로미스1, 프로미스2])
//.then(()=>{뒤에 처리할 작업})
//여러개의 비동기 처리가 모두 끝난 후에 특정 로직을 실행하고 싶을 때 Promise.all()사용
//Promise1, Promise2가 끝난 후 처리할 작업을 .then() 뒤에 넣는다


promiseFirst = new Promise(resolve => resolve(1))
.then(result => `${result + 10}`);
//resolve에 1을 넣고 10을 더하는 Promise => 11

promiseSecond = new Promise(resolve => resolve(2))
.then(result => `${result + 20}`);
//resolve에 2를 넣고 20을 더하는 연산 => 22

Promise.all([promiseFirst, promiseSecond]).then((result)=>{
    //promise 1과 promise2의 리턴값을 배열에 넣어 then에 전달됨
    //result : [11, 22]
    console.log('result : ', result);
    //배열이기 때문에 0번째 1번째 index를 숫자로 변환한 뒤 더함
    console.log('sum : ', Number(result[0]) + Number(result[1]));
});