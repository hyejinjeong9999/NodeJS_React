//process
//컴퓨터 환경과 관련 정보
console.log(process.env);
console.log('-------');
//프로세서의 아키텍처
console.log(process.arch);
console.log('-------');
//현재 프로그램이 실행된 시간
console.log(process.uptime());
console.log('-------');
//메모리 사용 정보
console.log(process.memoryUsage());
console.log('-------');
//Node.js 버전
console.log(process.version);
console.log('-------');


//console
console.log('Number: %d + %d = %d', 1,2,3+4 );
console.log('String: %s', 'Hello World');
console.log('Json: %j', {name: 'node.js'});
console.log('String1','String2');