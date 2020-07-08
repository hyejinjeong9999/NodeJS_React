const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyejin:1234@boilerplate.o3a5z.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,  useFindAndModify: false 
}).then(()=> console.log('MongoDB Connected....'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 테스트 입니다'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))