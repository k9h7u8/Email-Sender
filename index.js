const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello");
})

app.get('/mail', async (req, res) => {
    res.send("Sending mail");
    async function main() {

        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'javon54@ethereal.email',
                pass: 'zEHYAuJ3S4NQv43XUv'
            }
        });

        let info = await transporter.sendMail({
            from: '"Khushi 👻" <javon54@ethereal.email>',
            to: "khushi@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    }

    main().catch(console.error);
})


app.listen(port, console.log(`Listening on port ${port}`))