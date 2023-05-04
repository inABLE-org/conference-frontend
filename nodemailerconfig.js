import nodemailer from "nodemailer"
const senderemail = process.env.SENDER_EMAIL;
const receiveremail = process.env.RECEIVER_EMAIL;
const passkey = process.env.EMAIL_PASS;
export const transporter = nodemailer.createTransport(
    {
        host:'smtp.office365.com',
        auth:
        {
            user:senderemail,
            pass:passkey
        },
        tls: {
            rejectUnauthorized: false
        }
    }
)
export const mailOptions =
{
    from:senderemail,
    to:receiveremail,
    
}