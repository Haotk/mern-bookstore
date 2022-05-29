import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config()
const EMAIL_CONFIG = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    } 
};
const mailer = nodemailer.createTransport(EMAIL_CONFIG);
mailer.verify(function(error, success) {
    if (error) {
        console.log('[Lỗi kết nối dịch vụ mail]');
    } else {
        console.log('[Kết nối dịch vụ mail thành công]');
    }
});
export default mailer;