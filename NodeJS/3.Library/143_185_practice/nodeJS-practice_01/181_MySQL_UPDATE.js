const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'comicbook',
    port: '3306',
});

connection.connect();


//UPDATE 쿼리문 필드수정 =>gere 변경
connection.query('update books set gere = \'romance\' , writer = \' JI\' Where number=2 ;'
,(error, results, fields)=>{
    if(error)throw error;
    console.log(results);

});

//연결종료

connection.end();