//텍스트 메일 발송

const nodemailer = require('nodemailer');
const tranporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user: 'hyejinj810@gmail.com',
        pass : 'asd45624',
    },

});

const mailOptions = {
    from: 'hyejinj810@gmail.com',
    to : 'jeonghj1423@gmail.com',
    subject: 'Hello',
    text: 'Hello world',
};

tranporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }else{
        console.log(`Message sent:${info.response}`);
    }
    tranporter.close();

});