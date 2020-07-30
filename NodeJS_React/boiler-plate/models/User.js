const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    //권한 부여를 위한 role
    role: {
        type: Number,
        default: 0

    },
    //{} 로 안싸고 단일로 지정해 줘도 됨
    image: String,
    //유효성관리를 위한 token
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }

})

//유저 모델을 저장하기 전에 function을 실행하겠다
//이 함수가 끝나면 다시 index.js의 user.save로 돌아간다(next)
userSchema.pre('save', function (next) {
    //우리가 방금 받은 user데이터를 user에 저장
    var user = this;
    //비밀번호를 바꿀때만 암호화
    if (user.isModified('password')) {
        //solt로 -> saltround, 함수 실행 (에러일경우 에러 표시 정상인 경우 salt)
        bcrypt.genSalt(saltRounds, function (err, salt) {
            //err일 경우 그냥 index로 이동
            if (err) return next(err)
            //salt를 제대로 생성했다면 실행
            //user의 날것의 비밀번호, salt, 함수실행 (에러일 경우,암호화된 비밀번호)
            bcrypt.hash(user.password, salt, function (err, hash) {
                //에러가 발생했을 경우 index로 이동
                if (err) return next(err)
                //암호만들기에 성공했으면 pw에 hash를 저장하고 index로 이동
                user.password = hash
                next()
            })
        })
        //비밀번호가 아닌 다른 것을 바꿀때는 그냥 넘어간다
        //next가 없으면 안넘어감
    } else {
        next()

    }
})
//index.js의 comparePassword 와 이름이 같아야 함
userSchema.methods.comparePassword = function (plainPassword, cb) {
    //plain pw와 암호화된 비밀번호가 같은지 비교
    // plain pw를 암호화 시켜서 비교하기

    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        //비밀번호가 같지 않으면 err call back
        if (err) return cb(err),
            //맞는경우 true 반환
            cb(null, isMatch)
    })
}
//index.js generateToken와 이름이 같아야 함
//cb call bask function을 의미 
userSchema.methods.generateToken = function (cb) {
    //json webtoken을 이용해서 token 생성
    var user = this;
    //id , 임의의 값
    var toekn = jwt.sign(user._id, 'secretToiken');
    //   user._id + 'secretToiken' = token 을 만들어냄
    // 만들어 낸 토큰 값을 저장
    user.toekn = toekn
    //만약 에러가 나면 err 메시지를 call back(index.js에 되돌려줌)한다
    //아닌경우 err는 null 로 user 정보는 보냄
    user.save(function (err, user) {
        if (err) return cb(err)
        cb(null, user)
    })

}


//스키마를 model로 감쌈
const User = mongoose.model('User', userSchema)
//다른 파일에서도 사용가능하게 export 한다
module.exports = { User }