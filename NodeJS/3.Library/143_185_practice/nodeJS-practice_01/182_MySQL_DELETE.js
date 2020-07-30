const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'comicbook',
    port: '3306',
});

connection.connect();


//delete query
connection.query('delete from books where number =2 ;',(error, results,fields)=>{
    if (error) throw error;
    console.log(results);
    });

connection.query('select * from books',(error, results,fields)=>{
    if(error) throw error;
    console.log(results);
});

//연결종료

connection.end();