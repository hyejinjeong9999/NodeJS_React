const mongoose = require('mongoose')

//스키마 생성
const userSchema = mongoose.Schema({
    //필드들 작성
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim:true,
    },
    password:{
        type : String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    //권한 부여를 위한 role
    role: {
        type:Number,
        default: 0

    },
    //{} 로 안싸고 단일로 지정해 줘도 됨
    image: String,
    //유효성관리를 위한 token
    token:{
        type: String
    },
    tokenExp:{
        type:Number
    }

})
//스키마를 model로 감쌈
const User = mongoose.model('User',userSchema)
//다른 파일에서도 User로 사용가능하게 export 한다
module.exports = {User}