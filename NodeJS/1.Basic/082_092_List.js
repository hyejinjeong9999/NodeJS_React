console.log('=====list=====');

//리스트
let studentList = [
    {name : 'aaaa', age : 31, score : 85},
    {name : 'bbbb', age : 31, score : 95},
    {name : 'cccc', age : 35, score : 76}
];
//0번째 출력
console.log(studentList[0]);
console.log('------------')
///dddd학생 넣기
let student1 = {name : 'dddd', age : 26, score : 85};
studentList.push(student1);
console.log(studentList);

console.log('------------')

//list 마지막거 빼기
studentList.pop();
console.log(studentList);

console.log('=====reverse=====');
//reverse : 배열을 역순으로 만들고 싶을 때
let numbers = [1,2,3,4];
numbers.reverse();
console.log('numbers : ', numbers);

//문자열.split('') , 문자열을 하나하나 배열에 넣기
let stringArray = 'hello'.split('');
stringArray.reverse();
console.log('stringArray : ', stringArray);

console.log('=====sort=====');
numbers = [3,6,2,8,1];
let strings = [
    'timeoutsRemaining',
    'flagrantFouls',
    'defensive3Seconds',
    'jumpshots',
    'dunks',
    'layups',
];
//오름차순 정렬
const sortedNumbers = numbers.sort();
const sortedStrings = strings.sort();
//reverse로 내림차순 가능
console.log('sortedNumbers : ', sortedNumbers);
console.log('sortedNumbersDesc : ', sortedNumbers.reverse());
console.log('sortedStrings : ', sortedStrings);
console.log('sortedStringsDesc : ', sortedStrings.reverse());

console.log('=====조건을 준 sort=====');

studentList = [
    {name : 'aaaa', age : 31, math : 85, english: 87},
    {name : 'bbbb', age : 31, math : 95, english: 97},
    {name : 'cccc', age : 35, math : 76, english: 84},
    {name : 'dddd', age : 35, math : 84, english: 73},
    {name : 'eeee', age : 26, math : 54, english: 67},
    {name : 'ffff', age : 29, math : 34, english: 100},

];

//나이 오름차순, 수학점수 내림차순으로 조거을 줄 때
//오름차순으로 정렬하고 싶으면 1, 내림차순으로 정렬하고 싶으면 -1
studentList.sort((beforeStudent, nextStudent)=>{
    if(beforeStudent.age > nextStudent.age) return 1;
    else if(beforeStudent.age < nextStudent.age) return -1;
    else if(beforeStudent.math > nextStudent.math) return -1;
    else if(beforeStudent.math < nextStudent.math) return 1;
    return 0;
});

console.log(studentList);

console.log('=====JSON 오브젝트 정렬=====');
studentList = [
    {name : 'aaaa', age : 31, math : 85, english: 87},
    {name : 'bbbb', age : 31, math : 95, english: 97},
    {name : 'cccc', age : 35, math : 76, english: 84},
    {name : 'dddd', age : 35, math : 84, english: 73},
    {name : 'eeee', age : 26, math : 54, english: 67},
    {name : 'ffff', age : 29, math : 34, english: 100},

];
//math를 기준으로 정렬하고 싶은 경우에 now.math - next.math 를 이용해 정렬
// studentList.sort((now, next)=> now.math - next.math);
// console.log('studentList : ', studentList);

//흐름을 보여주는 함수
//원래 a -> b -> c-> d 순인데 왜이러지 ㅜ?
let compare = (now, next) =>{
    console.log('------------');
    console.log('now : ', now);
    console.log('next : ', next);
}
studentList.sort(compare);

console.log('=====배열에서 필요한 부분만 뽑기 .slice=====')

strings = [
    'timeoutsRemaining',
    'flagrantFouls',
    'defensive3Seconds',
    'jumpshots',
    'dunks',
    'layups',
];
//1번째 index~ 2번째 index까지 2개 추출
//배열.slice(시작,미만)
let sliced = strings.slice(1,3);
console.log('sliced : ', sliced);

console.log('=====예제=====')
studentList = [
    {name : 'aaaa', age : 31, math : 85, english: 87},
    {name : 'bbbb', age : 31, math : 95, english: 97},
    {name : 'cccc', age : 35, math : 76, english: 84},
    {name : 'dddd', age : 35, math : 84, english: 73},
    {name : 'eeee', age : 26, math : 54, english: 67},
    {name : 'ffff', age : 29, math : 34, english: 100},

];
//수학순으로 정렬
let sorted = studentList.sort((now,next)=> now.math - next.math);
console.log('sorted : ', sorted);
//역순 정렬
reverse = sorted.reverse();
console.log('reverse : ', reverse);
//수학 상위 3명만 추출
sliced = reverse.slice(0,3);
console.log('sliced : ', sliced);


console.log('=====배열 합치기=====')

let part1 = ['aaaa', 'bbbb'];
let part2 = ['cccc', 'dddd'];
let part3 = ['eeee', 'ffff'];

//12 합치기
let team = part1.concat(part2);
//123 합치기 -> 여러개 합치기 가능
let team2 = part1.concat(part2,part3);
//순서 상관있음
let team3 = part1.concat(part3,part2);


console.log('team : ',team);
console.log('team2 : ',team2);
console.log('team3 : ',team3);


console.log('=====배열 shift(), unshift=====')


let destination = ['런던', '파리','로마'];
console.log(destination);

//shift : 배열의 맨 앞에 있는 값을 뽑을 수 있음, 뽑은 값 사라짐
//첫번째 값 런던 출력 -> 출력된 후 사라짐
console.log(destination.shift());
//빠진 후 전체 list
console.log(destination);

//unshift : 맨 앞에 값을 추가함
destination.unshift('뉴욕');
console.log(destination);


console.log('=====배열 .pop()=====')

destination = ['런던', '파리','로마'];
console.log(destination);
//pop : 맨 뒤의 있는 값 추출
console.log(destination.pop());
//뒤의 값 '로마' 가 사라짐
console.log(destination);

console.log('=====배열 조회=====')
//반복문과 조건문을 사용해 값 조회

destinationName = ['런던', '파리','로마', '파리', '암스테르담'];

const serchDestination = '파리';

//searchDestination과 destinamtinName[i]가 일치하면 출력하기
for(let i = 0; i< destination.length; i++){
    if(serchDestination === destinationName[i]){
        console.log(serchDestination,'입니다')
        break;
    }
}
