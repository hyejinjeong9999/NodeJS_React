//설정

//express
var express = require('express');
var app = express();
//bodyParser
var bodyParser  = require('body-parser');
//mongoose
var mongoose    = require('mongoose');


//mongoose config
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
//connect testdb 
mongoose.connect('mongodb://localhost/mongodb_tutorial')

//define dbmodel
var Book = require('./models/book');


//bodyparser config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//router
var router = require('./routes')(app, Book);

//run server
var port = 3000; 

app.get('/',function(req,res){
    res.send('Hellow world');
});

app.listen(port, function(){
    console.log("Express server has started on port " + port)
   });