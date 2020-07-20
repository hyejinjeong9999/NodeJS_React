//filter() 함수
console.log('=====fileter=====')
//배열에서 특정 조건을 가진 데이터를 추출하고 싶을 때
//.filter(배열 => 조건)
//배열에서 하나씩 검색을 한 후 해당 item이 맞는지 true/false로 판단
//=> true인 값만 .push를 하는 것
const ages = [11,12,13,16,21,31];

//upper16 = age 배열에서 16보다 큰 값
const upper16 = ages.filter(age => age > 16);
//under13 = age 배열에서 13보다 작은 값
const under13 = ages.filter(age => age < 13);
//between21 and 21  = age 배열에서 12보다 크고 21보다 작은 값
const between12And21 = ages.filter(age => age > 12 && age < 21);

console.log('upper16:', upper16);
console.log('under13:', under13);
console.log('between12and21:', between12And21);

console.log('=====fileter 예제=====')
let students = [
    {name : 'aaaa', age : 31, math : 85, english: 87},
    {name : 'bbbb', age : 31, math : 95, english: 97},
    {name : 'cccc', age : 35, math : 76, english: 84},
    {name : 'dddd', age : 35, math : 84, english: 73},
    {name : 'eeee', age : 26, math : 54, english: 67},
    {name : 'ffff', age : 29, math : 34, english: 100},

];

const mathUpper80 = students.filter(students => students.math > 80);
const mathUpper90AndEnglishUpper70 = students.filter(students => students.math > 90 && students.english > 70);

console.log('mathUpper80 : ', mathUpper80);
console.log('mathUpper90AndEnglishUpper70 : ', mathUpper90AndEnglishUpper70);

console.log('=====map=====')
//.map(함수) : 배열에 있는 item에 map 함수의 파라미터로 받은 함수를 적용한 배열 반환
//map reduce에서 유래한 말
//map reduce  : 대용량 데이터를 분산처리하기 위해 정렬된 순서로 분산처리(map)하고 다시 합치(reduce)는 과정
let list = [1,2,3];
//item에 10을 곱하는 함수
//list 배열의 값을 하나로뽑아서 item으로 전달하고 10,20,30을 각각 생성해 배열로 return
let multipledList = list.map(item => item*10);

multipledList.forEach(item => console.log(item));

console.log('=====map 예제=====')
//직원 연봉 10% 인상하기
const listEmployee = [
    {name : 'aaaa', age : 31, salary :4000},
    {name : 'bbbb', age : 31, salary :5000},
    {name : 'cccc', age : 35, salary :6000},
]

const raisSalaryList = listEmployee.map(employee => (employee.salary*1.1));

raisSalaryList.forEach(salary => console.log('salary : ', salary));

console.log('=====reduce=====')

//reduce((a,b)=>(a+b)) : 해당 배열의 가장 첫번째 인덱스부터 마지막 인덱스까지의 값에 대한 누적 계산
//a+b+c+d...를 의미
let scores = [10,20,30,40,50];
//스코어의 모든 값 더하기
let sum = scores.reduce((a,b)=> (a+b)); 
//초기값을 10으로 지정 10+10+20+30+40,,,
let sumWithInitValue = scores.reduce((a,b) => (a+b),10);

console.log('sum : ', sum);
console.log('sumWithInitValue : ', sumWithInitValue);

console.log('=====map / reduce 예제=====')

students = [
    {name : 'aaaa', age : 31, score : 85},
    {name : 'bbbb', age : 31, score : 95},
    {name : 'cccc', age : 35, score : 76},

];
//map, reduce : 여러 데이터를 나누어 처리해 결과를 합치는 역할
//원본데이터를 그대로 이용하면 원본 데이터 손실 가능성, 데이터 복잡한 접근등의 문제가 있어
//map이나 reduce를 사용한다

//map : 원본 데이터에서 처리 대상 데이터를 분리해 새로운 데이터 셋을 만들어 줌
//모든 학생들의 점수만 뽑아내서 저장한 배열
scores = students.map(student => student.score);

//reduce : 새로운 데이터셋을 전달된 함수를 이용해 계산하고 결과를 추출
//모든 값을 더해 sum에 저장
sum = scores.reduce((a,b) => a+b,0);
console.log('sum : ', sum);

console.log('=====fileer / map / reduce 예제 =====')

students = [
    {name : 'aaaa', age : 31, score : 85},
    {name : 'bbbb', age : 31, score : 95},
    {name : 'cccc', age : 35, score : 76},

];

//점수가 80이상인 학생 필터링 하기
//=> 필터링 한 값들의 score 배열 저장
//=> 저장한 값들의 합
let mathUpper80StudentSum = students
.filter(student => student.score >80)
.map(student => student.score)
.reduce((a,b)=>(a+b));

console.log('sum : ', mathUpper80StudentSum);

console.log('=====fileer / map / reduce 예제 : 합계 =====')
 
let employeeList = [
    {name : 'aaaa', age : 31, department : 'developtment'},
    {name : 'bbbb', age : 31, department : 'design'},
    {name : 'cccc', age : 35, department : 'developtment'},

];


//개발자의 나이의 합 구하기
//개발자의 리스트 구하기 : filter로 부서가 developement 인 값 구하기
//map으로 employyee.age list를 deveopmentAgeList를 만듬
let developtmentAgeList = employeeList
.filter(employee => employee.department === 'developtment')
.map(employee => employee.age);
//reduce로 developmentAgeList의 값을 모두 더함

console.log(developtmentAgeList.reduce((a,b)=>a+b));

console.log('=====fileer / map / reduce 예제 : 평균 =====')
students = [
    {name : 'aaaa', age : 31, math : 85},
    {name : 'bbbb', age : 31, math : 95},
    {name : 'cccc', age : 35, math : 76},
    {name : 'dddd', age : 24, math : 84},
    {name : 'eeee', age : 26, math : 54},
    {name : 'ffff', age : 29, math : 34},

];

//나이가 21 이상 30 미만 점수 평균 구하기

let between21to30StudentsAverage = students
//84 54 34
.filter(student => student.age >= 21 && student.age<30)
.map(student => student.math)
//previous : 배열의 첫번째 값, 혹은 초기값 = 0으로 시작
//current :  배열 내 현재 처리되고 있는 값
//index : 현재 처리되고 있는 값으 ㅣindex
//array : 현재 사용되고 있는 배열
//(0/3) -> (0/3) + (84/3) -> (0/3+ 84/3) + 54/3 -> (0/3 + 84/3 + 54/3) + 34/3
.reduce((previous, current, index, array)=> previous+(current/array.length),0);

console.log('average : ', between21to30StudentsAverage);