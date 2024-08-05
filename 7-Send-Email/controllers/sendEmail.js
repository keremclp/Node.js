const nodemailer = require('nodemailer')

const sendEmail = async (req,res) =>{
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "cassandra.schulist0@ethereal.email",
        pass: "7NBTv4bkWSxUUgm1NE",
      },
    });
    let info = await transporter.sendMail({
        from: '"CLP Software" <kerem00962@gmail.com>',
        to: 'bar@example.com',
        subject:'Hello',
        html:'<h2>Sending emails with Node.js</h2>'
    })
    res.json(info);
}

module.exports = sendEmail