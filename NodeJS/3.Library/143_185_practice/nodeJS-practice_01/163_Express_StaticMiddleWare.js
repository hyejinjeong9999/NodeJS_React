//express static middleware 사용해보기

const express = require('express');

//express 객체 생성
const app = express();
//__dir 노드파일의 경로를 담고있는 변수
//node 프로젝트파일 ->multimedi
app.use(express.static(__dirname));
app.use((request, response) => {
    response.writeHead('200', {
        'Content-Type': 'text/html;charset=utf8'
    });
    //mung.jpeg 이미지 가져오기
    //static 파일의 기본 경로는 public임
    response.end('<img src=/mung.jpeg"/>');
});
app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
