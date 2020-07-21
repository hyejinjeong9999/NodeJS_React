/*
fs.write()파일로 출력하기
프로그램 실행 결과를 파일에 저장
*/

console.log('====파일저장====')

let fs = require('fs');
const { constants } = require('buffer');
const contents = 'hello\nbye\n안녕';
fs.writeFile('./message.txt',contents,function(err, result){
    if(err) console.log('error', err);
});

console.log('====동기파일열기====')
/*
fs.readFileSync()파일꺼내기
toString으로 변환한 후 출력 가능
동기식이라 파일을 열때 다른 작업 불가능
*/
fs = require('fs')
const data = fs.readFileSync('./message.txt');
const string = data.toString();
console.log(string);

console.log('====비동기파일열기====')
fs = require('fs')
//callback함수로 err,data 함수를 넘김
fs.readFile('./message.txt', (err,data)=>{
    //err가 난 경우 err 표시
    if(err) throw err;
    //err 없는 경우 data출력
    console.log(data.toString);
})

console.log('====파일 내용 수정====')
fs = require('fs');
//readfile로 비동기적 파일 읽기
fs.readFile('./message.txt',(err,data)=>{
    if (err) throw err;
    //내용을 읽기
    let contents = data.toString();
    //내용을 변경하기
    contents = 'replaced';
    //변경된 내용 다시 저장하기
    fs.writeFile('./message.txt', contents,(err,data)=>{
        if(err) throw err;

    });
})

console.log('====파일 내용 추가====')
/*
fs.appendFile(파일경로+이름, 추가할 내용)을 이용해서 파일 내용 추가 가능

*/
fs = require('fs');
const list = [1,2,3,4,5];
//list 값을 뽑아내 item이라는 변수에 담음
//chapter + item + \n(개행) 
//비동기기 때문에 추가되는 순서는 랜덤하다
list.forEach(item=> fs.appendFile('./chapters.txt',`chapter ${item}\n`,(err,data)=>{
    if (err) throw err;
}))

console.log('====디렉토리 만들기====')

fs = require('fs');
//실행 환경 디렉토리의 절대경로를 받아온다 + img 폴더명
let dirName = `${__dirname}/img`;
//existsSync 디렉토리가 있는지 확인
if(!fs.existsSync(dirName)){
    //없는 경우 dir 생성
    fs.mkdirSync(dirName);
}

console.log('====파일 리스트 추가하기====')
/**
 * readdirSync(경로) : 경로에 있는 dir을 출력
 */
let testFolder = './';
let fw = require('fs');
let filenameList = fs.readdirSync(testFolder);
filenameList.forEach((fileName)=>{
    console.log(fileName);
});
console.log('====list를 json 형식으로 파일에 저장하기====')
/**
 * JSON.stringify()는 JSON오브젝트를 JSON으로 변환해준다
 */
fs = require('fs');
let userList = [
    {name : 'aaaa', age : 31},
    {name : 'bbbb', age : 32},
];
//userList를 JSON 문자열 표기로 전환한 후 list.json 파일로 저장
fs.writeFile('./list.json', JSON.stringify(userList),(err,data)=>{
    if(err) throw err;
});

console.log('====파일을 json 형식으로 불러오기====')
fs = require('fs');
fs.readFile('./list.json',(err,data)=>{
    if (err) throw err;
    let json = JSON.parse(data.toString());
    console.log("name : ", json[0].name);
    console.log("name : ", json[1].name);

})

console.log('====파일 이름 바꾸기====')
fs = require('fs');
const renameFile = (fromFilePathName, toFilePathName) =>{
    fs.rename(fromFilePathName, toFilePathName,(err) =>{
        if(err) console.log(`ERROR : ${err}`);
    });
};

let fromFilePathName = './hello.txt'
let toFilePathName = './bye.txt'

renameFile(fromFilePathName,toFilePathName);

