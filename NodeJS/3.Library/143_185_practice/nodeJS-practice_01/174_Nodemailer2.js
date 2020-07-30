//텍스트 메일 발송

const nodemailer = require('nodemailer');

const tranporter = nodemailer.createTransport({
    //발송 메일 함수
    service:'Gmail',
    auth:{
        user: 'hyejinj810@gmail.com',
        pass : 'asd45624',
    },

});
//메일 옵션
const mailOptions = {
    from: 'hyejinj810@gmail.com',
    to : 'jeonghj1423@gmail.com',
    subject: 'Hello HTML',
    html:'<h1>Hello HTML</h1><a href="http://www.infopub.co.kr">'+
    '<img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg"/></p></a>',
};

tranporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }else{
        console.log(`Message sent:${info.response}`);
    }
    tranporter.close();

});