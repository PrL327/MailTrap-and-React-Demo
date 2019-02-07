

const nodemailer = require("nodemailer");

async function mailer(body){
    if(body === null || body === undefined) {
        return;
    }

    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS
        }
    });

    let mailOptions = {
        from: '"Fred Foo" <foo@example.com>',
        to: `${body.email}`,
        subject: "Hello",
        text: `Hello ${body.firstName} ${body.lastName}`,
        html: `<b>Hello ${body.firstName} ${body.lastName}</b>`
    };

    // send mail with defined transport object
    let info = await transport.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);

}

mailer().catch(console.error);

module.exports.mailer = mailer;