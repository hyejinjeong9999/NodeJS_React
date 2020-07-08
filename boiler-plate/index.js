const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//application/x-www-form-urlencoded 형식의 데이터를 분석해 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
//application/json 형식의 데이터를 분석해 가져옴
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyejin:1234@boilerplate.o3a5z.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 테스트 입니다'))

app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보들을  client에서 가져오면 
    //그것들을 db에 넣어준다
    //User model을 가져오기

    const user = new User(req.body)
    //mongo db의 user model에  저장
    user.save((err, body) => {
        //에러가 난다면 json 형식으로 err 메시지전달
        if (err) return res.json({ success: false, err })
        //성공했다면 200(성공)일시 json 형식으로 true 전달 
        return res.status(200).json({ success: true })
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))