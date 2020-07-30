const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');
const { User } = require("./models/User");

//application/x-www-form-urlencoded 형식의 데이터를 분석해 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
//application/json 형식의 데이터를 분석해 가져옴
app.use(bodyParser.json());
//쿠키파서 사용
add.use(cookieParser());


const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
mongoose.connect(config.MongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 테스트 입니다 nodemon 테스트입니다'))

app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보들을  client에서 가져오면 
    //그것들을 db에 넣어준다
    //User model을 가져오기

    const user = new User(req.body)
    //mongo db의 user model에  저장
    //저장하기 전에 비밀번호를 암호화시키기
    user.save((err, userInfo) => {
        //에러가 난다면 json 형식으로 err 메시지전달
        if (err) return res.json({ success: false, err })
        //성공했다면 200(성공)일시 json 형식으로 true 전달 
        return res.status(200).json({ success: true })
    })
})

//db에서 요청한 E-mail 찾기
//db에서 요청한 E-mail이 있다면 비밀번호가 같은지 확인 
//=> Bcrypt를 이용해 plain password와 암호화된 hashed pw가 같은지 확인
//비밀번호까지 같다면 token 생성
//=> 토큰 생성을 위해 JSONWWEBTOKEN 라이브러리를 다운로드
//npm install jsonwhbtoken --save

add.port('/login', (req, res) => {
    //요청된 이메일을 db에서 있는지 찾기
    //findOne : mongodb에서 제공하는 함수
    User.findOne({ email: req.body.email }, (err, user) => {
        //없으면
        if (!userInfo) {
            return res.json({ loginSuccess: false, 
                message: "제공된 이메일에 해당되는 유저가 없습니다" 
            })
        }

          //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
          //req.body.password 요청할때 주는 pw
         //isMatch : 비밀번호가 맞을 경우

         //user.model에 comparePassword 있음
          user.comparePassword(req.body.password, (err, isMatch)=>{
            //같지 않은 경우 = false 일 경우  
            if(!isMatch) 
                return res.json({loginSuccess : false, message : "비밀번호가 틀렸습니다"})
        
               //비밀번호까지 맞다면 토큰을 생성
            
               //user.model에 generateToken 있음
            user.generateToken((err, user)=> {
                if(err) return res.status(400).send(err);

                //user.token을 쿠키에 저장한다
                res.cookie("x_auth",user.token)
                .status(200)
                .json({loginSuccess : true, userId : user._id})
                //

            })

          })

    })
    

  

 


})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))