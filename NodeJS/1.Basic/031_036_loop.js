const number = 9;
for (let value = 1; value < 10; value += 1) {
    console.log(number * value);
}

//2중 for문
for (let j = 2; j <= 9; j += 1) {
    console.log('==== %d단 시작====', j);
    for (let i = 1; i <= 9; i += 1) {
        console.log('%d * %d = %d', j, i, j * i);
    }
}

console.log('======break======')
const studentList = [
    { name: 'aaaa', age: 31, score: 85 },
    { name: 'bbbb', age: 31, score: 95 },
    { name: 'cccc', age: 35, score: 76 },
    { name: 'dddd', age: 31, score: 94 },
];

let resultStudent = '';
//0부터 학생의 수만큼 반복해서 cccc를 찾는 for문
for (let index = 0; index < studentList.length; index += 1) {

    //cccc를 찾으면 cccc의 정보를 resultStudent에 저장하고 break
    //break를 하면 반복문을 중단함
    if (studentList[index].name === 'cccc') {
        resultStudent = studentList[index];
        break;
    }
    //cccc가 아닌경우 출력
    console.log(studentList[index].name, '은 ccc가 아닙니다')
}
console.log('resultStudent : ', resultStudent);

console.log('====for of====')

const userList = [
    { name: 'aaaa', age: 31, score: 85 },
    { name: 'bbbb', age: 31, score: 95 },
    { name: 'cccc', age: 35, score: 76 },
];

//list를 전부 출력해주는 for of문
//for of는 list 크기만큼 반복된다
for (const user of userList) {
    console.log('user : ', user)
}

console.log('=====for each=====')
const listUser = [
    { name: 'aaaa', age: 31 },
    { name: 'bbbb', age: 31 },
    { name: 'cccc', age: 35 },
];
//listUser에 있는 요소들을 user라는 이름으로 뽑아낸다
//그 user의 값을 출력한다
listUser.forEach(function (user) {
    console.log(user);
});

console.log('--------');
//ARROW FUNCTION 사용
listUser.forEach(user => console.log(user));

console.log('=======while======');
const number2 = 9;
let value = 1;

while (value < 10) {
    console.log(number * value);
    value += 1;
}
