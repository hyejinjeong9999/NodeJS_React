console.log('=======try catch=======')

try {
    //없는 함수 호출 -> 오류
    printMessage('hello');
} catch (e) {
    //오류가 날 경우 오류 메시지를 출력한다
    console.log('error : ', e);
}
//프로그램이 중지되지 않고 무사히 실행된다
console.log('program finished');

console.log('=======try catch final=======')

const printHello = () => console.log('hello');
//정상적으로 실행되는 코드
try {
    printHello();
} catch (e) {
    console.error(e)
} finally {
    //fianlly : 무조건 실행되는 코드
    console.log('finally1');
}

console.log('=======try catch final2=======')

try {
    printBye();
} catch (e) {
    console.error(e);
} finally {
    console.log('finally2');
}