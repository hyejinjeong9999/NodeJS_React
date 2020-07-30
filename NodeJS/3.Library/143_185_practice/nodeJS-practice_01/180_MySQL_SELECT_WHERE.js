const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'comicbook',
    port: '3306',
});

connection.connect();

//SELECT 쿼리문 사용 * 사용
connection.query('select * from books'
,(error, results, fields)=>{
    if(error) throw error;
    console.log(results);
});

// SELECT * 대신 컬럼명 하나씩 기입
connection.query('select number, gere, name, writer, releasedate from books'
,(error, results, fields)=>{
    if(error) throw error;
    console.log(results);
});
// SELECT WHERE문으로 조건
connection.query('select * from books where gere=\'action\''
,(error, results, fields)=>{
    if(error) throw error;
    console.log(results);
});
// SELECT WHERE문으로 조건 or
connection.query('select * from books where gere=\'action\' or gere=\'comedy\''
,(error, results, fields)=>{
    if(error) throw error;
    console.log(results);
});
// SELECT WHERE문 LIKE
connection.query('select * from books where releasedate LIKE \'2017%\''
,(error, results, fields)=>{
    if(error) throw error;
    console.log(results);
});

// SELECT ORDER BY
connection.query('select number, gere, name, writer, releasedate from books order by releasedate;'
,(error, results, fields)=>{
    if(error) throw error;
    console.log(results);
});
// SELECT ORDER BY DESC
connection.query('select number, gere, name, writer, releasedate from books order by releasedate desc;'
,(error, results, fields)=>{
    if(error) throw error;
    console.log(results);
});





connection.query('describe books', (error, results, fields)=>{
    if(error) throw error;
    console.log(results);
});


//연결종료

connection.end();