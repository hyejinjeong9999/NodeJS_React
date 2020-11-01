# README

## 1. 폴더구성

* **models**
  * book.js
    * DB 스키마를 구성하는 곳
* ((node_modules))
  * 기본으로 생성되는 폴더
  * 설치된 모듈들이 저장됨
* **routes**
  * index.js
    * RESTAPI 구현부, 책 전체검색 / 단권 검색 / 삭제 / 수정 / 추가
* app.js
  * nodejs 시작부, 연결 / 설정
* package.json
  * nodejs 프로젝트 설정



## 2. API 목록

| ROUTE                     | METHOD | DESCRIPTION               |
| ------------------------- | ------ | ------------------------- |
| /api/books                | GET    | 모든 book 데이터 조회     |
| /api/books/:book_id       | GET    | _id 값으로 데이터 조회    |
| /api/books/author/:author | GET    | author 값으로 데이터 조회 |
| /api/books                | POST   | book 데이터 생성          |
| /api/books/:book_id       | PUT    | book 데이터 수정          |
| /api/books/:book_id       | DELETE | book 데이터 제거          |