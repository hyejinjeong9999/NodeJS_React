console.log('========0까지 카운트다운========')

const countdown =(value)=> {
    //value 값을 출력함
    console.log('value : ', value);
    //만약 0이면 return하기
    if(value ===0) return value;
    //현재 value보다 1보다 작게 함수 호출
    return countdown (value-1);
};

console.log('result : ', countdown(20));

console.log('========1~n까지 더하기========')

const sumNumber = (start, end, accumulator) =>{
    //끝에 도달하면 accumulator 값 return하기
    if(start > end) return accumulator;
    //재귀함수로 다음 값 호출, 누적값에 start 더하기
    return sumNumber(start+1, end, accumulator+ start);
};
console.log ('result : ', sumNumber(1,10,0) );

console.log('========factorial========')
//factorial = n * n-1 * n-2 ... * 1
const factorial =(n)=>{
    //0일경우 리턴
    if (n===0) return 1;
    //n값과 그 이전 값을 곱한다
    return n* factorial(n-1);
};
console.log(factorial(4));

console.log('========피보나치 수열========')
//fibo : 0과 1로 시작해 앞의 두수의 합이 되는 수열
//0 1 1 2 3 5 8 13 21 34..

const fibonacci = (num) =>{
    //첫번째 두번째 항은 0, 1이기 때문에 
    if(num <=1 ) return 1;
    //fibo 10 -> 9 -> 8 -> 7... fibo(1) =>1
    return fibonacci(num-1) + fibonacci(num-2);
};

for(let i = 1; i< 10; i+=1){
    console.log(fibonacci(i));
}

console.log('========합계========')

let scores = [85,95,76];
const sum = (list, total, length) => {
    if(length === list.length) return total;
    //total에 list의 값(점수)를 더하고 length는 +1 (다음값) 한 상태로 재귀
    return sum(list,total+list[length], length+1);

}

console.log ('sum:', sum(scores,0,0));

console.log('========평균========')

let scores = [85,95,76];
const average = (list, total, length) =>{
    //scores 끝까지 다 계산한 경우 total / 길이
    if(length === list.length) return total / length;
    return average(list, total + list[length], length+1);
}