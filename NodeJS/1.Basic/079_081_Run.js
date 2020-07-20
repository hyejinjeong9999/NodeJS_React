//실행 함수
console.log('=====정기적으로 실행 : setInterval=====');
//setInterval(실행할함수,시간)

//1초에 1번씩 hello
//함수 자체를 setInterval로 설정  
// setInterval(() => console.log('hello'),1000);

// //2초에 한번씩 bye
// //함수를 미리 설정해서 2초에 한번씩 함수 실행 
// const printBye =() => console.log('bye');
// setInterval(printBye,2000);

console.log('=====몇초 후에 실행 : setTimeout=====');
//setTimeout(함수,시간) : 시간 후에 함수 실행

//3초 후에 hello
//setTimeout(()=>console.log('hello'),3000)

console.log('=====정기적으로 실행 종료 : clearInterval(fn)=====');
//clearInterval(함수명); => 함수 종료
//setTimeout(()=>{clearInterval(함수명);}, 시간) -> 시간 후에 함수 종료

//1초에 한번씩 'hello' 출력
const playInterval = setInterval(() => console.log('hello'),1000);
// //5초 후에 함수 종료
setTimeout(()=>{clearInterval(playInterval);}, 5000);