/*
Require : 다른 모듈들을 불러올 때 사용
const printSomthing = require('모듈경로와 파일명');
const fs = require('fs') -> node.js 내장모듈임, 이런 경우는 경로지정할 필요 x
이름.experts할때정한이름
*/

//require로 119_exports에 있는 모듈들 불러옴 
//이 모듈들은 printSomting에 저장
const printSomthing = require('./119_exports');

//printSomthing에서 printHello()라고 지정한 모듈 받아오기
printSomthing.printHello();
//printSomthing에서 printMessage() 라고 지정한 모듈 받아오기
printSomthing.printMessage('bye');